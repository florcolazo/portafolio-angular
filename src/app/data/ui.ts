export type Lang = 'es' | 'en';

export interface UiStrings {
  nav: { about: string; process: string; projects: string; contact: string };
  sections: {
    about: string;
    tech: string;
    experience: string;
    projects: string;
    training: string;
    extras: string;
    process: string;
  };
  eyebrows: { about: string; projects: string; process: string; experience: string; tech: string; training: string };
  projects: { lead: string; challenge: string; whatIDid: string; zoom: string };
  processLead: string;
  actions: {
    viewProjects: string;
    contact: string;
    viewSite: string;
    code: string;
    viewProject: string;
    certificate: string;
    downloadCv: string;
    close: string;
    prev: string;
    next: string;
  };
  contact: { eyebrow: string; title: string; text: string };
  toggleLabel: string;
}

export const UI: Record<Lang, UiStrings> = {
  es: {
    nav: { about: 'Sobre mí', process: 'Cómo trabajo', projects: 'Proyectos', contact: 'Contacto' },
    sections: {
      about: 'Sobre mí',
      tech: 'Tecnologías',
      experience: 'Experiencia',
      projects: 'Proyectos',
      training: 'Formación',
      extras: 'Extra',
      process: 'Cómo trabajo',
    },
    eyebrows: { about: 'Quién soy', projects: 'Casos reales', process: 'Proceso', experience: 'Trayectoria', tech: 'Herramientas', training: 'Estudios' },
    projects: {
      lead: 'Sistemas que diseñé y desarrollé de punta a punta. La mayoría los usa un equipo real todos los días.',
      challenge: 'El desafío',
      whatIDid: 'Qué construí',
      zoom: 'Ampliar imagen',
    },
    processLead: 'Mi formación de analista hace la diferencia: primero entiendo, después programo.',
    actions: {
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      viewSite: 'Ver sitio',
      code: 'Código',
      viewProject: 'Ver proyecto',
      certificate: 'Certificado',
      downloadCv: 'Descargar CV',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Tenés un proyecto o un puesto en mente?',
      text: 'Estoy disponible para nuevos proyectos y oportunidades laborales. Contame qué necesitás y te respondo en el día.',
    },
    toggleLabel: 'EN',
  },
  en: {
    nav: { about: 'About', process: 'How I work', projects: 'Projects', contact: 'Contact' },
    sections: {
      about: 'About',
      tech: 'Technologies',
      experience: 'Experience',
      projects: 'Projects',
      training: 'Education',
      extras: 'More',
      process: 'How I work',
    },
    eyebrows: { about: 'Who I am', projects: 'Real cases', process: 'Process', experience: 'Career', tech: 'Toolbox', training: 'Studies' },
    projects: {
      lead: 'Systems I designed and built end to end. Most of them are used by a real team every day.',
      challenge: 'The challenge',
      whatIDid: 'What I built',
      zoom: 'Enlarge image',
    },
    processLead: 'My analyst background makes the difference: first I understand, then I code.',
    actions: {
      viewProjects: 'View projects',
      contact: 'Contact',
      viewSite: 'View site',
      code: 'Code',
      viewProject: 'View project',
      certificate: 'Certificate',
      downloadCv: 'Download CV',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have a project or a role in mind?',
      text: "I'm available for new projects and job opportunities. Tell me what you need and I'll get back to you the same day.",
    },
    toggleLabel: 'ES',
  },
};
