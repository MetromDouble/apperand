import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';

import { ProductRow } from './factorio/ProductRow';

import { TREE } from './recipes';

interface IMachine {
  name: string;
  power: number;
  checked?: boolean;
  isError?: boolean;
}
interface IProduct {
  name: string;
  recipes: Array<string>;
  checkedIn?: boolean;
  checkedOut?: boolean;
  isError?: boolean;
}
interface IRecipeIO {
  name: string;
  quantity: number;
}
interface IRecipe {
  name: string;
  time: number;
  in: Array<IRecipeIO>;
  out: Array<IRecipeIO>;
  machines: Array<IMachine>;
  isEditing?: boolean;
  isError?: boolean;
}
interface IDict {
  machines: Record<string, IMachine>;
  products: Record<string, IProduct>;
  recipes: Record<string, IRecipe>;
}

const DICT: IDict = {
  machines: {},
  products: {},
  recipes: {},
};
const initialRecipe: IRecipe = {
  name: '',
  time: 1,
  in: [],
  out: [],
  machines: [],
};
const initialMachine: IMachine = {
  name: '',
  power: 1,
  checked: false,
};
const initialProduct: IProduct = {
  name: '',
  recipes: [],
  checkedIn: false,
  checkedOut: false,
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 32px 1fr 1fr;
  grid-template-columns: 1fr 1fr 2fr;
`;

interface IThingProps {
  selected?: boolean;
}
const Thing = styled.div<IThingProps>`
  display: block;
  background: ${({selected}) => selected ? '#ddd' : '#eee'};
  display: flex;
  margin: 4px;
  &:hover {
    background: #ddd;
    cursor: default;
  }
`;

const Recipe = styled.div`
  display: block;
  background: #eee;
  padding: 4px 10px;
  margin: 4px;
`;

const RecipePanel = styled.div`
  display: block;
  background: #eee;
  padding: 4px 10px;
  margin: 4px;
`;

export const FactorioRecipes = () => {
  const [dict, setDict] = useState({
    machines: {},
    products: TREE.C,
    recipes: {},
  } as IDict);
  const [state, setState] = useState({
    recipe: initialRecipe,
    machine: initialMachine,
    product: initialProduct,
  } as {
    recipe: IRecipe;
    machine: IMachine;
    product: IProduct;
  });

  console.log('DICT', dict);

  const createRecipe = () => {
    if (!Object.keys(dict.recipes).find(item => item === state.recipe.name)) {
      let updatedProducts = {};

      state.recipe.out.forEach(recipeIO => {
        const product = dict.products[recipeIO.name];

        if (product && !product.recipes.find(name => name === state.recipe.name)) {
          updatedProducts = {
            ...updatedProducts,
            [product.name]: {
              ...product,
              recipes: product.recipes.concat(state.recipe.name)
            }
          }
        }
      });
      setDict({
        ...dict,
        recipes: {
          ...dict.recipes,
          [state.recipe.name]: state.recipe,
        },
        products: {
          ...dict.products,
          ...updatedProducts,
        }
      });
      setState({
        ...state,
        recipe: initialRecipe,
      });
    } else {
      setState({
        ...state,
        recipe: {
          ...initialRecipe,
          isError: true,
        }
      });
    }
  };
  const updateProduct = (name?: string) => (product?: IProduct) => {
    console.log('####', product);
    const updatedProducts: Record<string, IProduct> = {};

    Object.keys(dict.products).forEach(item => {
      if (item !== (product && product.name) && item !== name) updatedProducts[item] = dict.products[item];
    });
    if (product && product.name) {
      updatedProducts[product.name] = product;
    }
    setDict({
      ...dict,
      products: {
        ...updatedProducts,
      }
    });
    setState({
      ...state,
      product: initialProduct,
    });
  };

  return (
    <Container>
      <div style={{ gridArea: '1 / 1 / 2 / 2' }}>
        <ProductRow product={initialProduct} creative onUpdate={updateProduct()} />
      </div>
      <div style={{ gridArea: '1 / 2 / 2 / 3' }}>

      </div>
      <div style={{ gridArea: '2 / 1 / 4 / 2', overflowY: 'scroll' }}>
        {Object.keys(dict.products).sort().map(name => (
          <Thing key={name}>
            <ProductRow product={dict.products[name]} onUpdate={updateProduct(name)} />
          </Thing>
        ))}
      </div>
      <div style={{ gridArea: '2 / 2 / 4 / 3', overflowY: 'scroll' }}>
        {Object.keys(TREE.R).sort().map(name => (
          <Thing key={name}>
            {name}
          </Thing>
        ))}
      </div>
      <div style={{ gridArea: '1 / 3 / 3 / 4', overflowY: 'scroll' }}>
        {Object.keys(TREE.R).sort().map(name => (
          <Thing key={name}>
            {name}
          </Thing>
        ))}
      </div>
      <div style={{ gridArea: '3 / 3 / 4 / 4', overflowY: 'scroll' }}>
        {Object.keys(TREE.R).sort().map(name => (
          <Thing key={name}>
            {name}
          </Thing>
        ))}
      </div>
    </Container>
  );
};
