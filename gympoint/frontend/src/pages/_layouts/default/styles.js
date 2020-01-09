import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
  overflow: auto;
`;

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
    div {
      display: flex;
      justify-content: flex-end;

      a.add {
        background: #ee4d64;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        height: 36px;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        transition: background 0.2s;
        svg {
          margin-right: 10px;
        }

        &:hover {
          background: ${darken(0.05, "#ee4d64")};
        }
      }

      a.voltar {
        background: #ccc;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        height: 36px;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        transition: background 0.2s;
        svg {
          margin-right: 10px;
        }

        &:hover {
          background: ${darken(0.08, "#CCC")};
        }
      }

      .busca {
        position: relative;
        margin-left: 20px;
        svg {
          top: 7px;
          right: 5px;
          position: absolute;
        }
        input {
          background: transparent;
          border: 1px solid #ddd;
          border-radius: 4px;
          height: 36px;
          padding: 0 30px 0 15px;
          color: #000;
          margin: 0 0 10px;
          width: 100%;
          display: block;

          &::placeholder {
            color: #999;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  table {
    width: 100%;

    thead {
      td {
        font-size: 16px;
        color: #444;
        font-weight: bold;
        text-transform: uppercase;
        padding: 15px 0;
      }
    }
    tbody {
      td {
        font-size: 16px;
        color: #666;
        line-height: 20px;
        padding: 15px 0;
        div {
          display: flex;
          justify-content: flex-end;
          a {
            font-size: 15px;
            color: #4d85ee;
            display: block;
          }
          button {
            background: none;
            color: #de3b3b;
            margin-left: 25px;
            border: none;
          }
        }
        :last-child {
          text-align: right;
          width: 10%;
        }
      }
      tr + tr {
        td {
          border-top: 1px solid #eee;
        }
      }
    }
  }

  form {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .row {
      display: flex;
      flex-wrap: nowrap;
    }
    .coluna {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
    }

    label {
      margin: 20px 0 5px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      color: #444;
    }

    input,
    select {
      font-family: "Roboto";
      font-size: 14px;
      background: transparent;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
      width: 100%;
      display: block;

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
      width: 100%;
      margin: 10px 10px;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, "#ee4d64")};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Students = styled.span`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  background: #fff;
  padding: 5px 15px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #ddd;
  color: #fff;
  font-size: 16px;
  .student {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    background: #fff;
    color: #444;
    font-weight: normal;
    justify-content: left;
    &:not(:first-of-type) {
      margin-top: 5px;
    }
    &:not(:last-of-type) {
      ::after {
        position: absolute;
        top: 37px;
        left: 0px;
        content: "";
        height: 1px;
        border-bottom: 1px solid #ddd;
        width: 99%;
        display: block;
      }
    }
    &:hover {
      background: ${darken(0.05, "#fff")};
    }
  }
`;
