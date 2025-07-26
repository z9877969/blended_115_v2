import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import * as ft from '../utils/fileTools.js';

const getProductsByMinPrice = async (price) => {
  const productsList = await ft.read(PATH_DB);
  const priceStr = String(price);

  const filteredList = productsList.filter((el) => el.price >= priceStr);

  return filteredList;
};

console.table(await getProductsByMinPrice(500));
