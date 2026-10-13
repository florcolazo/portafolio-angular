import { Component, inject, input } from '@angular/core';
import { Info } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { IconButton } from './icon-button';

@Component({
  selector: 'app-info-detail',
  imports: [IconButton],
  template: `
    <article class="info">
      <div class="info-main">
        <span class="info-icon"><i [class]="'icon-' + info().icon" aria-hidden="true"></i></span>
        <div class="stack small">
          <strong>{{ info().title }}</strong>
          <span>{{ info().subtitle }}</span>
          <p class="muted">{{ info().description }}</p>
          @if (info().technologies?.length) {
            <div class="wrap">
              @for (tech of info().technologies; track tech.name) {
                <span class="badge gray"><i [class]="tech.icon" aria-hidden="true"></i>{{ tech.name }}</span>
              }
            </div>
          }
          @if (info().url || info().github) {
            <div class="row">
              @if (info().url; as url) {
                <app-icon-button icon="icon-link" [url]="url" [label]="t().actions.viewProject" />
              }
              @if (info().github; as github) {
                <app-icon-button icon="devicon-github-original" [url]="github" label="GitHub" />
              }
            </div>
          }
        </div>
      </div>
      @if (info().image; as image) {
        <img class="info-image" [src]="image" [alt]="info().title" />
      }
      @if (info().date || info().certificate) {
        <div class="info-aside">
          @if (info().date; as date) {
            <span class="badge">{{ date }}</span>
          }
          @if (info().certificate; as certificate) {
            <app-icon-button icon="icon-shield-check" [url]="certificate" [label]="t().actions.certificate" [solid]="true" />
          }
        </div>
      }
    </article>
  `,
})
export class InfoDetail {
  readonly info = input.required<Info>();
  protected readonly t = inject(LangService).t;
}
