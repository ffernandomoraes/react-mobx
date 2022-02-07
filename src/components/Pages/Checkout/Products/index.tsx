import { useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useCheckoutContext } from '../context';
import styles from './styles';

export interface IProps {
  className?: string;
}

const ProductsList = observer<IProps>(({ className }) => {
  const { productsStore, cartStore } = useCheckoutContext();
  const { products, loading, getProducts } = productsStore;
  const { addItem } = cartStore;

  const loadProducts = useCallback(async () => {
    try {
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [getProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className={`checkout-products ${className}`}>
      <div className='products-title'>Nike Air Jordan</div>

      {loading && <div className='products-loading'>Carregando...</div>}

      {!loading && (
        <div className='products-list'>
          {(!products || products?.length === 0) && <div className='products-empty'>Nenhum produto encontrado.</div>}

          {products?.length > 0 &&
            products?.map(product => (
              <div className='products-item' key={product.id}>
                <div className='product-image'>
                  <div className='product-colors'>
                    {product.colors.map((color, index) => (
                      <div key={`color-${index}`} className='color-item' style={{ background: color }} />
                    ))}
                  </div>

                  <img src={product.image} alt={product.title} />
                </div>

                <div className='product-info'>
                  <div className='product-title'>{product.title}</div>
                  <div className='product-price'>R$ {product.price}</div>
                  <div className='product-parcelament'>até 12x sem juros</div>
                  <div className='product-buy'>
                    <button type='button' onClick={() => addItem(product)}>
                      adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
});

export default styles(ProductsList);
