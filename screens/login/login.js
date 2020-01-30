import React from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  SignUpText,
  MenuToggle,
  MenuDots,
  LoginContainer,
  HeadingText,
  Label,
  UserInputCont,
  UserPasswordCont,
  ForgottenPassword,
  BottomContainer,
  NextButton,
  NextButtonText,
} from './style';
import {TextInput} from '../../components';
import Icon from 'react-native-vector-icons/Entypo';

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={require('../../assets/Twitter_Logo_Blue.png')} />
        <SignUpText>Sign up</SignUpText>
        <MenuToggle>
          <MenuDots />
          <MenuDots />
          <MenuDots />
        </MenuToggle>
      </LogoContainer>

      <LoginContainer>
        <HeadingText>Log in to Twitter.</HeadingText>
        <UserInputCont>
          <Label>Phone number, email address, or username</Label>
          <TextInput />
        </UserInputCont>
        <UserPasswordCont>
          <Label>Password</Label>
          <TextInput secureTextEntry={true} />
          <Icon name="eye" size={30} color="#900" />
        </UserPasswordCont>
      </LoginContainer>
      <ForgottenPassword>Forgotten your password?</ForgottenPassword>
      <BottomContainer>
        <NextButton>
          <NextButtonText>Log in</NextButtonText>
        </NextButton>
      </BottomContainer>
    </Container>
  );
}
