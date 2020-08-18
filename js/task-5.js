const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
]

console.table(products)

const getAllPropValues = function (arr, prop) {
  const list = []

  for (const product of arr) {
    list.push(product[prop])
  }
  return list
}

console.log(getAllPropValues(products, 'name')) // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')) // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')) // []
