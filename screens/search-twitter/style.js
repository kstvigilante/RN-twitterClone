import styled from 'styled-components';
import colors from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const SearchInput = styled.TextInput`
  background-color: ${colors.lightGrey};
  height: 27px;
  width: 200px;
  padding: 5px 10px;
  border-radius: 15px;
`;
