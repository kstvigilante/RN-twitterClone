import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './style';

function StartupScreen(props) {
  const goToCreateAccount = () => {
    props.navigation.navigate('CreateAccountScreen');
  };

  const goToLoginScreen = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Twitter_Logo_Blue.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingText}>
          See what's happening in the world right now.
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={goToCreateAccount}>
        <View style={styles.btnContainer}>
          <View style={styles.createAccBtn}>
            <Text style={styles.createAccBtnText}>Create account</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Have an account already? </Text>
        <TouchableWithoutFeedback onPress={goToLoginScreen}>
          <Text style={styles.linkToLogin}>Log in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default StartupScreen;
