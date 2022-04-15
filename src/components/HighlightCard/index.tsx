import React from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styled';

export function HighlightCard({ type, title, amount, lastTransactions }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={type !== 'dollar-sign' ? 'arrow-' + type + '-circle' : 'dollar-sign'} />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransactions}</LastTransaction>
      </Footer>
    </Container>
  );
}
