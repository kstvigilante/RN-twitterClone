import styled from 'styled-components';
import colors from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  align-items: center;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.lightGrey};
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const Menu = styled.View`
  height: 20px;
  justify-content: space-between;
  width: 23px;
`;

export const MenuLine = styled.View`
  height: 3px;
  width: 100%;
  background-color: ${colors.blue};
`;
