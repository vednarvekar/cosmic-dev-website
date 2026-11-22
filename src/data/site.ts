// Site-wide content: who Ved is, where to find him, and the off-the-clock stuff.
// Search the repo for TODO(ved) to find details only Ved can fill in.

export const site = {
  url: 'https://vednarvekar.com',
  name: 'Ved Narvekar',
  title: "Ved's Universe · Ved Narvekar",
  role: 'Backend & AI Engineer',
  description:
    'Ved Narvekar is a backend & AI engineer from India building APIs, job queues, RAG pipelines and LLM evals. Explore his projects, stack and story.',
  location: 'India',
};

export const links = {
  github: 'https://github.com/vednarvekar',
  linkedin: 'https://www.linkedin.com/in/ved-narvekar/',
  x: 'https://x.com/VedNarvekar',
  resume: '/resume.pdf',
  email: '', // TODO(ved): add your email to show an email link
};

export type Driver = {
  name: string;
  number: string;
  team: string;
  color: string; // team-ish colour for the card, no official logos
  front: string; // handwritten line on the front
  back: string; // why Ved likes them, shown when the card flips
};

// TODO(ved): rewrite the front/back lines in your own words.
export const drivers: Driver[] = [
  {
    name: 'Max Verstappen',
    number: '3',
    team: 'Red Bull Racing',
    color: '#1b2a6b',
    front: 'Max mode: on',
    back: 'Relentless. Wins from anywhere on the grid and never lifts.',
  },
  {
    name: 'Lewis Hamilton',
    number: '44',
    team: 'Ferrari',
    color: '#c8102e',
    front: 'the GOAT',
    back: 'Seven titles, still chasing the eighth. Class on and off the track.',
  },
  {
    name: 'Oscar Piastri',
    number: '81',
    team: 'McLaren',
    color: '#ff8000',
    front: 'ice cold',
    back: 'Calm under pressure, fast from day one. One to watch.',
  },
];

export const f1 = {
  team: 'Red Bull Racing',
  fanSince: '', // TODO(ved): e.g. '2019'
  favouriteMoment: '', // TODO(ved): e.g. 'Abu Dhabi 2021, last lap'
};

export const rides = {
  bike: '', // TODO(ved): e.g. 'Royal Enfield Classic 350' (or leave empty)
  favouriteRoute: '', // TODO(ved): e.g. 'Mumbai → Lonavala'
  kmLogged: '', // TODO(ved): e.g. '4,200'
  notes: ['weekend rides > weekday bugs', 'best debugging tool: a long ride'],
};
