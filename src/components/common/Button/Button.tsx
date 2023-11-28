import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import color from '@theme/color';
import {ButtonProps} from './buttonProps';
import style from './button.style';

const Button: React.FC<ButtonProps> = ({
  label,
  activityProps,
  buttonProps,
  backgroundColor,
  containerStyle,
  isLoading,
  nameTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        style.container,
        containerStyle,
        {backgroundColor: backgroundColor},
      ]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading}
      {...buttonProps}>
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={color.white}
          style={style.indicatorStyle}
          {...activityProps}
        />
      )}
      <Text
        style={[style.nameStyle, nameTextStyle]}
        textBreakStrategy="highQuality">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
Button.defaultProps = {
  isLoading: false,
  backgroundColor: color.coral,
};
