import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;
export const Field = styled.View`
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 20px;
  height: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Entypo)`
  color: ${({ theme }) => theme.colors.shape};
`;
