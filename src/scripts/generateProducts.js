import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts.js';
import { PATH_DB } from '../constants/products.js';
import * as ft from '../utils/fileTools.js';

const generateProducts = async (productsAmount = 5) => {
  const newProductsList = Array(productsAmount)
    .fill(null)
    .map(() => createFakeProduct());

  const oldProductsList = await ft.read(PATH_DB);

  oldProductsList.push(...newProductsList);
  await ft.write(PATH_DB, oldProductsList);
};

generateProducts(3);
