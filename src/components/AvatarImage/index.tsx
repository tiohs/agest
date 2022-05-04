import React from 'react';

import { Container, Header, Avatar, Field, Icon } from './styled';

export function FileAvatar() {
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/53865238?v=4' }} />
        <Field>
          <Icon name="camera" />
        </Field>
      </Header>
    </Container>
  );
}
