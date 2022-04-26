import React from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styled';

interface Props {
  type: string;
  title: string;
  amount: string;
  lastTransaction: string;
}

export function HighlightCard({ type, title, amount, lastTransaction }: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={type !== 'dollar-sign' ? 'arrow-' + type + '-circle' : 'dollar-sign'} />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
