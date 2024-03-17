import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flightsContainer: {
    padding: 15,
  },
  flights: {
    marginTop: 15,
    gap: 15,
  },
  searchSortContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});

export default styles;
