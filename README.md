# dtt-test-typescript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project explanation
This project was made as a entry test for an internship at D-TT.

This project uses a dummy e-commerce API. (https://dummyproducts-api.herokuapp.com/)
###Home
This is the landing page. Here ten random products are retrieved from the API, you can click on the price to get 
redirected to their detailed view. Within Home you can filter on department and search on product name, or both.
Be aware since it only retrieves ten entries that some departments can be empty.
###Randomizer
This page shows a random product and button to select a new random product. Clicking the price will redirect you to
their detailed page,
###Details
This page shows more info regarding the product and retrieves similar products regarding the selected product.


