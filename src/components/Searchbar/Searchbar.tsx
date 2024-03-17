import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Imagelinks from '@assets/Imagelinks';
import styles from './Searchbar.styles';
import STRINGS from 'src/types/strings';

type Props = {
  value: string;
  onChangeSearchText: (text: string) => void;
};

const Searchbar = ({onChangeSearchText, value}: Props) => {
  const handleClick = () => {
    if (value) {
      onChangeSearchText('');
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={STRINGS.SEARCH_BY_AIRLINE}
        value={value}
        onChangeText={text => onChangeSearchText(text)}
        style={styles.searchInput}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={handleClick}>
        <Image
          source={value ? Imagelinks.cross : Imagelinks.search}
          style={styles.searchImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
