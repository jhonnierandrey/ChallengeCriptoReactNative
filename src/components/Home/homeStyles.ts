import {StyleSheet} from 'react-native';
import palette from '../../common/palette';

export const homeStyles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: palette.orange,
  },
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  main: {
    backgroundColor: palette.white,
    flex: 1,
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  addView: {
    marginTop: 48,
    alignItems: 'center',
  },
  btnAdd: {
    fontSize: 16,
    alignItems: 'center',
    color: palette.blue,
    fontWeight: '400',
  },
});
