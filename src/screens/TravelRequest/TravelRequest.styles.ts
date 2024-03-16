import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR_CODE} from 'src/types/enums';

const styles = StyleSheet.create({
  travelRequestContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.WHITE,
  },
  travelRequestContentContainer: {
    paddingBottom: 20,
  },
  travelRequestTopContainer: {
    backgroundColor: COLOR_CODE.PRIMARY,
    padding: 15,
    gap: 5,
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  loader: {
    marginTop: 200,
  },
});

export default styles;
