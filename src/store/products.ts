import { IProducts } from 'interfaces/products';
import { makeAutoObservable } from 'mobx';

import { get } from '../services/api';

class ProductsStore {
  loading = false;
  products: IProducts[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getProducts = async (force?: boolean) => {
    if (!force && this.products.length) {
      return;
    }

    this.loading = true;

    setTimeout(async () => {
      const response = await get('/products');
      this.products = response?.data;
      this.loading = false;
    }, 2000);
  };
}

export default ProductsStore;
