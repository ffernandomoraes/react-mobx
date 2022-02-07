import { useMemo } from 'react';

import { ThemeProvider } from '@emotion/react';
import Header from 'components/Layout/Header';
import Cart from 'components/Pages/Cart';
import CheckoutContextProvider from 'components/Pages/Checkout/context';
import { configure } from 'mobx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartStore from 'store/cart';
import ProductsStore from 'store/products';

import Checkout from './components/Pages/Checkout';

configure({
  enforceActions: 'never'
});

const theme = {};

function App() {
  const styles = useMemo(
    () => `
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {
      font-family: 'Roboto', Arial;
      font-weight: 400;
      line-height: 1.2;
    }
  `,
    []
  );

  const productsStore = new ProductsStore();
  const cartStore = new CartStore();

  return (
    <ThemeProvider theme={theme}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <CheckoutContextProvider value={{ productsStore, cartStore }}>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CheckoutContextProvider>
    </ThemeProvider>
  );
}

export default App;
