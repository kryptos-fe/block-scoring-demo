console.log(`Arrow Function`)
// giúp viết code ngắn gọn hơn, sử dụng khá ok trong các TH dùng: map, filter, reducer...
// và khi sử dụng arrow function thì 1 hàm tương đương 1 biến

// sử dụng function :
//function sum(a, b,c) {
//  return (a + b)/c;
//}

// sử dụng arrow function :
let sum =(a,b,c) => {
  return (a+b)/c;
}
console.log(`check value :`, sum(6,9,3));