import { CustomerFilter } from './customer-filter';
import { DefaultFilter } from './default-filter';
import { GroupFilter } from './group-filter';
import { PlaceFilter } from './place-filter';

export interface LinkFilter extends DefaultFilter {

  group: GroupFilter,
  customer: CustomerFilter,
  place: PlaceFilter,
  personType: 'PERSON'|'LEGAL',
  active?: Boolean,

}
