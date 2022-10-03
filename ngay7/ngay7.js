console.log(`TrUng  learn Object`);
/** khi khai báo object, cần khai báo đủ một cặp chìa khóa 
ví dụ như :"name" là ổ khóa và key là ":" để lấy được giá trị là "Trung".
Giữa các cặp giá trị sử dụng dấu "," để ngăn cách */
let Obj = {
      name : `Trung`,
      address : `HaNoi`,
      email : `nguyentrung250302@gmail.com`,
      gender : `nam`,
      age : `20`
};
let b = `trung`;
console.log(`kieu du lieu cua a la :`,typeof a,`kieu du lieu cua b la :`, typeof b );

console.log(`ban ten la gi ?`,`.`,`Ten toi la`,Obj.name );
console.log(`ban bao nhieu tuoi?`,`.`,`Nam nay toi`,Obj.age);
console.log(`ban song o dau?`,`.`,`Toi song o`,Obj.address);
console.log(`vui long nhap dia chi email cua ban`,`.`,`Email :`,Obj.email);