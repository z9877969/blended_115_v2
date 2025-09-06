# redocly-cli-plugin-remove-example-schemas
Плагін допомогає взаємодіяти з полями схеми, що описують правила валідації документації swagger.
Після білда документу, він створює групу схем `components/examples`, які можна підключати через `$ref` та перевикористовувати їх для опису схем з однотипними полями.

## Інсталяція
```sh
npm i redocly-cli-plugin-remove-example-schemas --save-dev
```
## Застосування
```
# redocly.yaml
plugins:
  - redocly-cli-plugin-remove-example-schemas
decorators:
  # Активуємо наш декоратор за його ID
  'remove-example-schemas/post-bundle': on
```
```
# swagger/components/examples/inctance_1/inctance1_name.yaml
type: string
maxLength: 12
example: some name


# swagger/components/examples/inctance_2/inctance2_type.yaml
type: string
enum:
  - on
  - off
example: on
```
```
# swagger/path/instance/get.yaml
responses:
  '200':
    description: 'Successful operation'
    content:
      application/json:
        schema:
          type: object
          description: Instance 
          properties:
            name: 
              $ref: ../../components/examples/inctance1/inctance1_name.yaml
            type: 
              $ref: ../../components/examples/inctance2/inctance2_type.yaml
```
## Build
> Після коректного підключення всіх файлів з `examples` в схему через `$ref` 
> потрібно збілдити документацію