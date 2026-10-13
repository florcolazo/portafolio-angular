import { Component, input } from '@angular/core';
import { Media } from '../models/portfolio.model';
import { IconButton } from './icon-button';

@Component({
  selector: 'app-media',
  imports: [IconButton],
  template: `
    <div class="media">
      <app-icon-button icon="icon-mail" [url]="'mailto:' + data().email" [text]="data().email" [solid]="true" />
      <div class="row">
        @if (data().cv; as cv) {
          <app-icon-button icon="icon-file-text" [url]="cv" label="CV" />
        }
        @if (data().github; as github) {
          <app-icon-button icon="devicon-github-original" [url]="github" label="GitHub" />
        }
        @if (data().linkedin; as linkedin) {
          <app-icon-button icon="devicon-linkedin-plain" [url]="linkedin" label="LinkedIn" />
        }
      </div>
    </div>
  `,
})
export class MediaLinks {
  readonly data = input.required<Media>();
}
