import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalTitle: string = 'Name of modal'
  @Input() modalData: Record<string, any> = []
  @Input() modalFields: Record<string, any>[] = []
  @Input() modalButtons: Record<string, any>[] = []
  @Input() isOpen: boolean = false

  @Output() toggleModal: EventEmitter<any> = new EventEmitter<any>()

  onButtonClick(button: Record<string, any>): void {
    this.toggleModal.emit(button)
    this.isOpen = !this.isOpen
  }
}
