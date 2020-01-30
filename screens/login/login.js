import React, {useState} from 'react';
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
  EyeIcon,
  PasswordInput,
} from './style';
import {TextInput} from '../../components';
import {TouchableWithoutFeedback} from 'react-native';
import colors from '../../theme';

export default function Login() {
  const [active, setactive] = useState(false);

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
          <PasswordInput>
            <TextInput
              secureTextEntry={!active}
              style={{flex: 1, paddingRight: 30}}
              active={active}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                setactive(!active);
              }}>
              <EyeIcon
                name="eye"
                size={24}
                color={active ? colors.blue : colors.grey}
              />
            </TouchableWithoutFeedback>
          </PasswordInput>
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
