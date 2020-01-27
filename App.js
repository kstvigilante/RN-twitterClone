/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Navigation from './navigation';
import Statusbar from './components';

const App = () => {
  return (
    <View style={styles.mainScreen}>
      <Statusbar backgroundColor="#eee" barStyle="light-content" />
      <Navigation />
    </View>
  );
};

export default App;
