import React, {useState} from 'react';
import {StyledTextInput} from './style';
import colors from '../../theme';

function TextInput(props) {
  const [active, setActive] = useState(false);

  return (
    <StyledTextInput
      placeholder={props.placeholder}
      placeholderTextColor={colors.grey}
      onBlur={() => {
        setActive(false);
      }}
      onFocus={() => {
        setActive(true);
      }}
      active={active}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

export default TextInput;
