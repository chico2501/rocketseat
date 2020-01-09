import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px 30px;
  background: #f5f5f5;
`;

export const SubmitButton = styled(Button)`
  height: 46px;
  background: #ee4e62;
  color: #fff;
  border-radius: 4px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Check = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const CheckNum = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const Hora = styled.Text`
  font-size: 14px;
  color: #666;
`;
