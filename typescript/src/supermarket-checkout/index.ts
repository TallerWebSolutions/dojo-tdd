export class Product {
  private price: number;
  private name: string;

  constructor(name: string, price: number) {
    this.price = price;
    this.name = name;
  }

  getPrice = () => {
    return this.price;
  };

  getName = () => {
    return this.name;
  };
}

export class Cart {
  private products: Product[] = [];

  add = (products: Product[]) => {
    products.forEach(item => {
      this.products.push(item);
    });
  };

  getProducts = () => this.products;

  getFinalPrice = () => {
    const products = this.products;
    const prices = products.map(product => product.getPrice());

    return prices.reduce((acc, curr) => acc + curr);
  };

  getReceipt = () => {
    const products = this.getAggregated().map(productList => ({
      product: productList[0],
      amount: productList.length
    }));

    type ProductWithAmount = {
      product: Product;
      amount: number;
    };

    const items = products.reduce((acc, product: ProductWithAmount) => {
      return (
        acc +
        `${product.product.getName()} - ${
          product.amount
        } - R$${product.product.getPrice()}\n`
      );
    }, "");

    return `${items} total = R$${this.getFinalPrice()}`;
  };

  getAggregated = () => {
    const products = this.products;

    return products.reduce(
      (acc: Product[][], current: Product): Product[][] => {
        const groupIndex = acc.findIndex((group: Product[]) =>
          group.find(product => product.getName() === current.getName())
        );

        if (groupIndex !== -1) {
          acc[groupIndex] = acc[groupIndex].concat(current);
          return acc;
        }

        return acc.concat([[current]]);
      },
      []
    );
  };
}
