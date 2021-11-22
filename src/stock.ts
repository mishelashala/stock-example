import { reduce } from "lodash/fp";
import { err } from "./core/err";
import { ok } from "./core/ok";

const tupleToDictionary = (obj, tuple) => {
  obj[tuple[0]] = tuple[1];
  return obj;
};

export type DatePriceTuple = [string, number];

export class Stock {
  purchasingPrice: DatePriceTuple;
  prices: {};

  constructor(purchasingPrice, prices) {
    this.purchasingPrice = purchasingPrice;
    this.prices = reduce(tupleToDictionary, {}, prices);
  }

  Price(date: string): Core.Result<number> {
    const found = this.prices[date];

    if (!found) {
      return err(new Error(`Price Not Found at Date: ${date}`));
    }

    return ok(found);
  }
}
