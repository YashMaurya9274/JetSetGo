import {PRICE_SORTING} from './enums';

interface FlightType {
  id: number;
  gate: string;
  price: number;
  origin: string;
  airline: string;
  aircraft: string;
  duration: string;
  arrivalTime: string;
  destination: string;
  flightNumber: string;
  departureTime: string;
  seatsAvailable: number;
}

interface PriceSortingSteps {
  id: number;
  step: PRICE_SORTING;
}
