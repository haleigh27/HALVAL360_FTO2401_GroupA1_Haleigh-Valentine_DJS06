/* ############################################################################################## */
/* -----------------------------------------  Exercises  ---------------------------------------- */
/* ############################################################################################## */

console.log('Exercises');

/* ======= Exercises Data ======= */

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/* ============================================================================================== */

// Function to log a black line in console for better data readability.
const blank = () => console.log('');
blank();

/* ============================================================================================== */

/* E (1) - ForEach Basics
Use forEach method which iterates over the array, executing the relevant callback function passed into the method on every iteration.
*/

provinces.forEach((province) => console.log(province));
blank();

names.forEach((name) => console.log(name));
blank();

names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
});
blank();

/*------------------------------------------------------------------------------------------------*/

/* E (2) - Uppercase Transformation
Use map method to create a new array of the provinces with upper case letters.
*/

const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);

/*------------------------------------------------------------------------------------------------*/

/* E (3) - Name Lengths
Use map method to create a new array of the name lengths.
*/

const nameLenghts = names.map((name) => name.length);
console.log(nameLenghts);

/*------------------------------------------------------------------------------------------------*/

/* E (4) - Sorting Alphabetically
Use sort method which sorts the array alphabetically by default. 
*/

provinces.sort();
console.log(provinces);

/*------------------------------------------------------------------------------------------------*/

/* E (5) - Filtering out provinces with 'Cape'
- Use filter method on provinces array: loops through each string in the array and returns a new array of strings that meet the condition.
- Condition: String does not contain the word 'Cape'. (used includes method)
*/

const filteredProvinces = provinces.filter((province) => !province.includes('Cape'));
console.log(filteredProvinces.length);
//console.log(filteredProvinces);

/*------------------------------------------------------------------------------------------------*/

/* E (6) - Finding 'S'
Use map and some method to create a new array of boolean values based on whther the name contains an 's'.
- Convert string to lower case so capital 's' letters are identified.
- Use split method to change string into an array of individual letters.
- Use some method to loop through the array of letters and execute the callback function to check if the letter is an 's'. Returns true if the callback returns true for any of the letters and false otherwise.
*/

const findingS = names.map((name) => {
    return name
        .toLowerCase()
        .split('')
        .some((letter) => letter === 's');
});

console.log(findingS);

/*------------------------------------------------------------------------------------------------*/

/* E (7) - Creating Object Mapping
- Use the reduce method to iterate over the names array and transform the names array into an object mapping the names to their respective provinces.
- Create the namesProvincesReducer function which is passed into the reducer method.
- namesProvincesReducer creates a key-value pair in the accObject with the iterated name as the key and the corresponding province at the index in the provinces array.
*/

/**
 * Reducer callback function which returns an object with names as keys and provinces as values.
 *
 * @param {object} accObject - The object returned on the previous iteration or {} if first iteration.
 * @param {string} name - Current name iteration of the array.
 * @param {number} index - Array index of current iteration.
 * @returns {object} - accObject (accumulator object)
 */
const namesProvincesReducer = (accObject, name, index) => {
    accObject[name] = provinces[index];
    return accObject;
};

const namesAndProvinces = names.reduce(namesProvincesReducer, {});
console.log(namesAndProvinces);
blank();

/* ############################################################################################## */
/* ------------------------------------  Advanced Exercises  ------------------------------------ */
/* ############################################################################################## */

console.log('Advanced Exercises');
blank();

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

/* AE (1) - Log Products
- Use map to iterate over products array creating a new array of product property values.
- Join the products of the array into a single string, with each product separated by a newline character ('\n').
 */

console.log(products.map((product) => product.product).join('\n'));

/*------------------------------------------------------------------------------------------------*/

/* AE (2) - Filter by name length
- Use filter method on products array: loops through each object in the array and returns a new array of objects that meet the condition.
- Condition: String value of product property less than 6 characters.
*/

console.log(products.filter((product) => product.product.length < 6));

/*------------------------------------------------------------------------------------------------*/

/* AE (3) - Price Manipulation
- Filter: filter out products without prices (product where parseInt(product.price) returns NaN)
- Map: Create a new array of objects with all prices converted to numbers.
    - Use map method to iterate over array.
    - Use spread operator to expand current object.
    - target price property and change the current value to a number using parseInt().
- Reduce: Iterates through products array and returns sum of prices.
- Reducer callback function parameters include:
    - sum {number} - The sum returned on the previous iteration or 0 if first iteration.
    - product {object} - Current object from the array (object must have a price property).
- Initial value: 0
 */

// Log total price of products in products array by using the reduce method.
console.log(
    products
        .filter((product) => parseInt(product.price))
        .map((product) => ({ ...product, price: parseInt(product.price) }))
        .reduce((sum, product) => sum + product.price, 0)
);

/*------------------------------------------------------------------------------------------------*/

/* AE (4) - Concatenate Product Names
- Reduce: Iterate through products array and returns a concatenated string of all product names.
- Reducer callback function parameters include:
    - sum {number} - The string returned on the previous iteration or '' if first iteration.
    - product {object} - Current object from the array. (object must have a product property).
- Initial value: ''
*/

// String of all product names made with reduce method.
console.log(products.reduce((sum, product) => (sum ? sum + ' ' + product.product : product.product), ''));

/*------------------------------------------------------------------------------------------------*/

/* AE (5) - Find Extremes in Prices
- Create an immediately invoked function inside the console.log and add logic.
- Create a new minMaxArray consisting of the objects with the highest and lowest prices:
    - Filter and map method (as in advanced exercise 3) used to create an array containing only valid prices and convert them to numbers.
    - Reduce method passes each item (object) in the products array to the reducer callback funtion and returns an array of the product objects with the lowest (minMax[0]) and highest (minMax[1]) prices. (Done in this manner so the product name can be logged with the price later.)
    - Reducer callback function: 
        - sets minMax[0] to the object with the lowest price by comparing the price of the current object to the value stored in minMax[0] and resetting it to the lower of the two.
        - sets minMax[1] to the object with the highest price by comparing the price of the current object to the value stored in minMax[1] and resetting it to the higher of the two.
        - returns the new minMax array which is also used for the next iteration. 
    - initial value []
- Return string with highest and lowest prices from the minMaxArray
*/

// Logs the highest and lowest-priced items as a string formatted as "Highest: X. Lowest: Y"
console.log(
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

        return `Highest: R${minMaxArray[1].price} - ${minMaxArray[1].product}. Lowest: R${minMaxArray[0].price} - ${minMaxArray[0].product}`;
    })()
);

/*------------------------------------------------------------------------------------------------*/

/* AE (6) - Object Transformation
- Object.entries converts products array into an array of key(index)-value(object) pairs.
- Reduce method iterates over the array and passes each item (key(index)-value(object) pair) to the reducer callback funtion and returns a new array of objects.
- The reducer callback function creates a new transformed object with 'name' and 'cost' property keys instead of 'product' and 'price'. It then allocates the object to the original index in the array.
- Reducer callback function parameters include:
    - accArray {array}: Cumulative array of product objects returned by the callback function on the previous iteration or [] if first iteration.
    - [key, value] {array} - Current array iteration, destructured into the key(index) and value(object). Object must have product and price properties.
*/

// Logs array of product objects with name and cost keys.
console.log(
    Object.entries(products).reduce((accArray, [key, value]) => {
        accArray[key] = { name: value.product, cost: value.price };
        return accArray;
    }, [])
);

/*------------------------------------------------------------------------------------------------*/
