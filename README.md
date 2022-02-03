# Proyecto final Ecommerce React - Coderhouse

## 1. Clonar repositorio 
`git clone`

## 2. Instalar depencias
`npm i`

## 3. Iniciar proyecto 
`npm start`

Entrar al link [http://localhost:3000](http://localhost:3000) para visualizar el proyecto.

## 4. Descripción del proyecto
En la página principal se está listando los productos y categorías totales, cuando se da
click en los cursos te dirigen a los detalles del curso; del mismo modo cuando se le
da click en las categorías te dirige a la página donde filtras los cursos por dicha
categoría.

También puedes elegir categorías por el Navbar.

Para el carrito de compras se usará useContext para los estados del cart.

### 4.1. API
Se está usando un api de productos sobre cursos online

`https://service.dened.org/api/courses/public?page=1&limit=8`

Se está usando un api para las categorías de los productos
`https://service.dened.org/api/categories`

### 4.2. Páginas
Creé el archivo pages donde están las páginas que se usará en el router de App.js
1. '/'  => IndexPage.jsx
2. '/productos' => ProductIndexPage.jsx
3. '/productos/:id' => ProductDetailsPage.jsx
4. '/categorias' => CategoryIndexPage.jsx
5. '/categorias/:id' => CategoryDetailsPage.jsx
6. '/contacto' => ContactoPage.jsx

### 4.3. UseContext
