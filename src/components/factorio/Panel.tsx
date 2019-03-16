export interface IMachine {
  name: string;
  power: number;
  checked?: boolean;
}
export interface IProduct {
  name: string;
  recipes: Array<string>;
  checkedIn?: boolean;
  checkedOut?: boolean;
  isEditing?: boolean;
}
export interface IRecipeIO {
  name: string;
  quantity: number;
}
export interface IRecipe {
  name: string;
  time: number;
  in: Array<IRecipeIO>;
  out: Array<IRecipeIO>;
  machines: Array<IMachine>;
  isEditing?: boolean;
}
export interface IDict {
  machines: Record<string, IMachine>;
  products: Record<string, IProduct>;
  recipes: Record<string, IRecipe>;
}
export const initialRecipe: IRecipe = {
  name: '',
  time: 1,
  in: [],
  out: [],
  machines: [],
};
export const initialMachine: IMachine = {
  name: '',
  power: 1,
  checked: false,
};
export const initialProduct: IProduct = {
  name: '',
  recipes: [],
  checkedIn: false,
  checkedOut: false,
};

export default () => {};
