import React from 'react';

import { FileAvatar } from '../../components/AvatarImage';
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
          <FileAvatar />
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
