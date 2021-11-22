import { Portfolio } from "../../src/portfolio";
import { Stock } from "../../src/stock";

describe("Feature: Portfolio", () => {
  describe("given a portfolio with a list of stock", () => {
    describe("when they try to calculate the profit", () => {
      it("should return the profits", () => {
        const stockOne = new Stock(
          ["2021-10-10", 10],
          [
            ["2021-10-10", 10],
            ["2021-10-11", 9],
            ["2021-10-12", 11],
          ]
        );

        const stockTwo = new Stock(
          ["2021-10-10", 10],
          [
            ["2021-10-10", 10],
            ["2021-10-11", 9],
            ["2021-10-12", 8],
          ]
        );

        const portfolio = new Portfolio([stockOne, stockTwo]);

        const profits = portfolio.Profit("2021-10-10", "2021-10-12");
        expect(profits[0]).toBe("10%");
        expect(profits[1]).toBe("-20%");
      });
    });
  });
});
