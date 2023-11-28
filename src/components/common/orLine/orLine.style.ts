import {StyleSheet} from 'react-native';
import colors from '@theme/color';
export const Style = StyleSheet.create({
  lineView: {flex: 1, height: 1, backgroundColor: colors.charCoal},
  labelStyle: {
    width: 'auto',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    color: colors.charCoal,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
