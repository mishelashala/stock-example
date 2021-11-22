import { path, prop } from "lodash/fp";
import { Stock } from "../../src/stock";

describe("Feature: Stock", () => {
  describe("given a stock", () => {
    describe("when they try to calculate its price on 2021-10-10", () => {
      it("should return Ok 10", () => {
        const stock = new Stock(["2021-10-10", 10], [["2021-10-10", 10]]);
        const price = stock.Price("2021-10-10");

        expect(price.ok).toBe(true);
        expect(prop("data", price)).toBe(10);
      });
    });
  });

  describe("given a stock", () => {
    describe("when they try to calculate its price on 2021-10-11", () => {
      it("should return an Err 'Price Not Found'", () => {
        const stock = new Stock(["2021-10-10", 10], [["2021-10-10", 10]]);
        const price = stock.Price("2021-10-11");

        expect(price.ok).toBe(false);
        expect(path(["error", "message"], price)).toEqual(
          "Price Not Found at Date: 2021-10-11"
        );
      });
    });
  });
});
