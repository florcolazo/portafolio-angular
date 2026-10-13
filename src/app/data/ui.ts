export type Lang = 'es' | 'en';

export interface UiStrings {
  nav: { about: string; stack: string; projects: string; contact: string };
  sections: {
    about: string;
    tech: string;
    experience: string;
    projects: string;
    training: string;
    extras: string;
  };
  actions: {
    viewProjects: string;
    contact: string;
    viewSite: string;
    code: string;
    viewProject: string;
    certificate: string;
  };
  contact: { eyebrow: string; title: string; text: string };
  toggleLabel: string;
}

export const UI: Record<Lang, UiStrings> = {
  es: {
    nav: { about: 'Sobre mí', stack: 'Stack', projects: 'Proyectos', contact: 'Contacto' },
    sections: {
      about: 'Sobre mí',
      tech: 'Tecnologías',
      experience: 'Experiencia',
      projects: 'Proyectos',
      training: 'Formación',
      extras: 'Extra',
    },
    actions: {
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      viewSite: 'Ver sitio',
      code: 'Código',
      viewProject: 'Ver proyecto',
      certificate: 'Certificado',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Tenés un proyecto en mente?',
      text: 'Estoy abierta a nuevas oportunidades y colaboraciones. Escribime y lo charlamos.',
    },
    toggleLabel: 'EN',
  },
  en: {
    nav: { about: 'About', stack: 'Stack', projects: 'Projects', contact: 'Contact' },
    sections: {
      about: 'About',
      tech: 'Technologies',
      experience: 'Experience',
      projects: 'Projects',
      training: 'Education',
      extras: 'More',
    },
    actions: {
      viewProjects: 'View projects',
      contact: 'Contact',
      viewSite: 'View site',
      code: 'Code',
      viewProject: 'View project',
      certificate: 'Certificate',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have a project in mind?',
      text: "I'm open to new opportunities and collaborations. Drop me a line and let's talk.",
    },
    toggleLabel: 'ES',
  },
};
