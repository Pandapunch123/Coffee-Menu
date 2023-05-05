const coffeeMenu = require("./coffee_data");

//Print an array of all the drinks on the menu.

const Name = (drink) => {
  return drink.name;
};
console.log(coffeeMenu.map(Name));

//Print an array of drinks that cost 5 and under.

const underfive = (drink) => {
  return drink.price <= 5;
};
const drinkunderfive = coffeeMenu.filter(underfive);
console.table(drinkunderfive);

//Print an array of drinks that are priced at an even number.

const onlyeven = (drink) => {
  return drink.price % 2 === 0;
};
const drinkonlyeven = coffeeMenu.filter(onlyeven);
console.table(drinkonlyeven);

//Print the total if you were to order one of every drink.

const sumTotalPrice = (accumulator, currentValue) => {
  return accumulator + currentValue.price;
};
const TotalPrice = coffeeMenu.reduce(sumTotalPrice);
console.log(TotalPrice);

//Print an array with all the drinks that are seasonal.

const onlyseasonal = (drink) => {
  return drink.seasonal === true;
};
const drinkonlyseasonal = coffeeMenu.filter(onlyseasonal);
console.table(drinkonlyseasonal);

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonal = (drink) => {
  return { ...drink, name: `${drink.name} with imported beans` };
};
const imported = drinkonlyseasonal.map(seasonal);
