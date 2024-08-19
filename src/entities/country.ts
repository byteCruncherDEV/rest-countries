export interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface INativeName {
  [nativeName: string]: {
    official: string;
    common: string;
  };
}

export interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface ICountry {
  flags: IFlags;
  name: IName;
}

export interface IMaps {
  [nativeName: string]: string;
}

export interface ICountryExtended extends ICountry {
  capital: string[];
  maps: IMaps;
}
