import { Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Contact } from './components/contact';
import { Extras } from './components/extras';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { InfoSection } from './components/info-section';
import { Nav } from './components/nav';
import { Projects } from './components/projects';
import { TechStack } from './components/tech-stack';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  imports: [Nav, Header, TechStack, InfoSection, Projects, Extras, Contact, Footer],
  templateUrl: './app.html',
})
export class App {
  private readonly lang = inject(LangService);
  protected readonly data = this.lang.data;
  protected readonly t = this.lang.t;

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);
    effect(() => {
      const d = this.data();
      title.setTitle(d.title);
      meta.updateTag({ name: 'description', content: d.description });
      meta.updateTag({ property: 'og:title', content: d.title });
      meta.updateTag({ property: 'og:description', content: d.description });
      meta.updateTag({ property: 'og:image', content: d.image });
    });
  }
}
