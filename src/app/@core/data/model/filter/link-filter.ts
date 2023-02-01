import { DefaultFilter } from './default-filter';

export interface LinkFilter extends DefaultFilter {

  name?: string,
  document?: string,

}
