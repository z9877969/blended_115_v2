import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const createFakeProduct = () => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
  };
};
