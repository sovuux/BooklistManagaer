import { Book } from './book.type'

export type TableColumnType = {
  name: string
  key: keyof Book
}
