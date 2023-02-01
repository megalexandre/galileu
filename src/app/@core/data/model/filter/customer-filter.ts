import { DefaultFilter } from "./default-filter";

export interface CustomerFilter extends DefaultFilter {
  name?: string,
  document?: string,
}
