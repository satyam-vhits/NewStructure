import {KeyboardType, GestureResponderEvent} from 'react-native';

interface inputContainerProps {
  placeholder?: string | undefined;
  label?: string | undefined;
  autoCorrect?: boolean;
  enablesReturnKeyAutomatically?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  error?: string | null;
  rightIcon?: boolean;
  onRightIconPress?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  value?: string;
  maxLength?: number;
}
