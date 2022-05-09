import React from 'react';

import { Container, Category, Icon } from './styles';

interface Props {
  title: string;
}
function CategorySelect({ title }: Props) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}

export default CategorySelect;
