import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const dims = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  headerWidth: width,
  headerHeight: 72,
  subHeaderHeight: 40,
  projectCardHeight: 40,
  headerFontSize: 18,
  subHeaderFontSize: 16,
  slidePadding: 15,
  titleFontSize: 20,
  labelFontSize: 16,
  textFontSize: 16,
  pageFontSize: 20,
  actionFontSize: 36,
  valueFontSize: 70,
  subtitleFontSize: 18,
  chatFontSize: 15,
  buttonFontSize: 18,
  mainContainerPadding: 20,
  mainContainerMargin: 5,
  inputTextPadding: 10,
  inputTextMargin: 10,
  cardPadding: 15,
  chatUserPadding: 5,
  chatFriendMargin: 10,
  iconSize: {
    small: 20,
    medium: 30,
    large: 45,
  },
  topTabBar: 50,
  simpleLabelFontSize: 14,
};

export default dims;
