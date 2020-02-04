import React from 'react';
import {
  Container,
  HeaderTitle,
  MessagesView,
  NoMessageText,
  Explanation,
  WriteAMsgView,
  WriteAMsgText,
} from './style';
import {PageHeader} from '../../components';
import {ScrollView} from 'react-native';

export default function Messages(props) {
  return (
    <Container>
      <PageHeader {...props} shouldBorder={true}>
        <HeaderTitle>Messages</HeaderTitle>
      </PageHeader>
      <ScrollView>
        <MessagesView>
          <NoMessageText>Send a message, get a message</NoMessageText>
          <Explanation>
            Direct Messages are private conversations between you and other
            people on Twitter. Share Tweets, media, and more!
          </Explanation>
          <WriteAMsgView>
            <WriteAMsgText>Write a message</WriteAMsgText>
          </WriteAMsgView>
        </MessagesView>
      </ScrollView>
    </Container>
  );
}
