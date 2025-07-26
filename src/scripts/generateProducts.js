import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts.js';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (productsAmount = 5) => {
  const newProductsList = Array(productsAmount)
    .fill(null)
    .map(() => createFakeProduct());

  const productsJson = await fs.readFile(PATH_DB, 'utf-8');
  const oldProductsList = JSON.parse(productsJson);

  oldProductsList.push(...newProductsList);
  await fs.writeFile(PATH_DB, JSON.stringify(oldProductsList, null, 2));
};

generateProducts(3);
