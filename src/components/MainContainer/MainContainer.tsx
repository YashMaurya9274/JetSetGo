import {StatusBar, StyleProp, ViewStyle} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {COLOR_CODE} from '../../types/enums';
import styles from './MainContainer.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  navigation: any;
};

const MainContainer = ({children, containerStyle, navigation}: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView
      style={[styles.mainContainer, containerStyle]}
      edges={['left', 'right', 'top']}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLOR_CODE.PRIMARY}
      />
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
