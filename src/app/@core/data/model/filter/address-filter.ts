import { DefaultFilter } from "./default-filter";

export interface AddressFilter extends DefaultFilter {
  id?: string,
  name?: string,
}
