import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../functional/button/button.component'
import { InputComponent } from '../../../functional/input/input.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, ButtonComponent, InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
