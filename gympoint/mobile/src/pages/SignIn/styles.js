import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  padding-left: 20px;
`;

export const SubmitButton = styled(Button)`
  height: 46px;
  background: #ee4e62;
  color: #fff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;
