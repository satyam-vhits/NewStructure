import Colors from '@theme/color';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});