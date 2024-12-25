export interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const characters: Character[] = [
  {
    id: 'sneaky-panther',
    name: 'Sneaky Panther',
    image: '/images/1.png',
    description: 'Quick and strategic'
  },
  {
    id: 'mysterious-owl',
    name: 'Mysterious Owl',
    image: '/images/2.png',
    description: 'Wise and observant'
  },
  {
    id: 'excited-raccoon',
    name: 'Excited Raccoon',
    image: '/images/3.png',
    description: 'Energetic and curious'
  }
];