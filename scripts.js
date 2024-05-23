//Exercises

// Data

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

// Function to log a black line in console for better data readability.
const blank = () => console.log('');

/*-----------------------------------------------------------------------------------------------*/

// Exercise 1 - forEach
console.log('Exercise 1 - forEach');
blank();

provinces.forEach((province) => console.log(province));
blank();

names.forEach((name) => console.log(name));
blank();

names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
});
blank();

/*-----------------------------------------------------------------------------------------------*/

// Exercise 2 - map
console.log('Exercise 2 - map');

/*
Use map method to create a new array of the provinces with upper case letters.
*/

const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 3 - map
console.log('Exercise 3 - map');

/*
Use map method to create a new array of the name lengths.
*/

const nameLenghts = names.map((name) => name.length);
console.log(nameLenghts);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 4 - sort
console.log('Exercise 4 - sort');

/*
Use sort method which sorts the array alphabetically by default. 
*/

provinces.sort();
console.log(provinces);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 5 - filter
console.log('Exercise 5 - filter');

/*
Use filter method on provinces array: loops through each string in the array and returns a new array of strings that meet the condition.
Condition: String does not contain the word 'Cape'. (used includes method)
*/

const filteredProvinces = provinces.filter((province) => !province.includes('Cape'));
console.log(filteredProvinces.length);
console.log(filteredProvinces);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 6 - map and some
console.log('Exercise 6 - map and some');

/*
Use map and some method to create a new array of boolean values based on whther the name contains an 's'
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
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 7 - reduce
console.log('Exercise 7 - reduce');

/* Logic:
- Used the reduce method to loop through the names array and execute the namesProvincesReducer callback function on each iteration, set initial state to an empty object. 
- Create the namesProvincesReducer function which is passed into the reducer method.
- Use Object.definePropery() to add a new property to the initial empty object (the accObject) and return a single new object 
*/

/**
 * Reducer callback function with returns an object with names as keys and provinces as values.
 *
 * @param {object} accObject - The object returned on the previous iteration or {} if first iteration.
 * @param {string} name - Current name iteration of the array.
 * @param {number} index - Array index of current iteration.
 * @returns {object}
 */
const namesProvincesReducer = (accObject, name, index) => {
    Object.defineProperty(accObject, name, { value: provinces[index] });
    return accObject;
};

const namesAndProvinces = names.reduce(namesProvincesReducer, {});
console.log(namesAndProvinces);
blank();

/*-----------------------------------------------------------------------------------------------*/
blank();
/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercises
console.log('Advanced Exercises');
blank();

//Advanced Exercises Data

// A list of products with prices:
const products = [
    { product: 'banana', price: '2' },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: '8' },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

/*-----------------------------------------------------------------------------------------------*/

/* Solution Logic applicable to all solutions using the reduce medthod:

- General
Reduce method has a parameter for a callback function and an initial value.

- Use the reduce method on the array. 
This passes each item in the array through the reducer callback function along with the total or accumulative value returned by the reducer callback function on the previous iteration.

- Set the initial value to be passed by the reducer method to: 
an empty array [] if the reducer is to return an array,
an empty string '' if the reducer is to return a string,
0 if the reducer is to return the sum of numbers

- Create the reducer callback function.
(see indivial exercises for details)

*/

/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercise 1 - Log Products
console.log('Advanced Exercise 1 - Log Products');

/*
 * Use forEach to iterate over products array and log each product property value to the console.
 */
products.forEach((product) => console.log(product.product));

blank();

/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercise 2 - Filter by name length
console.log('Advanced Exercise 2 - Filter by name length');

/*
Use filter method on products array: loops through each object in the array and returns a new array of objects that meet the condition.
Condition: String value of product property less than 6 characters.
*/

const productsWithShortNames = products.filter((product) => product.product.length < 6);

console.log(productsWithShortNames);

blank();

/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercise 3 - Price Manipulation
console.log('Advanced Exercise 3 - Price Manipulation');

// Filter out products without prices (parseInt(product.price) returns NaN)
const productsWithPrices = products.filter((products) => parseInt(products.price));

/* 
Create a new array of objects with all prices converted to numbers.
- Use map method to iterate over objects in productsWithPrices array.
- Use spread operator to expand current object.
- target price property and change the current value to a number using parseInt().
 */
const validProducts = productsWithPrices.map((product) => ({
    ...product,
    price: parseInt(product.price),
}));

/**
 * Reducer callback function which sums the product prices
 *
 * @param {number} sum - The number returned on the previous iteration or 0 if first iteration.
 * @param {object} product - Current object from the array (object must have a price property).
 * @returns {number}
 */
const sumPrices = (sum, product) => {
    return sum + product.price;
};

// Total price determined by using reduce method.
const totalPrice = validProducts.reduce(sumPrices, 0);

console.log(`Total price - R${totalPrice}`);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 4 - Concatenate Product Names
console.log('Advanced Exercise 4 - Concatenate Product Names');

/**
 * Reducer callback function which concatenates the product names and returns a single string.
 *
 * @param {string} sum - The string returned on the previous iteration or '' if first iteration.
 * @param {object} product - Current object from the array. (object must have a product property).
 * @returns {string} - The concatenated string. Also used for next iteration.
 */
const concatenateProductNames = (sum, product) => {
    return sum ? sum + ' ' + product.product : product.product;
};

// String of all product names made with reduce method.
const productNameString = products.reduce(concatenateProductNames, '');

console.log(productNameString);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 5 - Find Extremes in Prices
console.log('Advanced Exercise 5 - Find Extremes in Prices');

/* Logic for the reducer callback function: minMaxReducer

Create a new array consisting of the objects with the highest and lowest prices:
  - set minMax[0] to the object with the lowest price by comparing the price of the current object to the value stored in minMax[0] and resetting it to the lower of the two.
  - set minMax[1] to the object with the highest price by comparing the price of the current object to the value stored in minMax[1] and resetting it to the higher of the two.
  - return the new minMax array which is also used for the next iteration. 
*/

/**
 * Reducer callback function which returns an array of the product objects with the lowest (minMax[0]) and highest (minMax[1]) prices.
 *
 * @param {array} minMax - Array of product objects with the highest and lowest price returned by the function on the previous iteration. (initial = [])
 * @param {object} current - The current iteration object.
 * @returns {array} - The new array of product objects.
 */
const minMaxReducer = (minMax, current) => {
    minMax[0] = minMax[0] === undefined || current.price < minMax[0].price ? current : minMax[0];
    minMax[1] = minMax[1] === undefined || current.price > minMax[1].price ? current : minMax[1];
    return minMax;
};

/* Use the reduce method which passes each item (object) in the validProducts array to the reducer callback funtion. */

// Array of the objects with the lowest and highest price in the valid products array.
const minMaxArray = validProducts.reduce(minMaxReducer, []);

console.log(`
  Highest Price - ${minMaxArray[1].product}: R${minMaxArray[1].price},
  Lowest Price - ${minMaxArray[0].product}: R${minMaxArray[0].price}
`);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 6 - Object Transformation
console.log('Advanced Exercise 6 - Object Transformation');

/* Logic for the reducer callback function: reducer

Create a new item (Object) by:
  - declaring a newProduct variable, set to an empty object.
  - destructuring the current item (product) into key and value with Object.entries,
  - then replacing all the product keys with name and all the price keys with cost,
  - setting the keys to their original values. 

 Push the new item (object) to the total (array) which is returned and thus used as the acculative value (first parameter) for the next iteration.
*/

/**
 * Reducer callback function - transforms object and pushes it to the total (array).
 *
 * @param {array} total - Cumulative array of product objects returned by the function on the previous iteration. (initial = [])
 * @param {object} product - The current iteration object.
 * @returns {array} - The new cumulative array of product objects.
 */
const reducer = (total, product) => {
    let newProduct = {};

    for (const [key, value] of Object.entries(product)) {
        if (key === 'product') {
            newProduct.name = value;
        } else if (key === 'price') {
            newProduct.cost = value;
        }
    }
    total.push(newProduct);
    return total;
};

/* Use the reduce method which passes each item (object) in the products array to the reducer callback funtion. */

// newArray of product objects with name and cost keys.
const newArray = products.reduce(reducer, []);

console.log(newArray);

blank();

/*-----------------------------------------------------------------------------------------------*/
