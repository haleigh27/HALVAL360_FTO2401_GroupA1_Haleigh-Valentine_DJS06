//Exercises

// Data

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/

// Function to log a black line in console for better data readability.
const blank = () => console.log('');

/*--------------------------------------------------------------------------------------------------------------------*/

// Exercise 1 - forEach
console.log('Exercise 1 - forEach');
blank();

/*
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

/*--------------------------------------------------------------------------------------------------------------------*/

// Exercise 2 - map
console.log('Exercise 2 - map');

/*
Use map method to create a new array of the provinces with upper case letters.
*/

const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);
blank();

/*--------------------------------------------------------------------------------------------------------------------*/

//Exercise 3 - map
console.log('Exercise 3 - map');

/*
Use map method to create a new array of the name lengths.
*/

const nameLenghts = names.map((name) => name.length);
console.log(nameLenghts);
blank();

/*--------------------------------------------------------------------------------------------------------------------*/

//Exercise 4 - sort
console.log('Exercise 4 - sort');

/*
Use sort method which sorts the array alphabetically by default. 
*/

provinces.sort();
console.log(provinces);
blank();

/*--------------------------------------------------------------------------------------------------------------------*/

//Exercise 5 - filter
console.log('Exercise 5 - filter');

/*
Use filter method on provinces array: loops through each string in the array and returns a new array of strings that meet the condition.
Condition: String does not contain the word 'Cape'. (used includes method)
*/

const filteredProvinces = provinces.filter((province) => !province.includes('Cape'));
console.log(filteredProvinces.length);
//console.log(filteredProvinces);
blank();

/*--------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------*/
blank();
/*--------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------*/

//Advanced Exercise 1 - Log Products
console.log('Advanced Exercise 1 - Log Products');

/* Advanced Exercise 1 problem
Log Products: Iterate over the products array, logging each product name.
*/

/*
Solution Logic: 
 
Use map to iterate over products array creating a new array of product property values.
Join the products of the array into a single string, with each product separated by a newline character (\n).
 */

console.log(products.map((product) => product.product).join('\n'));

blank();

/*--------------------------------------------------------------------------------------------------------------------*/

//Advanced Exercise 2 - Filter by name length
console.log('Advanced Exercise 2 - Filter by name length');

/* Advanced Exercise 2 problem
Filter by Name Length: Filter out products with names longer than 5 characters.
*/

/*
Solution Logic: 

Use filter method on products array: loops through each object in the array and returns a new array of objects that meet the condition.
Condition: String value of product property less than 6 characters.
*/

console.log(products.filter((product) => product.product.length < 6));

blank();

/*--------------------------------------------------------------------------------------------------------------------*/

//Advanced Exercise 3 - Price Manipulation
console.log('Advanced Exercise 3 - Price Manipulation');

/* Advanced Exercise 3 problem
Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
*/

/* 
Solution Logic: 

* Filter: filter out products without prices (product where parseInt(product.price) returns NaN)

* Map: Creates a new array of objects with all prices converted to numbers.
    - Use map method to iterate over array.
    - Use spread operator to expand current object.
    - target price property and change the current value to a number using parseInt().

* Reduce: Iterates through products array and returns a single value.
- Reducer callback function:
    -parameters:
        - sum {number} - The sum returned on the previous iteration or 0 if first iteration.
        - product {object} - Current object from the array (object must have a price property).
    - returns single cumulative value. The sum of the prices. Also used for next iteration.
    - Initial value: 0
 */

// Log total price of products in products array by using the reduce method.
console.log(
    'Total price - R' +
        products
            .filter((product) => parseInt(product.price))
            .map((product) => ({ ...product, price: parseInt(product.price) }))
            .reduce((sum, product) => sum + product.price, 0)
);

blank();

/*--------------------------------------------------------------------------------------------------------------------*/

// Advanced Exercise 4 - Concatenate Product Names
console.log('Advanced Exercise 4 - Concatenate Product Names');

/* Advanced Exercise 4 problem
Concatenate Product Names: Use `reduce` to concatenate all product names into a single string.
*/

/* 
Solution Logic:

* Reduce: Iterates through products array and returns a single value.
- Reducer callback function:
    -parameters:
        - sum {number} - The string returned on the previous iteration or '' if first iteration.
        - product {object} - Current object from the array. (object must have a product property).
    - returns single cumulative value. The concatenated string. Also used for next iteration.
- Initial value: ''
*/

// String of all product names made with reduce method.
console.log(products.reduce((sum, product) => (sum ? sum + ' ' + product.product : product.product), ''));

blank();

/*--------------------------------------------------------------------------------------------------------------------*/

// Advanced Exercise 5 - Find Extremes in Prices
console.log('Advanced Exercise 5 - Find Extremes in Prices');

/* Advanced Exercise 5 problem
Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
*/

/* 
Solution Logic:

* Create a immediately invoked function inside the console.log and add logic.
  * Create a new minMaxArray consisting of the objects with the highest and lowest prices:
    * Filter and map method (as done in exercise 3) used to create an array containing only valid prices and convert them to numbers
    * Reduce method passes each item (object) in the products array to the reducer callback funtion and returns an array of the product objects with the lowest (minMax[0]) and highest (minMax[1]) prices.
    - Reducer callback function: 

    -parameters:
        - minMax {array} - Array of product objects with the highest and lowest price returned by the function on the previous iteration. 
        - current {object} - The current iteration object.
    -logic:
        - set minMax[0] to the object with the lowest price by comparing the price of the current object to the value stored in minMax[0] and resetting it to the lower of the two.
        - set minMax[1] to the object with the highest price by comparing the price of the current object to the value stored in minMax[1] and resetting it to the higher of the two.
        - returns the new minMax array which is also used for the next iteration. 

    - initial value []
* Return string with highest and lowest prices from the minMaxArray
*/

console.log(
    (() => {
        // Reducer callback function
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

        return `Highest Price - ${minMaxArray[1].product}: R${minMaxArray[1].price}, Lowest Price - ${minMaxArray[0].product}: R${minMaxArray[0].price}`;
    })()
);

blank();

/*--------------------------------------------------------------------------------------------------------------------*/

// Advanced Exercise 6 - Object Transformation
console.log('Advanced Exercise 6 - Object Transformation');

/* Advanced Exercise 6 problem
Object Transformation: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
*/

/* 
Solution Logic:

* Create a new array of objects with name and cost properties:
    *Object.entries converts products array into an array of key(index)-value(object) pairs.
    * Reduce method iterates over the array and passes each item (key(index)-value(object) pair) to the reducer callback funtion and returns a new array of objects.
    - Reducer callback function 

    -parameters:
        - accArray {array} - Cumulative array of product objects returned by the callback function on the previous iteration or [] if first iteration.
        - [key, value] {array} - Current array iteration, destructured into the key(index) and value(object). Object must have product and price properties.
    -logic:
        - create a new item (Object) by:
            - setting the original product value to a name key
            - setting the original price value to a cost key
        - assign the new object to the accArray at the original index 'key'.
        - returns the new accArray which is also used for the next iteration. 
    - initial value []
*/

// Logs array of product objects with name and cost keys.
console.log(
    Object.entries(products).reduce((accArray, [key, value]) => {
        accArray[key] = { name: value.product, cost: value.price };
        return accArray;
    }, [])
);

blank();

/*--------------------------------------------------------------------------------------------------------------------*/
