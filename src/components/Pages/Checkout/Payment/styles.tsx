import styled from '@emotion/styled';

import { IProps } from '.';

const styles = (Component: React.FunctionComponent<IProps>) => styled(Component)`
  margin-top: 80px;
  padding: 0 16px;
  min-height: 300px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 0;
    padding-bottom: 50px;
  }

  & .payment-title {
    font-size: 13px;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
  }

  & .payment-empty {
    padding: 40px 0;
    text-align: center;
    font-size: 13px;
    text-transform: uppercase;
  }

  & .payment-items {
    margin: 20px 0 0;

    & .payment-item {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      & .image {
        position: relative;
        width: 100px;

        & .remove {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #af1029;
          border-radius: 100%;
          width: 20px;
          color: white;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          cursor: pointer;
          font-size: 11px;
          text-transform: uppercase;
        }

        & img {
          width: 100%;
          max-width: 100%;
        }
      }

      & .content {
        display: flex;
        flex-direction: column;
        width: calc(100% - 100px);
        padding-left: 12px;

        & .title {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 500;
        }

        & .price {
          margin-top: 5px;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }

  & .payment-total {
    border-top: 1px solid #eee;
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
    font-weight: 500;
    padding-top: 12px;
    margin-top: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .payment-continue {
    margin-top: 30px;
    text-align: center;
    color: #242498;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;

    & span {
      cursor: pointer;
    }
  }
`;

export default styles;
