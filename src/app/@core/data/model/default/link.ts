import { Customer } from "./customer";
import { Group } from "./group";
import { Place } from "./place";

export interface Link {
  id: string,
  group: Group,
  customer: Customer,
  place: Place,
  mailPlace: Place,
  active: Boolean,
  startedAt: Date,
  finishedAt: Date,
}
