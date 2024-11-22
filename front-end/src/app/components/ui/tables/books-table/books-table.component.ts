import { Component } from '@angular/core'
import { DataTableComponent } from '../../../functional/tables/data-table/data-table.component'
import { Book } from '../../../../../types/books/book.type'
import { HttpClient } from '@angular/common/http'
import { TableColumnType } from '../../../../../types/books/table-column.type'

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.scss'
})
export class BooksTableComponent {
  public books: Book[] = []
  public tableColumns: TableColumnType[] = [
    {
      name: 'Id',
      key: 'id'
    },
    {
      name: 'Название книги',
      key: 'title'
    },
    {
      name: 'Автор',
      key: 'author'
    },
    {
      name: 'Год публикации',
      key: 'publicationYear'
    },
    {
      name: 'Жанр',
      key: 'genre'
    },
    {
      name: 'Статус',
      key: 'status'
    },
    {
      name: 'Дата добавления',
      key: 'createdAt'
    },
    {
      name: 'Дата изменения',
      key: 'updatedAt'
    }
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.http
      .get('http://localhost:3000/library/all-books')
      .subscribe((data: any) => {
        this.books = data
      })
  }
}
