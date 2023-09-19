import { ILocInfo } from '../types';

export function GetTextLabel(label: string) {
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function FormatDisplayValue(value: string | number | object) {
  return Array.isArray(value) ? '[' + value.join() + ']' : (value as string);
}

export const locationsTestArray: ILocInfo[] = [
  {
    id: 1,
    name: 'Dragontail',
    type: 'village',
    population: 565,
    wealth: 11360,
    authority: 'constable',
    numGuards: 5,
    position: [83, 65],
  },
  {
    id: 2,
    name: 'Black Crystal',
    type: 'small town',
    population: 1385,
    wealth: 29842,
    authority: 'constable',
    numGuards: 13,
    position: [244, 141],
  },
];

export const infoBoxPosTestArray: number[] = [580, 0];
