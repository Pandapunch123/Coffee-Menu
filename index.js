const coffeeMenu = require("./coffee_data");

const Name = (drink) => {
  return drink.name;
};
console.log(coffeeMenu.map(Name));

const underfive = (drink) => {
  return drink.price <= 5;
};
const drinkunderfive = coffeeMenu.filter(underfive);
console.table(drinkunderfive);

const onlyeven = (drink) => {
  return drink.price % 2 === 0;
};
const drinkonlyeven = coffeeMenu.filter(onlyeven);
console.table(drinkonlyeven);

const sumTotalPrice = (accumulator, currentValue) => {
  return accumulator + currentValue.price;
};
const TotalPrice = coffeeMenu.reduce(sumTotalPrice);
console.log(TotalPrice);

const onlyseasonal = (drink) => {
  return drink.seasonal === true;
};
const drinkonlyseasonal = coffeeMenu.filter(onlyseasonal);
console.table(drinkonlyseasonal);

const seasonal = (drink) => {
  return { ...drink, name: `${drink.name} with imported beans` };
};
const imported = drinkonlyseasonal.map(seasonal);
