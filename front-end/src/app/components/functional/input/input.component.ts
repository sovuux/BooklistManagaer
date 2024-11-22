import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() inputValue: string | number = ''
  @Input() disabled: boolean = false

  @Output() inputValueChange: EventEmitter<string | number> = new EventEmitter()

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    this.inputValue = target.value
    this.inputValueChange.emit(this.inputValue)
  }
}
