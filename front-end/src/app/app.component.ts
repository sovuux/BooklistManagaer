import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LayoutComponent } from './components/ui/layout/layout.component'
import { BooksTableComponent } from './components/ui/tables/books-table/books-table.component'
import { ButtonComponent } from './components/functional/button/button.component'
import { BooksModalComponent } from './components/ui/modal/books-modal/books-modal.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    BooksTableComponent,
    ButtonComponent,
    BooksModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
