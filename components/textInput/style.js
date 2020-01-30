import styled from 'styled-components';
import colors from '../../theme';

export const StyledTextInput = styled.TextInput`
  border-style: solid;
  border-bottom-width: ${props => (props.active ? '2px' : '0.5px')};
  border-bottom-color: ${props => (props.active ? colors.blue : colors.grey)};
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 18px;
  
`;

export const StyledTextInputWithMargin = styled(StyledTextInput)`
  margin-top: 40px;
`;
