export interface Customer {
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  personType: 'PERSON'|'LEGAL'
}

