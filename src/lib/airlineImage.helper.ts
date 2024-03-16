import Imagelinks from '@assets/Imagelinks';
import {AIRLINES} from 'src/types/enums';

export const getAirlineImage = (airlineName: string) => {
  if (airlineName === AIRLINES.AIR_ASIA) {
    return Imagelinks.airAsia;
  }
  if (airlineName === AIRLINES.AIR_INDIA) {
    return Imagelinks.airIndia;
  }
  if (airlineName === AIRLINES.GO_AIR) {
    return Imagelinks.goAir;
  }
  if (airlineName === AIRLINES.INDIGO) {
    return Imagelinks.indigo;
  }
  if (airlineName === AIRLINES.SPICE_JET) {
    return Imagelinks.spiceJet;
  }
  if (airlineName === AIRLINES.VISTARA) {
    return Imagelinks.vistara;
  }
};
