import { AddressFilter } from "./address-filter";
import { DefaultFilter } from "./default-filter";

export interface PlaceFilter extends DefaultFilter {
  number?: string,
  letter?: string,
  address?: AddressFilter,
}
