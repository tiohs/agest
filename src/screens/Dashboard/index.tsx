import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
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
  TransactionList
} from './styles';

const data = [
  {
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
    type: 'negative',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },
  {
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
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
          lastTransactions="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransactions="Última entrada dia 03 de Abril"
        />
        <HighlightCard
          type="dollar-sign"
          title="Total"
          amount="R$ 16.400,00"
          lastTransactions="01 à 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  );
}
