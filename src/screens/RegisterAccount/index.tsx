import React from 'react';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Container, Header, Title, Form, Fields } from './styles';

export function RegisterAccount() {
  return (
    <Container>
      <Header>
        <Title>Cadastro de gestor</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome e apelido" />
          <Input placeholder="Morada" />
          <Input placeholder="NIF / BI" />
          <Input placeholder="Contacto" />
          <Input placeholder="Morada" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
