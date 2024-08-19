import { IMaps, INativeName } from '../../../entities/country';

export const toNativeName = (nativeName: INativeName): { official: string; common: string } => {
  return nativeName[Object.keys(nativeName)[0]];
};

export const toStringMaps = (maps: IMaps): [string, string][] => {
  return Object.entries(maps);
};
