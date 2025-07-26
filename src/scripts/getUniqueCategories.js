import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import * as ft from '../utils/fileTools.js';
export const getUniqueCategories = async () => {
  const productsList = await ft.read(PATH_DB);
  const categoriesDict = productsList.reduce((acc, el) => {
    if (!acc[el.category]) {
      acc[el.category] = true;
    }
    return acc;
  }, {});
  //   console.log(categoriesDict);
  //   console.log(productsList.length);
  return Object.keys(categoriesDict);
};

console.log(await getUniqueCategories());
