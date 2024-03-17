import {Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {PRICE_SORTING, TEXT_COLOR} from 'src/types/enums';
import Imagelinks from '@assets/Imagelinks';
import styles from './PriceSort.styles';
import CustomText from '@components/CustomText/CustomText';
import {PriceSortingSteps} from 'src/types/typings';
import STRINGS from 'src/types/strings';

type Props = {
  onChangeSortType: (type: PRICE_SORTING) => void;
};

const sortingSteps: PriceSortingSteps[] = [
  {
    id: 1,
    step: PRICE_SORTING.NORMAL,
  },
  {
    id: 2,
    step: PRICE_SORTING.ASCENDING,
  },
  {
    id: 3,
    step: PRICE_SORTING.DESCENDING,
  },
];

const PriceSort = ({onChangeSortType}: Props) => {
  const [stepIndex, setStepIndex] = useState(0);

  const textColor = useMemo(() => {
    if (sortingSteps[stepIndex].step === PRICE_SORTING.NORMAL) {
      return TEXT_COLOR.GRAY;
    } else {
      return TEXT_COLOR.BLACK;
    }
  }, [stepIndex]);

  const getArrowImage = useCallback(() => {
    if (sortingSteps[stepIndex].step === PRICE_SORTING.DESCENDING) {
      return Imagelinks.arrowDown;
    } else {
      return Imagelinks.arrowUp;
    }
  }, [stepIndex]);

  const handleSortChange = useCallback(() => {
    if (stepIndex === sortingSteps.length - 1) {
      setStepIndex(0);
      onChangeSortType(sortingSteps[0].step);
    } else {
      setStepIndex(stepIndex + 1);
      onChangeSortType(sortingSteps[stepIndex + 1].step);
    }
  }, [onChangeSortType, stepIndex]);

  return (
    <TouchableOpacity
      style={styles.sortContainer}
      activeOpacity={0.5}
      onPress={handleSortChange}>
      <CustomText text={STRINGS.PRICE} color={textColor} />
      <Image
        source={getArrowImage()}
        style={[
          styles.sortArrowImage,
          {
            tintColor: textColor,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default PriceSort;
