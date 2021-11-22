export class Portfolio {
  stocks: Core.IStock[];

  constructor(stocks: Core.IStock[]) {
    this.stocks = stocks;
  }

  Profit(start: string, end: string): string[] {
    return this.stocks.reduce((list, stock) => {
      const startPrice = stock.Price(start);
      const endPrice = stock.Price(end);

      if (startPrice.ok && endPrice.ok) {
        const deltaPrice = endPrice.data - startPrice.data;
        const anualized = `${(deltaPrice / startPrice.data) * 100}%`;
        return [...list, anualized];
      }

      return list;
    }, []);
  }
}
