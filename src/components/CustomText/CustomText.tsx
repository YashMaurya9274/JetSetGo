import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {TEXT_COLOR} from 'src/types/enums';

type Props = {
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  text: string;
  style?: StyleProp<ViewStyle>;
};

const CustomText = ({color, fontSize, fontWeight, text, style}: Props) => {
  return (
    <View style={style}>
      <Text
        // @ts-ignore
        style={{
          color: color || TEXT_COLOR.BLACK,
          fontSize: fontSize || 14,
          fontWeight: fontWeight || 'normal',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default CustomText;
