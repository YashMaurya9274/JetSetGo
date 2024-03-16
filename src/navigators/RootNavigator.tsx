import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TravelRequest from '../screens/TravelRequest/TravelRequest';

export type RootStackParamList = {
  TravelRequest: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="TravelRequest" component={TravelRequest} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
