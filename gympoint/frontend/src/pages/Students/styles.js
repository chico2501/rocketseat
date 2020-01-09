import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      }

      < td {
        border-top: 1px solid #979797;
      }
    }
  }
`;
