import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Container, SubmitButton, List, Check, CheckNum, Hora } from './styles';

export default function CheckIn() {
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>

        <List>
          <Check>
            <CheckNum>Check-in #7</CheckNum>
            <Hora>Hoje as 14h</Hora>
          </Check>
        </List>
      </Container>
      <Footer />
    </>
  );
}
