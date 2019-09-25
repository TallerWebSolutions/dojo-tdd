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

type ProductWithAmount = {
  product: Product;
  amount: number;
};

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

  getProductsWithAmount = (): ProductWithAmount[] => {
    const aggregatedProducts = this.getAggregated();

    return aggregatedProducts.map(aggregatedProduct => ({
      product: aggregatedProduct[0],
      amount: aggregatedProduct.length
    }));
  };
}

export class Receipt {
  private cart: Cart;

  constructor(cart: Cart) {
    this.cart = cart;
  }

  getProductsList = () => {
    const products = this.cart.getProductsWithAmount();

    return products.reduce(
      (acc: string, productWithAmount: ProductWithAmount) => {
        const { product, amount } = productWithAmount;
        return (acc += `${product.getName()} - ${amount} - R$${product.getPrice()}\n`);
      },
      ""
    );
  };
}
