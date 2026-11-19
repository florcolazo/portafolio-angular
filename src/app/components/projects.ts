import { Component, inject, input, viewChild } from '@angular/core';
import { Info } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { Carousel } from './carousel';
import { IconButton } from './icon-button';
import { Lightbox } from './lightbox';
import { Reveal } from './reveal';

@Component({
  selector: 'app-projects',
  imports: [IconButton, Carousel, Lightbox, Reveal],
  template: `
    <section class="section">
      <div class="section-head" appReveal>
        <span class="eyebrow">{{ t().eyebrows.projects }}</span>
        <h2>{{ t().sections.projects }}</h2>
        <p class="section-lead">{{ t().projects.lead }}</p>
      </div>

      <div class="cases">
        @for (project of projects(); track project.title; let i = $index) {
          <article class="case" [class.reverse]="i % 2 === 1" appReveal>
            <div class="case-media">
              @if (project.images?.length) {
                <app-carousel [images]="project.images!" [alt]="project.title" (zoom)="zoom(project, $event)" />
              } @else if (project.image; as image) {
                <button type="button" class="zoomable" (click)="zoom(project, 0)" [attr.aria-label]="t().projects.zoom + ': ' + project.title">
                  <img class="project-image" [src]="image" [alt]="project.title" loading="lazy" />
                  <span class="zoom-hint" aria-hidden="true"><i class="icon-maximize-2"></i></span>
                </button>
              } @else {
                <div class="project-image placeholder"><i [class]="'icon-' + project.icon" aria-hidden="true"></i></div>
              }
            </div>

            <div class="case-body">
              <div class="case-top">
                <span class="case-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                @if (project.status; as status) {
                  <span class="status-pill">{{ status }}</span>
                }
              </div>
              <h3 class="case-title">{{ project.title }}</h3>
              <p class="case-subtitle">{{ project.subtitle }}</p>

              @if (project.problem; as problem) {
                <div class="case-block">
                  <span class="case-label">{{ t().projects.challenge }}</span>
                  <p>{{ problem }}</p>
                </div>
              } @else {
                <p class="muted">{{ project.description }}</p>
              }

              @if (project.highlights?.length) {
                <div class="case-block">
                  <span class="case-label">{{ t().projects.whatIDid }}</span>
                  <ul class="checklist">
                    @for (item of project.highlights; track item) {
                      <li><i class="icon-check" aria-hidden="true"></i><span>{{ item }}</span></li>
                    }
                  </ul>
                </div>
              }

              @if (project.technologies?.length) {
                <ul class="tech-chips" aria-label="Tecnologías">
                  @for (tech of project.technologies; track tech.name) {
                    <li><i [class]="tech.icon" aria-hidden="true"></i>{{ tech.name }}</li>
                  }
                </ul>
              }

              @if (project.url || project.github) {
                <div class="case-links">
                  @if (project.url; as url) {
                    <app-icon-button icon="icon-external-link" [url]="url" [text]="t().actions.viewSite" />
                  }
                  @if (project.github; as github) {
                    <app-icon-button icon="devicon-github-original" [url]="github" [text]="t().actions.code" />
                  }
                </div>
              }
            </div>
          </article>
        }
      </div>

      <app-lightbox />
    </section>
  `,
})
export class Projects {
  readonly projects = input.required<Info[]>();
  protected readonly t = inject(LangService).t;
  private readonly lightbox = viewChild.required(Lightbox);

  protected zoom(project: Info, index: number): void {
    const images = project.images?.length ? project.images : project.image ? [project.image] : [];
    if (images.length) this.lightbox().open(images, project.title, index);
  }
}
