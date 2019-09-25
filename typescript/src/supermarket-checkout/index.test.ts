import { Product, Cart, Receipt } from "./index";

describe("Supermarket Checkout ", () => {
  it("Should create a product with price and name", () => {
    const apple = new Product("apple", 1.2);
    expect(apple.getPrice()).toEqual(1.2);
    expect(apple.getName()).toEqual("apple");
  });

  describe("Cart", () => {
    it("Should add products to a cart", () => {
      const cart = new Cart();
      const apple = new Product("apple", 1.2);
      const banana = new Product("banana", 2.2);
      cart.add([apple, banana]);
      expect(cart.getProducts()).toEqual([apple, banana]);
    });

    it("should sum products values", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);
      const halls = new Product("halls", 0.7);

      cart.add([rice, halls]);

      expect(cart.getFinalPrice()).toEqual(10.6);
    });

    it("should return list of protucts", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);
      const halls = new Product("halls", 3);

      cart.add([rice, rice, halls]);

      const expected = "rice - 2 - R$9.9\nhalls - 1 - R$3\n total = R$22.8";
      expect(cart.getReceipt()).toEqual(expected);
    });

    it("should aggregate products", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);
      const halls = new Product("halls", 3);

      cart.add([rice, rice, halls]);
      const expected = [[rice, rice], [halls]];

      expect(cart.getAggregated()).toEqual(expected);
    });

    describe("products with amount", () => {
      it("should get products with mount", () => {
        const cart = new Cart();
        const rice = new Product("rice", 9.9);
        const halls = new Product("halls", 3);

        cart.add([rice, rice, rice, halls, halls]);
        const expected = [
          { product: rice, amount: 3 },
          { product: halls, amount: 2 }
        ];

        expect(JSON.stringify(cart.getProductsWithAmount())).toEqual(
          JSON.stringify(expected)
        );
      });

      it("should count products", () => {
        const cart = new Cart();
        const rice = new Product("rice", 9.9);
        const halls = new Product("halls", 3);

        cart.add([rice, rice, rice, halls, halls, halls]);
        const expected = [
          { product: rice, amount: 3 },
          { product: halls, amount: 3 }
        ];

        expect(JSON.stringify(cart.getProductsWithAmount())).toEqual(
          JSON.stringify(expected)
        );
      });
    });
  });

  describe.only("Receipt", () => {
    it("should return human readable list of products", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);

      cart.add([rice]);
      const receipt = new Receipt(cart);

      const expected = "rice - 1 - R$9.9";
      expect(receipt.getProductsList()).toEqual(expected);
    });

    it("should return human readable list of products", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);
      const apple = new Product("apple", 2.9);

      cart.add([rice, apple]);
      const receipt = new Receipt(cart);

      const expected = "rice - 1 - R$9.9\n apple - 1 - R$2.9";
      expect(receipt.getProductsList()).toEqual(expected);
    });

    it("should return a cart item", () => {
      const cart = new Cart();
      const banana = new Product("banana", 2.0);

      cart.add([banana]);

      const receipt = new Receipt(cart);
      const expected = "banana - 1 - R$2.0";

      expect(receipt.getProductsList()).toEqual(expected);
    });
  });
});
