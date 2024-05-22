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

const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 3 - map
console.log('Exercise 3 - map');

const nameLenghts = names.map((name) => name.length);
console.log(nameLenghts);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 4 - sort
console.log('Exercise 4 - sort');

provincesAlphabetical = provinces.sort();
console.log(provincesAlphabetical);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 5 - filter
console.log('Exercise 5 - filter');

const filteredProvinces = provinces.filter((province) => !province.includes('Cape'));
console.log(filteredProvinces.length);
console.log(filteredProvinces);
blank();

/*-----------------------------------------------------------------------------------------------*/

//Exercise 6 - map and some
console.log('Exercise 6 - map and some');

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

const namesProvincesReducer = (object, name, index) => {
    Object.defineProperty(object, name, { value: provinces[index] });
    return object;
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

//Advanced Exercise 1 - Log Products
console.log('Advanced Exercise 1 - Log Products');

products.forEach((product) => console.log(product.product));

blank();

/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercise 2 - Filter by name length
console.log('Advanced Exercise 2 - Filter by name length');

const productsWithShortNames = products.filter((product) => product.product.length < 6);

console.log(productsWithShortNames);

blank();

/*-----------------------------------------------------------------------------------------------*/

//Advanced Exercise 3 - Price Manipulation
console.log('Advanced Exercise 3 - Price Manipulation');

// Filter out products without prices
const productsWithPrices = products.filter((products) => parseInt(products.price));

// Convert string prices to numbers.
const validProducts = productsWithPrices.map((product) => ({
    ...product,
    price: parseInt(product.price),
}));

// Reducer callback function
const sumPrices = (sum, product) => {
    return sum + product.price;
};

const totalPrice = validProducts.reduce(sumPrices, 0);

console.log(`Total price - ${totalPrice}`);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 4 - Concatenate Product Names
console.log('Advanced Exercise 4 - Concatenate Product Names');

// Reducer callback function
const ConcatenateProductNames = (sum, product) => {
    return sum ? sum + ' ' + product.product : product.product;
};

// String of all product names
const productNameString = products.reduce(ConcatenateProductNames, '');

console.log(productNameString);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 5 - Find Extremes in Prices
console.log('Advanced Exercise 5 - Find Extremes in Prices');

// Reducer callback function
const minMaxReducer = (minMax, current) => {
    minMax[0] = minMax[0] === undefined || current.price < minMax[0].price ? current : minMax[0];
    minMax[1] = minMax[1] === undefined || current.price > minMax[1].price ? current : minMax[1];
    return minMax;
};

// Array with two objects - The products with the lowest and highest price.
const minMaxArray = validProducts.reduce(minMaxReducer, []);

console.log(`
  Highest Price - ${minMaxArray[1].product}: R${minMaxArray[1].price},
  Lowest Price - ${minMaxArray[0].product}: R${minMaxArray[0].price}
`);

blank();

/*-----------------------------------------------------------------------------------------------*/

// Advanced Exercise 6 - Object Transformation
console.log('Advanced Exercise 6 - Object Transformation');

// Reducer callback function - transforms object and pushes it to the array
const reducer = (array, product) => {
    let newProduct = {};

    for (const [key, value] of Object.entries(product)) {
        if (key === 'product') {
            newProduct.name = value;
        } else if (key === 'price') {
            newProduct.cost = value;
        }
    }
    array.push(newProduct);
    return array;
};

// newArray of product objects with name and cost keys
const newArray = products.reduce(reducer, []);

console.log(newArray);

blank();

/*-----------------------------------------------------------------------------------------------*/
