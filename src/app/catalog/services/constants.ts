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