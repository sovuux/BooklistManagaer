import { Component, Output, EventEmitter } from '@angular/core'
import { ModalComponent } from '../../../functional/modal/modal.component'

@Component({
  selector: 'app-books-modal',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './books-modal.component.html',
  styleUrl: './books-modal.component.scss'
})
export class BooksModalComponent {
    @Output() showBookModal: EventEmitter<any> = new EventEmitter()
}
