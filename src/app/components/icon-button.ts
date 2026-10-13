import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <a class="button" [class.solid]="solid()" [href]="url()" target="_blank" rel="noopener noreferrer"
       [attr.aria-label]="text() || label()">
      <i [class]="icon()" aria-hidden="true"></i>
      @if (text()) {
        <span>{{ text() }}</span>
      }
    </a>
  `,
})
export class IconButton {
  /** Clase CSS del icono: "icon-mail" (Lucide) o "devicon-github-original" (Devicon). */
  readonly icon = input.required<string>();
  readonly url = input.required<string>();
  readonly text = input('');
  readonly label = input('');
  readonly solid = input(false);
}
