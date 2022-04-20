import React from 'react';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styled';

interface CategoryProps {
  name: string;
  icon: string;
}
interface Data {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: Data;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
}
