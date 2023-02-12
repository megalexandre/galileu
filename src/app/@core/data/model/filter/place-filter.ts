import { Address } from "@model/default/address";
import { DefaultFilter } from "./default-filter";

export interface PlaceFilter extends DefaultFilter {
  number?: string,
  letter?: string,
  address?: Address,
}
