import {Platform, StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  searchInput: {
    padding: Platform.OS === 'ios' ? 5 : 0,
    flex: 1,
  },
  searchImage: {
    height: 20,
    width: 20,
    tintColor: TEXT_COLOR.GRAY,
  },
});

export default styles;
