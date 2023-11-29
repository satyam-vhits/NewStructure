import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import style from './inputContainer.style';
import {inputContainerProps} from './inputContainerProps';
import SvgIndex from '@svgIndex';
import color from '@theme/color';

const InputContainer: FC<inputContainerProps> = (
  props: inputContainerProps,
) => {
  return (
    <View style={style.container}>
      <Text
        style={[
          style.labelStyle,
          {
            color: props.error ? color.indianRed : color.JetBlack,
          },
        ]}>
        {props.label}
      </Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: props.error ? color.indianRed : color.JetBlack,
          },
        ]}>
        <TextInput
          style={style.inputStyle}
          autoCorrect={props.autoCorrect}
          enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          value={props.value}
          autoCapitalize="none"
          maxLength={props.maxLength}
          {...props}
        />
        {props?.rightIcon && (
          <TouchableOpacity
            onPress={event => props?.onRightIconPress?.(event)}
            style={style.iconContainer}>
            {props.secureTextEntry ? (
              <SvgIndex.eye fill={color.JetBlack} />
            ) : (
              <SvgIndex.closeEye fill={color.JetBlack} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {props.error && (
        <View style={style.errorContainer}>
          <View style={style.dot} />
          <Text style={style.errorLabel}>{props.error}</Text>
        </View>
      )}
    </View>
  );
};

InputContainer.defaultProps = {
  autoCorrect: false,
  keyboardType: 'default',
  secureTextEntry: false,
};

export default InputContainer;
