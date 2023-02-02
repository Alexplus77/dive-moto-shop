export interface IProductItem {
  name: string;
  category?: string;
  path: string;
  sale: boolean;
  price: number;
  parameters?: Object;
  availability?: number;
  countStar?: number;
}
