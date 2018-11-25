import { StyleSheet } from 'react-native';

const BaseStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  vCenter: {
    alignItems: 'center',
  },

  hCenter: {
    justifyContent: 'center',
  },

  vEnd: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  hEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  hBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bold: {
    fontWeight: '600',
  },

  normal: {
    fontWeight: '300',
  },
});

export default BaseStyle;
