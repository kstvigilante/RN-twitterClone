import {StyleSheet} from 'react-native';
import colors from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 5,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    height: 40,
    width: 40,
  },
  heading: {
    marginTop: 180,
  },
  headingText: {
    fontSize: 30,
    paddingLeft: 40,
    paddingRight: 80,
    fontWeight: 'bold',
    color: colors.black,
  },
  btnContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  createAccBtn: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    paddingVertical: 5,
  },
  createAccBtnText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    paddingHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  bottomText: {
    color: colors.grey,
  },
  linkToLogin: {
    color: colors.blue,
  },
});
