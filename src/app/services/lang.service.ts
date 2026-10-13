import { Injectable, computed, signal } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';
import es from '../data/data.json';
import en from '../data/data.en.json';
import { Lang, UI, UiStrings } from '../data/ui';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(this.initial());

  /** Contenido del portafolio en el idioma activo. */
  readonly data = computed<Portfolio>(() => (this.lang() === 'es' ? (es as Portfolio) : (en as Portfolio)));

  /** Etiquetas de la interfaz en el idioma activo. */
  readonly t = computed<UiStrings>(() => UI[this.lang()]);

  constructor() {
    this.applyHtmlLang(this.lang());
  }

  toggle(): void {
    this.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    this.applyHtmlLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage no disponible */
    }
  }

  private initial(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') return saved;
      if (navigator.language?.toLowerCase().startsWith('en')) return 'en';
    } catch {
      /* ignorar */
    }
    return 'es';
  }

  private applyHtmlLang(lang: Lang): void {
    try {
      document.documentElement.lang = lang;
    } catch {
      /* ignorar */
    }
  }
}
