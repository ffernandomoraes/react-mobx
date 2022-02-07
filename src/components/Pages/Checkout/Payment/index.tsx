import { useCallback, useMemo } from 'react';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { useCheckoutContext } from '../context';
import styles from './styles';

export interface IProps {
  className?: string;
}

const Payment = observer<IProps>(({ className }) => {
  const { cartStore } = useCheckoutContext();
  const { items, removeItem, getTotal } = cartStore;
  const navigate = useNavigate();

  const total = getTotal();

  const hasItems = useMemo(() => total > 0, [total]);

  const handleClickFinish = useCallback(() => {
    navigate('/cart');
  }, [navigate]);

  return (
    <div className={`checkout-payment ${className}`}>
      <div className='payment-title'>Carrinho ({items.length})</div>

      {!hasItems && <div className='payment-empty'>Adicione itens no carrinho =)</div>}

      {hasItems && (
        <>
          <div className='payment-items'>
            {items.map(item => (
              <div className='payment-item' key={`item-${item.id}`}>
                <div className='image'>
                  <div className='remove' onClick={() => removeItem(item)}>
                    x
                  </div>
                  <img src={item.image} alt='Nike' />
                </div>

                <div className='content'>
                  <div className='title'>
                    {item.title} ({item.quantity})
                  </div>
                  <div className='price'>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='payment-total'>
            <span>Total</span>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
          </div>

          <div className='payment-continue'>
            <span onClick={handleClickFinish}>Finalizar compra</span>
          </div>
        </>
      )}
    </div>
  );
});

export default styles(Payment);
