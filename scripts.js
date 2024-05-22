// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

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

// Exercises
const blank = () => console.log('');

/*-----------------------------------------------------------------------------------------------*/

// Exercise 1 - forEach
console.log('Exercise 1- forEach');
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
