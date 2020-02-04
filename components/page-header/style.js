import styled from 'styled-components';
import colors from '../../theme';

export const Header = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  align-items: center;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.lightGrey};
`;

export const HeaderContent = styled.View``;

export const Menu = styled.View`
  height: 20px;
  justify-content: space-between;
  width: 53px;
`;

export const MenuLine = styled.View`
  height: 3px;
  width: 23px;
  background-color: ${colors.blue};
`;
