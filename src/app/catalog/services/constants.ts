export const INVENTORY_STATUS = {
  available: {
    code: 'Disponible',
    class: 'instock'
  },
  unavailable: {
    code: 'Agotado',
    class: 'outofstock'
  },
}

export enum ConditionLevel {
  Good = '1',
  Regular = '2',
  Bad = '3',
}

export enum Availability {
  Available = 'Disponible',
  Unavailable = 'Agotado',
}

export const MESSAGES = {
  interestedInProduct: 'Hola. Me interesa el producto {productName} que tienes en venta.'
}

export const ROUTES = {
  contactPrefix: 'https://wa.me/573195485338?text=',
  defaultImg: 'assets/images/primeng.svg',
  imgPrefix: 'assets/images/product/compressed/',
}