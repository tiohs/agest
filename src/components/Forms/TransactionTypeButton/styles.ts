import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface iconProps {
  type: 'up' | 'down';
}

interface TouchableOpacityTypeProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<TouchableOpacityTypeProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)<iconProps>`
  font-size: ${RFValue(26)}px;
  margin-right: 12px;
  color: ${({ theme, type }) => (type == 'up' ? theme.colors.success : theme.colors.attention)};
`;
