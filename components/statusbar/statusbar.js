import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './style';

function Statusbar({backgroundColor, ...props}) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default Statusbar;
