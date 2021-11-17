// サンプルコードすぎる
// class ProductFactory {
//     product: any

//     constructor () {
//         this.product = this.FactoryMethod();
//     }

//     FactoryMethod = (): any => {
//         return new Product();
//     }
// }


class ProductFactory {
    logic: any;

    constructor () {
        this.logic = new Logic();
        this.logic.Do();
    }
}

class Logic {
  product: Product;

  public Do = () => {
    this.product = FactoryMethod();
  };

  static FactoryMethod = (): any => {
    return new Product();
  };
}


class Product {}