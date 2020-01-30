import styled from 'styled-components';
import colors from '../../theme';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
  padding: 5px 0 0;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 3px 20px 0 20px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: ${width / 2 - 125}px;
`;

export const SignUpText = styled.Text`
  color: ${colors.blue};
  font-weight: bold;
  margin-right: 30px;
  font-size: 14px;
`;

export const MenuToggle = styled.View`
  justify-content: space-between;
`;

export const MenuDots = styled.View`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  border-style: solid;
  border-color: ${colors.blue};
  border-width: 1.5px;
  margin: 1px 0;
`;

export const LoginContainer = styled.View`
  padding: 8px 12px 0 12px;
`;

export const HeadingText = styled.Text`
  color: ${colors.black};
  font-size: 22px;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: ${colors.grey};
  font-size: 14px;
  font-weight: bold;
`;

export const UserInputCont = styled.View`
  margin-top: 20px;
`;

export const UserPasswordCont = styled.View`
  margin-top: 15px;
`;

export const ForgottenPassword = styled.Text`
  text-align: center;
  color: ${colors.grey};
  font-size: 14px;
  margin-top: 20px;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  border-style: solid;
  border-top-width: 0.5px;
  border-top-color: ${colors.lightGrey};
  padding: 0 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NextButton = styled.View`
  background-color: ${colors.lightBlue};
  border-radius: 20px;
  padding: 8px 18px;
`;

export const NextButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
