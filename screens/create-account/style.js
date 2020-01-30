import colors from '../../theme';
import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
  padding: 5px 30px 0 30px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Heading = styled.View`
  margin-top: 20px;
`;

export const HeadingText = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${colors.black};
`;

export const TextInputContainer = styled.View`
  margin-top: 180px;
`;

export const Mt50 = styled.View`
  margin-top: 50px;
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
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: ${colors.blue};
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

export const StyledTextInput = styled.TextInput`
  border-style: solid;
  border-bottom-width: ${props => (props.active ? '2px' : '0.5px')};
  border-bottom-color: ${props => (props.active ? colors.blue : colors.grey)};
  padding-bottom: 5px;
  font-size: 18px;
`;

export const StyledTextInputWithMargin = styled(StyledTextInput)`
  margin-top: 40px;
`;
