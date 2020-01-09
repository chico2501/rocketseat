import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  nav {
    display: flex;
    align-items: center;
    img {
      padding-right: 30px;
      margin-right: 30px;
      border-right: 1px solid #ddd;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      color: #999;
      white-space: nowrap;
      &:hover {
        color: #444;
      }
      &.active {
        color: #444;
      }
      + a {
        margin-left: 20px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: 14px;
    font-weight: bold;
    color: #666;
  }

  button {
    background: transparent;
    border: none;
    font-size: 14px;
    color: #de3b3b;
    cursor: pointer;

    &:hover {
      color: #999;
    }
  }
`;
