import { MESSAGES, ROUTES } from "./constants";
import { Product } from "../model/product";

export class Utils {

  static getContactLink(product: Product) {
    const message =  MESSAGES.interestedInProduct.replace('{productName}', product.name);
    const encoded = encodeURIComponent(message);
    return `${ROUTES.contactPrefix}${encoded}`;
  }

  static getImageSrc(imageName: string)  {
    if (!imageName) return ROUTES.defaultImg;
    return `${ROUTES.imgPrefix}${imageName}`;
  }

}