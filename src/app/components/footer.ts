import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <span>© {{ year }} {{ name() }}</span>
    </footer>
  `,
})
export class Footer {
  readonly name = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
