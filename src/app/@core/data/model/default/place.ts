import { Address } from "./address";

export interface Place {
  id: string,
  number: number,
  letter: string,
  address: Address,
  hasHydrometer: boolean,
  other: string,
}
