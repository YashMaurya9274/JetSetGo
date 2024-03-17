import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './FlightsForYou.styles';
import CustomText from '@components/CustomText/CustomText';
import {COLOR_CODE, PRICE_SORTING, TEXT_COLOR} from 'src/types/enums';
import Flight from '@components/Flight/Flight';
import Searchbar from '@components/Searchbar/Searchbar';
import PriceSort from '@components/PriceSort/PriceSort';
import {FlightType} from 'src/types/typings';
import STRINGS from 'src/types/strings';

type Props = {
  flights: FlightType[];
};

const debounce = (func: any, delay: number) => {
  let timeoutId: any;

  return (...args: any) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const FlightsForYou = ({flights}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [flightsData, setFlightsData] = useState<FlightType[]>([]);
  const [sortType, setSortType] = useState<PRICE_SORTING>(PRICE_SORTING.NORMAL);
  const [unsortedSearchedFlights, setUnsortedSearchedFlights] = useState<
    FlightType[]
  >([]);

  const fetchSearchResults = useCallback(() => {
    const searchedFlights = flights.filter(flight =>
      flight.airline.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFlightsData(searchedFlights);
    setUnsortedSearchedFlights(searchedFlights);
  }, [flights, searchText]);

  const debouncedSearch = debounce(fetchSearchResults, 500);

  useEffect(() => {
    debouncedSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleSort = useCallback(() => {
    if (sortType === PRICE_SORTING.ASCENDING) {
      const tempFlights = [...flightsData];
      tempFlights.sort((flightA, flightB) => flightA.price - flightB.price);
      setFlightsData(tempFlights);
    } else if (sortType === PRICE_SORTING.DESCENDING) {
      const tempFlights = [...flightsData];
      tempFlights.sort((flightA, flightB) => flightB.price - flightA.price);
      setFlightsData(tempFlights);
    } else if (sortType === PRICE_SORTING.NORMAL) {
      if (searchText) {
        setFlightsData(unsortedSearchedFlights);
      } else {
        setFlightsData(flights);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights, sortType]);

  useEffect(() => {
    if (flights.length > 0) {
      handleSort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, flights]);

  const renderItem = ({item}: {item: FlightType}) => {
    return <Flight key={item.id} flight={item} />;
  };

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <CustomText
        text={STRINGS.NO_SEARCH_RESULTS}
        color={COLOR_CODE.PRIMARY}
        fontSize={15}
      />
    </View>
  );

  return (
    <View style={styles.flightsContainer}>
      <CustomText
        text={STRINGS.FLIGHTS_FOR_YOU}
        color={TEXT_COLOR.GRAY_1}
        fontSize={18}
        fontWeight="400"
      />

      <View style={styles.searchSortContainer}>
        <Searchbar
          value={searchText}
          onChangeSearchText={text => setSearchText(text)}
        />

        <PriceSort
          onChangeSortType={(type: PRICE_SORTING) => setSortType(type)}
        />
      </View>

      {/* @ts-ignore */}
      <FlatList
        data={flightsData}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.flights}
        keyExtractor={(item: FlightType) => item.id}
        key={(item: FlightType) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlightsForYou;
