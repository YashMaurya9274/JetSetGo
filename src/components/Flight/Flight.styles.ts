import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  flightContainer: {
    gap: 15,
    padding: 10,
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    borderRadius: 10,
  },
  flightTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightTopLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  airlineImage: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  flightMiddle: {
    gap: 4,
  },
  flightMiddleInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  flightBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flightMiddleDurationContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  durationTime: {
    marginRight: 20,
  },
  rightArrowImage: {
    width: 160,
    height: 10,
    resizeMode: 'stretch',
  },
  flightDetailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  separator: {
    height: 15,
    width: 1,
    backgroundColor: BACKGROUND_COLOR.GRAY_3,
  },
  location: {
    marginTop: 6,
  },
  button: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY_DARK,
    paddingHorizontal: 40,
    paddingVertical: 6,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});

export default styles;
