export interface Media {
  email: string;
  cv?: string;
  github?: string;
  linkedin?: string;
}

export interface Technology {
  icon: string;
  name: string;
}

export interface Info {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  certificate?: string;
  technologies?: Technology[];
  image?: string;
  /** Varias capturas: se muestran en carrusel (tiene prioridad sobre `image`). */
  images?: string[];
  url?: string;
  github?: string;
  /** Proyectos: estado ("En uso", "Proyecto académico"…). */
  status?: string;
  /** Proyectos: el problema que resolvía. */
  problem?: string;
  /** Proyectos: qué hice, en viñetas. */
  highlights?: string[];
}

export interface ProcessStep {
  icon: string;
  title: string;
  text: string;
}

export interface Extra {
  image: string;
  title: string;
  description: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Portfolio {
  title: string;
  description: string;
  image: string;
  avatar: string;
  name: string;
  skill: string;
  /** Titular del inicio; el texto entre *asteriscos* va resaltado. */
  headline?: string;
  tagline?: string;
  /** Cartel de disponibilidad en el inicio (vacío = no se muestra). */
  available?: string;
  /** Etiquetas flotantes junto a la foto. */
  badges?: string[];
  location: string;
  media: Media;
  about: string;
  /** Foto grande en "Sobre mí". */
  photo?: { src: string; alt: string; caption?: string };
  stats?: Stat[];
  process?: ProcessStep[];
  technologies: Technology[];
  experience: Info[];
  projects: Info[];
  training: Info[];
  extras: Extra[];
}
