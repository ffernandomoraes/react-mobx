import { memo } from 'react';

import styled from '@emotion/styled';
import Payment from 'components/Pages/Checkout/Payment';
import Products from 'components/Pages/Checkout/Products';

interface IProps {
  className?: string;
}

const Checkout = memo(({ className }: IProps) => {
  return (
    <div className={className}>
      <div className='content'>
        <div className='products-wrapper'>
          <Products />
        </div>

        <div className='checkout-wrapper'>
          <Payment />
        </div>
      </div>
    </div>
  );
});

export default styled(Checkout)`
  background-color: #fff;
  min-height: 100vh;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    min-height: 0;
  }

  & .content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    & .products-wrapper {
      width: calc(75% - 12px);
      margin-right: 12px;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
      }
    }

    & .checkout-wrapper {
      width: 25%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
