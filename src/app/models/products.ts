export interface IProducts {
  id: number,
  title: string,
  price: number,
  year: string,
  image?: string,
  configure: IProductsConfig;
  quantity: number;
}

export interface IProductsConfig {
  mileage: string,
  owner: string,
  color: string,
  class: string,
}
