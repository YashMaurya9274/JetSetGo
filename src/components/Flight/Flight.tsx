import {Image, View} from 'react-native';
import React from 'react';
import styles from './Flight.styles';
import CustomText from '@components/CustomText/CustomText';
import {TEXT_COLOR} from 'src/types/enums';
import {getAirlineImage} from 'src/lib/airlineImage.helper';
import Imagelinks from '@assets/Imagelinks';

type Props = {
  flight: FlightType;
};

type FlightDetailProps = {
  name: string;
  value: string | number;
};

const FlightDetail = ({name, value}: FlightDetailProps) => (
  <View style={styles.flightDetailContainer}>
    <CustomText text={name} fontSize={12} />
    <CustomText
      text={value.toString()}
      color={TEXT_COLOR.GRAY_1}
      fontSize={12}
    />
  </View>
);

const Separator = () => <View style={styles.separator} />;

const Flight = ({flight}: Props) => {
  const {
    aircraft,
    airline,
    arrivalTime,
    departureTime,
    destination,
    duration,
    flightNumber,
    gate,
    origin,
    price,
    seatsAvailable,
  } = flight;

  return (
    <View style={styles.flightContainer}>
      <View style={styles.flightTop}>
        <View style={styles.flightTopLeft}>
          <Image
            source={getAirlineImage(airline)}
            style={styles.airlineImage}
          />

          <View>
            <CustomText text={airline} fontSize={16} />
            <CustomText
              text={aircraft}
              fontSize={13}
              color={TEXT_COLOR.GRAY_1}
              fontWeight="400"
            />
          </View>
        </View>

        <CustomText text={`₹ ${price}`} fontSize={13} color={TEXT_COLOR.GRAY} />
      </View>

      <View style={styles.flightMiddle}>
        <View style={styles.flightMiddleInfo}>
          <FlightDetail name="Flight Number :" value={flightNumber} />
          <Separator />
          <FlightDetail name="Gate :" value={gate} />
          <Separator />
          <FlightDetail name="Seats Available :" value={seatsAvailable} />
        </View>

        <View style={styles.flightMiddleInfo}>
          <FlightDetail
            name="Arrival Time :"
            value={new Date(arrivalTime).toLocaleDateString()}
          />
          <Separator />
          <FlightDetail
            name="Departure Time :"
            value={new Date(departureTime).toLocaleDateString()}
          />
        </View>
      </View>

      <View style={styles.flightBottom}>
        <CustomText text={origin} fontSize={15} fontWeight="600" />
        <View style={styles.flightMiddleDurationContainer}>
          <CustomText
            text={duration}
            fontSize={12}
            fontWeight="500"
            style={styles.durationTime}
          />
          <Image
            source={Imagelinks.rightBigArrow}
            style={styles.rightArrowImage}
          />
        </View>
        <CustomText text={destination} fontSize={15} fontWeight="600" />
      </View>
    </View>
  );
};

export default Flight;
