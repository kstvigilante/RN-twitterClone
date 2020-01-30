import React from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  Heading,
  HeadingText,
  TextInputContainer,
  Mt50,
  BottomContainer,
  OptionText,
  NextButton,
  NextButtonText,
} from './style';
import {TextInput} from '../../components';

function CreateAccount() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={require('../../assets/Twitter_Logo_Blue.png')} />
      </LogoContainer>

      <Heading>
        <HeadingText>Create your account</HeadingText>
      </Heading>

      <TextInputContainer>
        <TextInput placeholder="Name" />
        <Mt50>
          <TextInput placeholder="Phone number or email address" />
        </Mt50>
      </TextInputContainer>

      <BottomContainer>
        <OptionText>Use email instead</OptionText>
        <NextButton>
          <NextButtonText>Next</NextButtonText>
        </NextButton>
      </BottomContainer>
    </Container>
  );
}

export default CreateAccount;
