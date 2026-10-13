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
  url?: string;
  github?: string;
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
  tagline?: string;
  location: string;
  media: Media;
  about: string;
  stats?: Stat[];
  technologies: Technology[];
  experience: Info[];
  projects: Info[];
  training: Info[];
  extras: Extra[];
}
