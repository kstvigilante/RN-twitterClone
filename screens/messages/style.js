import styled from 'styled-components';
import colors from '../../theme';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const MessagesView = styled.View`
  height: ${height}px;
  background-color: ${colors.aliceBlue};
  justify-content: center;
  align-items: center;
`;

export const NoMessageText = styled.Text`
  width: 230px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`;

export const Explanation = styled.Text`
  width: 280px;
  text-align: center;
  color: ${colors.grey};
  margin-top: 20px;
`;

export const WriteAMsgView = styled.View`
  background-color: ${colors.blue};
  width: 150px;
  margin: 20px auto 0 auto;
  padding: 5px 15px;
  border-radius: 30px;
`;

export const WriteAMsgText = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
`;
