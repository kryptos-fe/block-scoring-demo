console.log(`Thế giới động vật `);
let animalTop5 = ['sư tử', 'hổ', 'chó', 'mèo', 'chuột'];

/**
for(let i = 0; i < animalTop5.length;i++){
console.log(`top : `, i +1 , animalTop5[i])
};
*/
let i = 0;
while (i < animalTop5.length) {
  console.log(`top : `, i + 1, animalTop5[i])
  i++;
};// nếu sai điều kiện thì k thể lặp lại

do {
  console.log(`top : `, i + 1, animalTop5[i])
  i++;
} while (i < 0) // điều kiện sai hay đúng thì luôn lặp lại ít nhất 1 lần