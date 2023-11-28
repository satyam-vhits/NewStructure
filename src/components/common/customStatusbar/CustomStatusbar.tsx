import React from 'react';
import {StatusBar} from 'react-native';
import {CustomStatusProps} from './customStatusbarProps';
import colors from '../../../theme/color';

const CustomStatusbar: React.FC<CustomStatusProps> = props => {
  return (
    <StatusBar
      animated={true}
      backgroundColor={props?.backgroundColor || colors.white}
      barStyle={props.barStyle}
      translucent={props.translucent}
      {...props}
    />
  );
};

CustomStatusbar.defaultProps = {
  backgroundColor: colors.white,
  barStyle: 'dark-content',
  translucent: false,
};

export default CustomStatusbar;
