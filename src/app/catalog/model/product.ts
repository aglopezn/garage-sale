export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  currentPrice?:number;
  originalPrice?:number;
  discount?: number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  galleriaImages?:string[];
  rating?:number;
  priority?:number;
}