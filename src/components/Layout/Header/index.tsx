import { memo } from 'react';

import styled from '@emotion/styled';
import Logo from 'assets/images/logo.png';

interface IProps {
  className?: string;
}

const Header = memo<IProps>(({ className }) => {
  return (
    <div className={`checkout-header ${className}`}>
      <div className='container'>
        <div className='header-logo'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>
    </div>
  );
});

export default styled(Header)`
  background-color: #111;
  padding: 24px 0;
  margin-bottom: 40px;

  & .container {
    max-width: 1400px;
    margin: 0 auto;

    & .header-logo {
      text-align: center;

      & img {
        max-width: 70px;
      }
    }
  }
`;
