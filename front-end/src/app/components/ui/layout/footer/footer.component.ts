import { Component } from '@angular/core'
import { SocialMediaType } from '../../../../../types/social-media.type'
import { NgForOf } from '@angular/common'
import { ButtonComponent } from '../../../functional/button/button.component'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgForOf, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  atSignSymbol: string = '@'
  socialMedia: SocialMediaType[] = [
    {
      icon: 'pi pi-github',
      url: 'https://github.com/sovuux'
    },
    {
      icon: 'pi pi-telegram',
      url: 'https://web.telegram.org'
    }
  ]

  openUrl(url: string): void {
    window.open(url, '_blank')
  }
}
