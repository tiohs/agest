import React from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styled';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
};

export function HighlightCard({ type, title, amount, lastTransaction }: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]} />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
