import { Booking } from "./types";
import { DateRange } from "react-day-picker";
import { create } from "zustand";
// Define the state's shape
type PropertyState = {
  propertyId: string;
  price: number;
  bookings: Booking[];
  range: DateRange | undefined;
};

// Create the store
export const useProperty = create<PropertyState>(() => {
  return {
    propertyId: "",
    price: 0,
    bookings: [],
    range: undefined,
  };
});
