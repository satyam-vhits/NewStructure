import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: color.charCoal,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: color.white,
    lineHeight: 21,
    // fontFamily: fontFamily.robotoBold,
  },
  indicatorStyle: {
    marginRight: 10,
  },
});
export default style;
