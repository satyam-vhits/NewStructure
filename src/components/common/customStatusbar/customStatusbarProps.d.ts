import {StatusBarProps, StyleProp, ViewStyle} from 'react-native';

interface CustomStatusProps {
  backgroundColor?: string | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  translucent?: boolean;
}
