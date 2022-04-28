import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface iconProps {
  type: 'up' | 'down';
}
export const Container = styled(TouchableOpacity)`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
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
