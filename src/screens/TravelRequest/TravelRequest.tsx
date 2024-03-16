import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLOR_CODE, TEXT_COLOR} from 'src/types/enums';
import MainContainer from '@components/MainContainer/MainContainer';
import Imagelinks from '@assets/Imagelinks';
import CustomText from '@components/CustomText/CustomText';
import {getFlights} from 'src/lib/flights.helper';
import FlightsForYou from '@components/FlightsForYou/FlightsForYou';
import styles from './TravelRequest.styles';

const TravelRequest = () => {
  const [flights, setFlights] = useState<FlightType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async () => {
    setLoading(true);
    const resFlights = await getFlights();

    if (resFlights && resFlights.length > 0) {
      setFlights(resFlights);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const navigation = useNavigation();

  return (
    <MainContainer navigation={navigation}>
      <ScrollView
        style={styles.travelRequestContainer}
        contentContainerStyle={styles.travelRequestContentContainer}>
        <View style={styles.travelRequestTopContainer}>
          {/* Logo and Name */}
          <View style={styles.topHeader}>
            <View>
              <CustomText
                text="JetSetGo"
                fontSize={22}
                fontWeight="600"
                color={TEXT_COLOR.WHITE}
              />
              <CustomText
                text="Let&#39;s elevate travel together!"
                color={TEXT_COLOR.WHITE}
                fontSize={12}
              />
            </View>

            <Image source={Imagelinks.flightLogo} style={styles.logo} />
          </View>
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            color={COLOR_CODE.PRIMARY}
            style={styles.loader}
          />
        ) : (
          <FlightsForYou flights={flights} />
        )}
      </ScrollView>
    </MainContainer>
  );
};

export default TravelRequest;
