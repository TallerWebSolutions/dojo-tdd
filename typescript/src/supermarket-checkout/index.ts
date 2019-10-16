export class Product {
  private price: number;
  private name: string;
  private deal: string | undefined;

  constructor(name: string, price: number, deal?: string) {
    this.price = price;
    this.name = name;
    this.deal = deal;
  }

  getPrice = () => {
    return this.price;
  };

  getName = () => {
    return this.name;
  };

  getFormattedPrice = () => {
    return `R$${this.price.toFixed(2).replace(".", ",")}`;
  };

  getDeal = () => {
    return this.deal;
  };
}

type ProductWithAmount = {
  product: Product;
  amount: number;
};

type ProductWithDiscount = {
  product: Product;
  discount: number;
};

export class Cart {
  private products: Product[] = [];

  add = (products: Product[]) => {
    products.forEach(item => {
      this.products.push(item);
    });
  };

  getProducts = () => this.products;

  deal = {
    rice: {
      rule: () => {}
    },
    toothbrush: {}
  };

  getFinalPrice = () => {
    const products = this.getProductsWithAmount();
    const prices = products.map(({ product, amount }) => {
      const price: number = product.getPrice();
      const deal: string | undefined = product.getDeal();
      let discount: number;
      switch (deal) {
        case "ten_percent":
          discount = product.getPrice() * 0.1;
          break;
        case "buy_two_get_one":
          discount = Math.floor(amount / 2) * product.getPrice();
          break;
        case "buy_four_get_one":
          discount = Math.floor(amount / 4) * product.getPrice();
          break;
        default:
          discount = 0;
      }

      console.log(amount);

      return price * amount - discount;
    });

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

  getProductsWithDiscount = (): ProductWithDiscount[] => {
    const productsWithAmount = this.getProductsWithAmount();

    return productsWithAmount.map(({ product }) => ({
      product,
      discount: 80
    }));

    /*
    const currentProductAmount = this.getProductsWithAmount()[0].amount;
    return currentProductAmount >= 2
      ? Math.floor(currentProductAmount / 2) + (currentProductAmount % 2)
      : currentProductAmount;
      */
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
      (acc: string, productWithAmount: ProductWithAmount, index: number) => {
        const newLine = index !== products.length - 1 ? "\n" : "";

        const { product, amount } = productWithAmount;
        return (acc += `${product.getName()} - ${amount} - ${product.getFormattedPrice()}${newLine}`);
      },
      ""
    );
  };
}

export class Deal {
  private discount: (a: number, b: number) => void;
  private amount: number;
  private name: string;
  private priceProductCategory: number;

  constructor(
    discount: (a: number, b: number) => void,
    amount: number,
    name: string,
    priceProductCategory: number
  ) {
    this.discount = discount;
    this.amount = amount;
    this.name = name;
    this.priceProductCategory = priceProductCategory;
  }

  getName = () => this.name;

  getDiscount = () => this.discount(this.priceProductCategory, this.amount);
}
