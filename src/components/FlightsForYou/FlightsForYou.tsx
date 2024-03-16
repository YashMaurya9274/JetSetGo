import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './FlightsForYou.styles';
import CustomText from '@components/CustomText/CustomText';
import {TEXT_COLOR} from 'src/types/enums';
import Flight from '@components/Flight/Flight';

type Props = {
  flights: FlightType[];
};

const FlightsForYou = ({flights}: Props) => {
  const renderItem = ({item}: {item: FlightType}) => {
    return <Flight key={item.id} flight={item} />;
  };

  return (
    <View style={styles.flightsContainer}>
      <CustomText
        text="Flights for you"
        color={TEXT_COLOR.GRAY_1}
        fontSize={18}
        fontWeight="400"
      />

      {/* Airline Search & Price sorting */}

      {/* @ts-ignore */}
      <FlatList
        data={flights}
        contentContainerStyle={styles.flights}
        keyExtractor={(item: FlightType) => item.id}
        // @ts-ignore
        key={(item: FlightType) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlightsForYou;
