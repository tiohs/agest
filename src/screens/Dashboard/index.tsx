import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Photo,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: number;
}

const items: DataListProps[] = [
  {
    id: 1,
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },
  {
    id: 2,
    type: 'negative',
    title: '',
    amount: 'R$ 59,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '13/04/2020'
  },
  {
    id: 3,
    type: 'negative',
    title: 'aluguer de casa',
    amount: 'R$ 1.200,00',
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: '13/04/2020'
  }
];

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/53865238?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Hamilton Silva</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 03 de Abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.400,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
