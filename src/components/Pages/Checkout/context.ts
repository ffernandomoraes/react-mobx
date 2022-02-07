import { createContext, useContext } from 'react';

import CartStore from 'store/cart';
import ProductsStore from 'store/products';

interface ICheckoutContext {
  productsStore: ProductsStore;
  cartStore: CartStore;
}

const CheckoutContext = createContext<ICheckoutContext>({} as ICheckoutContext);
const CheckoutContextProvider = CheckoutContext.Provider;

export function useCheckoutContext() {
  return useContext(CheckoutContext);
}

export default CheckoutContextProvider;
