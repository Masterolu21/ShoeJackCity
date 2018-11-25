/**
 *
 * The same color patterns may differ slightly from platform to platform.
 * Therefore, it's useful having separated files for Android and iOS
 */

const colorWithAlpha = (color: string, alpha: string): string => `${color}${alpha}`;

const colors = {
  primaryBlueColor: '#063B6D',
  primaryBlueColorAlpha10: colorWithAlpha('#063B6D', '10'),
  primaryBlueColorAlpha16: colorWithAlpha('#063B6D', '16'),
  secondaryBlueColor: '#083971',
  primaryPinkColor: '#FF7588',
  primaryYellowColor: '#FFC107',
  prmiaryGreenColor: '#16D39A'
};

export default colors;
