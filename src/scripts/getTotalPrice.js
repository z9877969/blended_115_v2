import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import * as ft from '../utils/fileTools.js';

export const getTotalPrice = async () => {
  const productsList = await ft.read(PATH_DB);
  return productsList.reduce((acc, el) => {
    const totalPrice = acc + Number(el.price);
    return totalPrice;
  }, 0);
};

console.log('Total price :', await getTotalPrice());
