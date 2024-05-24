/*
This file was added because I was confused by the ambiguity in the following instruction for the advanced exercises:

"For these exercises, wrap your logic in a single console.log statement:"

- In scripts.js, I interpreted this by adding the logic for each exercise into a separate console.log statement, resulting in six different logs.
- In this file, I copied the exact code for the advanced examples from scripts.js and wrapped all of it in one console.log(), removing the original 6. I removed the lengthy comments detailing my approach and just added a line or two about what the code does. (Please see scripts.js for a detailed explanation.)
- To log the results from this file to the console, please add the script tag to the index.html file.
        <script src="AE-SingleCL.js" type="module" defer></script>
*/

/* ############################################################################################## */
/* ------------------------------------  Advanced Exercises  ------------------------------------ */
/* ############################################################################################## */

console.log('Advanced Exercises - AESingleCL.js');

/* ======= Advanced Exercises Data ======= */

// A list of products with prices:
const products = [
    { product: 'banana', price: '2' },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: '8' },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

/* ============================================================================================== */

/* ======= Advanced Exercises Solutions ======= */

console.log(
    // AE (1) - Log Products
    // Creates a new array of product names and joins the names in the array, with each name on a new line.
    products.map((product) => product.product).join('\n'),

    // AE (2) - Filter by name length
    // Creates new array that only contain objects whose product property value is less than 6 characters long.
    products.filter((product) => product.product.length < 6),

    // AE (3) - Price Manipulation
    // Calculates the total price of products in products array by using the filter, map and reduce method.
    products
        .filter((product) => parseInt(product.price))
        .map((product) => ({ ...product, price: parseInt(product.price) }))
        .reduce((sum, product) => sum + product.price, 0),

    // AE (4) - Concatenate Product Names
    // Creates a string of all product names made with reduce method.
    products.reduce((sum, product) => (sum ? sum + ' ' + product.product : product.product), ''),

    // AE (5) - Find Extremes in Prices
    // Creates a string of the highest and lowest-priced items formatted as "Highest: X. Lowest: Y"
    (() => {
        /**
         * Reducer callback function which returns an array of objects with the lowest (minMax[0]) and highest (minMax[1]) prices.
         *
         * @param {array} minMax - Array of objects with the highest and lowest price returned by the function on the previous iteration. (initial = [])
         * @param {object} current - The current iteration object.
         * @returns {array} - The new array of product objects.
         */
        const minMaxReducer = (minMax, current) => {
            minMax[0] = minMax[0] === undefined || current.price < minMax[0].price ? current : minMax[0];
            minMax[1] = minMax[1] === undefined || current.price > minMax[1].price ? current : minMax[1];
            return minMax;
        };

        // minMaxArray consisting of the objects with the highest and lowest prices
        const minMaxArray = products
            .filter((product) => parseInt(product.price))
            .map((product) => ({ ...product, price: parseInt(product.price) }))
            .reduce(minMaxReducer, []);

        // Returns string of highest and lowest price and the associated product.
        return `Highest: R${minMaxArray[1].price} - ${minMaxArray[1].product}. Lowest: R${minMaxArray[0].price} - ${minMaxArray[0].product}`;
    })(),

    // AE (6) - Object Transformation
    // Creates an array of product objects with name and cost keys using the existing products array.
    Object.entries(products).reduce((accArray, [key, value]) => {
        accArray[key] = { name: value.product, cost: value.price };
        return accArray;
    }, [])
);

/*------------------------------------------------------------------------------------------------*/
