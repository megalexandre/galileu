export interface CustomerFilter {
  name?: string,
  document?: string,
  page?: number,
  pageSize?: number,
  direction?: 'ASC' | 'DESC',
  sortedField?: string,
  birthDay?: string,
}
