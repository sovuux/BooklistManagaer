import { Component, Input } from '@angular/core'
import { NgClass, NgIf } from '@angular/common'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonClass: string = '';
}
