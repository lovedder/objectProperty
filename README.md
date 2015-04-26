# objectProperty (Propiedad de un objeto)
Asigna y obtén propiedades de objetos de JavaScript

```js
let App = {};

let productName = ["product", "name"];

objectProperty(App, productName, "aguacate");
// App.product.name === "aguacate";

let product = objectProperty(App, productName);
// product === "aguacate";
```

# Instalación

```js
jspm install github:lovedder/objectProperty
```
