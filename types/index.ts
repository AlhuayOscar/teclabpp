import { MouseEventHandler } from "react";

export interface HotelProps {
  city: string;
  class: string;
  price: number;
  rating: number;
  distance_to_city_center: number;
  amenities: string[];
  type: string;
}

export interface FilterProps {
  city?: string;
  price_range?: [number, number];
  rating?: number;
  amenities?: string[];
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface HotelCardProps {
  name: string;
  city: string;
  price: number;
  rating: number;
  distanceToCityCenter: number;
  amenities: string[];
  type: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string | number;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchCityProps {
  city: string;
  setCity: (city: string) => void;
}
