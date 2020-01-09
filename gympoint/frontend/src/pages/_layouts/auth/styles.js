import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 360px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 30px;

    img {
      margin-bottom: 20px;
    }

    label {
      margin: 20px 0 5px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      color: #444;
    }

    input {
      background: transparent;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #c00;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 10px 0 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, "#ee4d64")};
      }
    }
  }
`;
