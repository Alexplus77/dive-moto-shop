export interface IProductItem {
  _id: string;
  name: string;
  category: string;
  path: string;
  sale: boolean;
  price: number;
  parameters?: Object;
  availability?: number;
  countStar?: number;
}
