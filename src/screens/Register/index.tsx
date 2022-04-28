import React from 'react';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { Container, Header, Title, Form, Fields, TransactionTypeButtons } from './styles';
export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeButtons>
            <TransactionTypeButton type="up" title="Income" />
            <TransactionTypeButton type="down" title="Outcom" />
          </TransactionTypeButtons>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
