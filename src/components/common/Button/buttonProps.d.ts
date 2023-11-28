import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicatorProps,
  TouchableOpacityProps,
  ColorValue,
} from 'react-native';

interface ButtonProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void;
  buttonProps?: TouchableOpacityProps;
  backgroundColor?: ColorValue | undefined;
}
