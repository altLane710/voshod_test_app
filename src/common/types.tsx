export interface ICarsList {
  result: number;
  page: number;
  pages: number;
  list: ICar[];
}

export interface ICar {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  image: string;
  tarif: string[];
}

export interface ICatalogImage {
  id: string;
  image: string;
}

export interface ICarDetail {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  images: ICatalogImage[];
  tarif: string[];
}

export interface IBrands {
  name: string;
  code: "brand";
  values: string[];
}

export interface IModels {
  name: string;
  type: "model";
  values: IBrandModels[];
}

export interface IBrandModels {
  brand: string;
  models: string[];
}

export interface ITariffs {
  name: string;
  type: "tarif";
  values: Record<string, string>;
}

export interface ITariffItem {
  [key: string]: number;
}

export interface ICatalogFilter {
  brands: IBrands;
  models: IModels;
  tarif: ITariffItem[];
}
