import { Component, inject, input } from '@angular/core';
import { Info } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { IconButton } from './icon-button';

@Component({
  selector: 'app-projects',
  imports: [IconButton],
  template: `
    <section class="stack">
      <h2>{{ t().sections.projects }}</h2>
      <div class="project-grid">
        @for (project of projects(); track project.title) {
          <article class="project-card">
            <h3>{{ project.title }}</h3>
            @if (project.technologies?.length) {
              <div class="project-techs">
                @for (tech of project.technologies; track tech.name) {
                  <i [class]="tech.icon" [title]="tech.name" [attr.aria-label]="tech.name"></i>
                }
              </div>
            }
            @if (project.image; as image) {
              <img class="project-image" [src]="image" [alt]="'Captura de ' + project.title" loading="lazy" />
            } @else {
              <div class="project-image placeholder"><i [class]="'icon-' + project.icon" aria-hidden="true"></i></div>
            }
            <p class="project-subtitle">{{ project.subtitle }}</p>
            <p class="muted">{{ project.description }}</p>
            @if (project.url || project.github) {
              <div class="project-links">
                @if (project.github; as github) {
                  <app-icon-button icon="devicon-github-original" [url]="github" [text]="t().actions.code" />
                }
                @if (project.url; as url) {
                  <app-icon-button icon="icon-monitor" [url]="url" [text]="t().actions.viewSite" />
                }
              </div>
            }
          </article>
        }
      </div>
    </section>
  `,
})
export class Projects {
  readonly projects = input.required<Info[]>();
  protected readonly t = inject(LangService).t;
}
