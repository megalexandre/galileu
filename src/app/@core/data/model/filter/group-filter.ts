import { Category } from "@model/default/group";
import { DefaultFilter } from "./default-filter";

export interface GroupFilter extends DefaultFilter {
  name?: string,
  category?: Category,
}
