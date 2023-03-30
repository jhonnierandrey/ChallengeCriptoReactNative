import {StyleSheet} from 'react-native';
import palette from '../../common/palette';

export const listItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: palette.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 26,
  },
  leftBox: {
    flex: 0,
    flexDirection: 'row',
  },
  coinLogoBox: {
    alignItems: 'center',
    paddingRight: 5,
  },
  coinLogo: {
    width: 50,
    height: 50,
  },
  textBox: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'left',
  },
  coinName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: palette.black,
  },
  coinSymbol: {
    fontWeight: '400',
    fontSize: 16,
    color: palette.grey,
  },
  rightBox: {
    justifyContent: 'flex-end',
  },
  coinHealth: {
    alignSelf: 'flex-end',
    fontSize: 14,
  },
  healthBuy: {
    color: palette.green,
  },
  healthSell: {
    color: palette.red,
  },
  healthImg: {
    width: 13,
    height: 13,
  },
});
