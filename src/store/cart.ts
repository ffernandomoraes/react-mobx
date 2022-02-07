import { IProducts } from 'interfaces/products';
import { action, makeAutoObservable, observable } from 'mobx';

type IProductCart = IProducts & { quantity: number };

class CartStore {
  items: IProductCart[] = [];

  constructor() {
    makeAutoObservable(this, {
      items: observable,
      addItem: action,
      removeItem: action,
      getTotal: action
    });
  }

  addItem = (product: IProducts) => {
    const exist = this.items.some(item => item.id === product.id);

    if (exist) {
      const index = this.items.findIndex(item => item.id === product.id);
      this.items[index].quantity += 1;
      return;
    }

    this.items = [...this.items, { ...product, quantity: 1 }];
  };

  removeItem = (product: IProducts) => {
    this.items = this.items.filter(v => v.id !== product.id);
  };

  getTotal = () => {
    return this.items.reduce((acc, item) => {
      let price = item.price;

      if (item.quantity > 1) {
        price = item.price * item.quantity;
      }

      return (acc = acc + price);
    }, 0);
  };
}

export default CartStore;
