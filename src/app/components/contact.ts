import { Component, inject, input } from '@angular/core';
import { Media } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact" id="contacto">
      <div class="contact-card">
        <span class="contact-eyebrow"><i class="icon-sparkles" aria-hidden="true"></i> {{ t().contact.eyebrow }}</span>
        <h2 class="contact-title">{{ t().contact.title }}</h2>
        <p class="contact-text">{{ t().contact.text }}</p>
        <a class="contact-email" [href]="'mailto:' + media().email">
          <i class="icon-mail" aria-hidden="true"></i>
          <span>{{ media().email }}</span>
          <i class="icon-arrow-right" aria-hidden="true"></i>
        </a>
        <div class="contact-links">
          @if (media().github; as github) {
            <a class="contact-link" [href]="github" target="_blank" rel="noopener noreferrer">
              <i class="devicon-github-original" aria-hidden="true"></i><span>GitHub</span>
            </a>
          }
          @if (media().linkedin; as linkedin) {
            <a class="contact-link" [href]="linkedin" target="_blank" rel="noopener noreferrer">
              <i class="devicon-linkedin-plain" aria-hidden="true"></i><span>LinkedIn</span>
            </a>
          }
          @if (media().cv; as cv) {
            <a class="contact-link" [href]="cv" target="_blank" rel="noopener noreferrer">
              <i class="icon-file-text" aria-hidden="true"></i><span>CV</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  readonly media = input.required<Media>();
  protected readonly t = inject(LangService).t;
}
