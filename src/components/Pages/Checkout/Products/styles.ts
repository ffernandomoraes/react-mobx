import styled from '@emotion/styled';

import { IProps } from '.';

const styles = (Component: React.FunctionComponent<IProps>) => styled(Component)`
  padding: 20px 0;

  & .products-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  & .products-loading {
    font-size: 13px;
    color: #555;
    text-align: center;
    padding: 80px 0;
    font-weight: 500;
    text-transform: uppercase;
  }

  & .products-list {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;
    padding-bottom: 40px;

    & .products-empty {
      font-size: 13px;
      color: #555;
      text-align: center;
      padding: 80px 0;
      font-weight: 500;
      text-transform: uppercase;
      width: 100%;
    }

    & .products-item {
      width: calc(33% - 24px);
      margin: 12px;
      background-color: #fff;
      position: relative;

      &:hover {
        & .product-info {
          & .product-buy {
            opacity: 1;
            visibility: visible;
            user-select: auto;
          }
        }
      }

      & .product-image {
        position: relative;
        line-height: 0;

        & img {
          width: 100%;
        }

        & .product-colors {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;

          & .color-item {
            width: 24px;
            height: 24px;
            display: block;
            margin: 0 4px;
          }
        }
      }

      & .product-info {
        padding: 20px 0;

        & .product-title {
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          color: #555;
        }

        & .product-price {
          font-weight: 600;
          font-size: 32px;
          letter-spacing: -1px;
          color: #555;
          margin-top: 12px;
          display: block;
        }

        & .product-parcelament {
          font-weight: 300;
          font-size: 15px;
          color: #555;
          display: block;
        }

        & .product-buy {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-items: center;
          opacity: 0;
          visibility: hidden;
          user-select: none;
          transition: all 0.2s linear;

          & button {
            width: 200px;
            margin: 0 auto;
            display: block;
            border: 0;
            background-color: #111;
            color: white;
            text-transform: uppercase;
            font-size: 12px;
            border-radius: 40px;
            padding: 16px 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s linear;

            &:hover {
              background-color: #444;
            }
          }
        }
      }
    }
  }
`;

export default styles;
