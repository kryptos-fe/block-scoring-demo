console.log('filter_find')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'TrUng', age: 25 },
    { name: 'Trang', age: 29 },
    { name: 'Tuan', age: 55 },
    { name: 'Ha', age: 24 },
    { name: 'My', age: 35 },
]
//filter, find

let filter = arr.find((item, index) => {
  return item && item.age === 55;
});

console.log(filter);