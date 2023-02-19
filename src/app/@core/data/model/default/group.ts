export interface Group {
  id: string,
  value: number,
  name: string,
  category: Category,
}

export interface Category {
  name: 'FOUNDER'|'EFFECTIVE'|'TEMPORARY',
}
