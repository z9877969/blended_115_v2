## Задача 1

Створіть файл src/scripts/generateProducts.js.
В ньому опишіть функцію generateProducts. Вона має за допомогою функції createFakeProduct, створювати передану кількість згенерованих продуктів, а потім додавати їх до масиву у файлі src/db/db.json і записувати їх назад до файлу src/db/db.json.
Додайте до файлу package.json скрипт generate для виконання коду з файлу src/scripts/generateProducts.js.
Виконавши скрипт generate, переконайтесь, що ваша функція generateProducts коректно додає нові продукти до вже існуючих. Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість продуктів, наприклад 7. Якщо продуктів було 4 і у виклик передали 7, то після виклику функції їх має стати 11. У файлі src/db/db.json мають відбутися відповідні зміни.

## Задача 2

Створіть файл src/scripts/getProductsByMinPrice.js.
В ньому опишіть функцію getProductsByMinPrice. Вона має приймати параметром значення вартості і повертати масив продуктів із файлу src/db/db.json, вартість яких дорівнює або перевищує значення параметра функції. Додайте в цьому файлі логування результату виклику функції getProductsByMinPrice.
Додайте до файлу package.json скрипт get-products-by-min-price для виконання коду з файлу src/scripts/getProductsByMinPrice.js.
Виконавши скрипт get-products-by-min-price, переконайтесь, що ваша функція getProductsByMinPrice працює коректно.


## Задача 3

Створіть файл src/scripts/getTotalPrice.js.
В ньому опишіть функцію getTotalPrice. Вона має повертати загальну вартість продуктів в масиві у файлі src/db/db.json. Додайте в цьому файлі логування результату виклику функції getTotalPrice.
Додайте до файлу package.json скрипт get-total-price для виконання коду з файлу src/scripts/getTotalPrice.js.
Виконавши скрипт get-total-price, переконайтесь, що ваша функція getTotalPrice коректно рахує загальну вартість продуктів з масиву файлу.


## Задача 4

Створіть файл src/scripts/getUniqueCategories.js.
В ньому опишіть функцію getUniqueCategories. Вона має повертати масив унікальних категорій, які мають продукти в масиві у файлі src/db/db.json. Додайте в цьому файлі логування результату виклику функції getUniqueCategories.
Додайте до файлу package.json скрипт get-unique-categories для виконання коду з файлу src/scripts/getUniqueCategories.js.
Виконавши скрипт get-unique-categories, переконайтесь, що ваша функція getUniqueCategories коректно повертає унікальні категорії, які мають продукти в масиві у файлі src/db/db.json.


## Задача 5

Створіть файл src/scripts/modifyProducts.js.
В ньому опишіть функцію modifyProducts. Вона має перезаписувати вміст файлу src/db/db.json таким чином, щоб у файлі в результаті опинився перелік тих самих продуктів, але без поля description.
Додайте до файлу package.json скрипт modify-products для виконання коду з файлу src/scripts/modifyProducts.js.
Виконавши скрипт modify-products, переконайтесь, що ваша функція modifyProducts коректно перезаписує вміст файлу src/db/db.json.


## Задача 6

Створіть файл src/scripts/groupProductsByCategories.js.
В ньому опишіть функцію groupProductsByCategories. Вона має повертати об’єкт, в якому назви продуктів будуть згруповані за категоріями. В результаті виконання задачі ви повинні отримати об’єкт схожої структури:
{
   category1: [name1, name3, name5],
   category2: [name2, name7],
   category3: [name4, name6],
}

3. Додайте до файлу package.json скрипт group-products для виконання коду з файлу src/scripts/groupProductsByCategories.js.

4. Виконавши скрипт group-products, переконайтесь, що ваша функція group-products коректно групує назви продуктів за категоріями.



## Задача 7*

Створіть в папці db папку files
Створіть файл src/scripts/createProductsFiles.js.
В файлі src/constants/products.js оголосіть змінну PATH_FILES_DIR. Ініціалізуйте її значенням, яке буде зберігати шлях до папки files.
В файлі src/scripts/createProductsFiles.js опишіть функцію createProductsFiles. Вона має створювати в папці files таку кількість файлів, скільки продуктів є в масиві у файлі src/db/db.json. В кожному файлі має бути записаний об’єкт продукту. Назва кожного файлу повинна бути представлені у вигляді назви продукти (кожне слово через дефіс) з форматом json. Наприклад, luxurious-soft-soap.json
Додайте до файлу package.json скрипт create-products-files для виконання коду з файлу src/scripts/createProductsFiles.js.
Виконавши скрипт create-products-files, переконайтесь, що в папці files створились очікувані файли.