import React, {memo} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {propType} from './customStatusbarProps';
import color from '@theme/color';

const CustomStatusBar: React.FC<propType> = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {height: insets.top, backgroundColor: props.backgroundColor},
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
        translucent={props.translucent}
        {...props}
        hidden={props.hidden}
      />
    </View>
  );
};

CustomStatusBar.defaultProps = {
  backgroundColor: color.white,
  barStyle: 'dark-content',
};

export default memo(CustomStatusBar);
