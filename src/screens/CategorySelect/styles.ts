import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)``;

export const Category = styled.View``;
