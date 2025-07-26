import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import * as ft from '../utils/fileTools.js';
//Створіть файл src/scripts/modifyProducts.js.
// В ньому опишіть функцію modifyProducts. Вона має перезаписувати вміст файлу src/db/db.json таким чином, щоб у файлі в результаті опинився перелік тих самих продуктів, але без поля description.
export const modifyProducts = async () => {
  const productsList = await ft.read(PATH_DB);
  const modifiedProductsList = productsList.map(
    ({ description, ...rest }) => rest,
  );
  //   return modifiedProductsList;
  await ft.write(PATH_DB, modifiedProductsList);
};
// console.log(await modifyProducts());

modifyProducts();
