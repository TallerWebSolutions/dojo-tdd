import { Product, Cart, Receipt, Deal } from "./index";

describe("Supermarket Checkout ", () => {
  describe("Product", () => {
    it("Should create a product with price and name", () => {
      const apple = new Product("apple", 1.2);
      expect(apple.getPrice()).toEqual(1.2);
      expect(apple.getName()).toEqual("apple");
    });

    it("Should format price to a fixed string value.", () => {
      const banana = new Product("banana", 2.0);
      const pera = new Product("pera", 3);
      expect(banana.getFormattedPrice()).toEqual("R$2,00");
      expect(pera.getFormattedPrice()).toEqual("R$3,00");
    });
  });

  describe("Cart", () => {
    it("Should add products to a cart", () => {
      const cart = new Cart();
      const apple = new Product("apple", 1.2);
      const banana = new Product("banana", 2.2);
      cart.add([apple, banana]);
      expect(cart.getProducts()).toEqual([apple, banana]);
    });

    it("should calculate final price", () => {
      const cart = new Cart();
      const beer = new Product("beer", 10);
      cart.add([beer]);
      expect(cart.getFinalPrice()).toEqual(10);
    });

    it("should calculate rice deal", () => {
      const cart = new Cart();
      const rice = new Product("rice", 1, "ten_percent");
      const halls = new Product("halls", 1);

      cart.add([rice, halls]);

      expect(cart.getFinalPrice()).toEqual(1.9);
    });

    it("should calculate toothbrush deal", () => {
      const cart = new Cart();
      const toothbrush = new Product("toothbrush", 2, "buy_two_get_one");
      const halls = new Product("halls", 0.7);

      cart.add([toothbrush, toothbrush, halls]);

      expect(cart.getFinalPrice()).toEqual(2.7);

      cart.add([toothbrush]);

      expect(cart.getFinalPrice()).toEqual(4.7);
    });

    it.only("should buy four get one for free", () => {
      const cart = new Cart();
      const toothbrush = new Product("toothbrush", 2, "buy_four_get_one");
      const halls = new Product("halls", 0.7);

      cart.add([toothbrush, toothbrush, toothbrush, toothbrush, halls]);

      expect(cart.getFinalPrice()).toEqual(6.7);

      cart.add([toothbrush]);

      expect(cart.getFinalPrice()).toEqual(8.7);

      cart.add([toothbrush]);

      expect(cart.getFinalPrice()).toEqual(10.7);
    });

    it("should buy two get one for free", () => {
      const cart = new Cart();
      const toothbrush = new Product("toothbrush", 2);
      const sunglasses = new Product("sunglasses", 2);

      cart.add([
        toothbrush,
        toothbrush,
        toothbrush,
        sunglasses,
        sunglasses,
        sunglasses
      ]);

      expect(cart.getFinalPrice()).toEqual(10);
    });

    it("should return list of protucts", () => {
      const cart = new Cart();
      const deodorant = new Product("deodorant", 2);

      cart.add([deodorant, deodorant]);

      const expected = "deodorant - 2 - R$2\n total = R$4";
      expect(cart.getReceipt()).toEqual(expected);
    });

    it("Should calculate the deal per product category", () => {
      const rice = new Product("rice", 10, "dez_por_cento");
      const cart = new Cart();
      cart.add([rice]);
      expect(cart.getFinalPrice()).toEqual(9);
    });

    it("Should handle carts with no deals", () => {
      const rice = new Product("rice", 10);
      const cart = new Cart();
      cart.add([rice, rice, rice]);
      expect(cart.getFinalPrice()).toEqual(30);
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
      it("should get products with amount", () => {
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

  describe("Receipt", () => {
    it("should return human readable list of products", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);

      cart.add([rice]);
      const receipt = new Receipt(cart);

      const expected = "rice - 1 - R$9,90";
      expect(receipt.getProductsList()).toEqual(expected);
    });

    it("should return human readable list of products", () => {
      const cart = new Cart();
      const rice = new Product("rice", 9.9);
      const apple = new Product("apple", 2.9);

      cart.add([rice, apple]);
      const receipt = new Receipt(cart);

      const expected = "rice - 1 - R$9,90\napple - 1 - R$2,90";
      expect(receipt.getProductsList()).toEqual(expected);
    });

    it("should return a cart item", () => {
      const cart = new Cart();
      const banana = new Product("banana", 2.0);

      cart.add([banana]);

      const receipt = new Receipt(cart);
      const expected = "banana - 1 - R$2,00";

      expect(receipt.getProductsList()).toEqual(expected);
    });
  });

  describe("Deals", () => {
    it("Buy Two get one for free", () => {
      const cart = new Cart();
      const sunGlasses = new Product("sunGlasses", 50);
      cart.add([sunGlasses, sunGlasses, sunGlasses]);

      const discount = new Product("sunGlasses-discount", -50);

      // @TODO create an abstraction to deal with more than one kind of discount.
      const applyDiscount = (cart: Cart) => {
        const shouldApply = cart
          .getProductsWithAmount()
          .some(({ product, amount }) => {
            return product.getName() === "sunGlasses" && amount >= 2;
          });

        if (!shouldApply) return cart;

        // Apply discount.
        cart.add([discount]);
        return cart;
      };

      // receber um carrinho => ver quantos produtos iguais => precisa aplicar desconto?

      // @TODO descount deve receber um array de deals
      const discounts = applyDiscount(cart)
        .getProducts()
        .filter(product => product.getName() === "sunGlasses-discount");

      expect(discounts).toHaveLength(1);
    });

    it("should apply discount", () => {
      const cart = new Cart();
      const rice = new Product("rice", 10, "dez_por_cento");
      cart.add([rice]);
      expect(cart.getFinalPrice()).toEqual(9);
    });

    it("Buy Five get two for free", () => {
      const cart = new Cart();
      const sunGlasses = new Product("sunGlasses", 50);
      cart.add([sunGlasses, sunGlasses, sunGlasses, sunGlasses, sunGlasses]);

      const expected = [
        {
          product: sunGlasses,
          discount: 80
        }
      ];

      expect(cart.getProductsWithDiscount()).toEqual(expected);
    });

    it("Get 10% discount on rice", () => {
      const cart = new Cart();
      const rice = new Product("Rice", 10);
      cart.add([rice, rice, rice]);

      const expected = [
        {
          product: rice,
          discount: 80
        }
      ];

      expect(cart.getProductsWithDiscount()).toEqual(expected);
    });
  });

  describe.skip("Deal system", () => {
    it("should get Deal discount", () => {
      const fn = (price: number, amount: number) => {
        if (amount > 2) return price * 0.9;
        return price;
      };

      const deal = new Deal(fn, 3, "rice", 10);

      expect(deal.getDiscount()).toEqual(9);
    });

    it.skip("should calculate the discount of a product", () => {
      const cart = new Cart();
      const banana = new Product("banana", 2.0);

      cart.add([banana]);

      // const receipt = new Receipt(cart);
      // const deal = new Deal(fn, 3, "banana", 10);
      // const deal = new Deal(3, () => {
      //   return 1.8;
      // });

      expect(cart.getFinalPrice()).toEqual(1.8);

      /*
      const dealProduct = receipt.applyDeal(
        new Deal(amount => {
          return (amount * 10) / 100;
        }, "rice")
      );
      */
    });
  });
});
