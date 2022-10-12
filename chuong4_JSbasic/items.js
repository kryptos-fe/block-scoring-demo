console.log('Items')

var items = [
    { name: 'Apple', value: 21 },
    { name: 'Banana', value: 34 },
    { name: 'Grapefruit', value: 45 },
    { name: 'Grape', value: 12 },
    { name: 'Watermelon', value: 13 },
    { name: 'Strawberry', value: 37 }
];

// sắp xếp giá trị
items.sort(function (a, b) {
    return a.value - b.value;
});
console.log(items,`Price of fruit`);