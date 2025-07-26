import fs from 'node:fs/promises';

export const read = async (filePath) => {
  const productsJson = await fs.readFile(filePath, 'utf-8');
  const productsList = JSON.parse(productsJson);
  return productsList;
};

export const write = (filePath, data) => {
  return fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
