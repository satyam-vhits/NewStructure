import {StyleSheet} from 'react-native';
import colors from '@theme/color';

const style = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  labelStyle: {
    marginBottom: 5,
    marginLeft: 2,
    fontSize: 14,
    color: colors.JetBlack,
  },
  inputContainer: {
    backgroundColor: colors.white,
    height: 50,
    borderColor: colors.JetBlack,
    borderWidth: 1.5,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    flex: 1,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default style;
