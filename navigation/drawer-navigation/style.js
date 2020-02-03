import styled from 'styled-components';
import colors from '../../theme';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

export const DrawerContainer = styled.View`
  height: 100%;
  background-color: ${colors.white};
`;

export const ProfileSection = styled.View`
  padding: 10px 0 20px 25px;
  border-style: solid;
  border-bottom-color: ${colors.lightGrey};
  border-bottom-width: 0.5px;
`;

export const ProfilePhoto = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const FullName = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;

export const UserName = styled.Text`
  color: ${colors.grey};
  font-weight: bold;
  font-size: 16px;
`;

export const StatContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const StatLabel = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 16px;
`;

export const StatValue = styled.Text`
  color: ${colors.grey};
  font-size: 16px;
  margin-left: 4px;
`;

export const SecondStat = styled.View`
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const NavSection = styled.View`
  padding-left: 25px;
  border-style: solid;
  border-bottom-color: ${colors.lightGrey};
  border-bottom-width: 0.5px;
`;

export const NavItem = styled.View`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
`;

export const NavItemText = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 600;
  margin-left: 17px;
`;

export const NavItemIcon = styled(Icon)`
  color: ${colors.grey};
`;

export const Settings = styled.View`
  padding: 20px 0 0 25px;
`;

export const SettingsOptions = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  border-style: solid;
  border-top-width: 0.5px;
  border-top-color: ${colors.lightGrey};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomContIcon = styled(Icon2)`
  color: ${colors.blue};
`;

export const BottomContRightIcon = styled(Icon3)`
  color: ${colors.blue};
`;
