console.log('Returning values')


function TrUng(x, y, z) {
    console.log('1');
    console.log('2');
    console.log('3');
    return(x+y)/z; // sử dụng để kết thúc hàm, tại vị trí tùy ý trong hàm
    // hai dòng sau return được js bỏ qua và chỉ in ra 3 lệnh ở trên

    console.log('4');
    console.log('5');
    return x + y;

}

console.log('check sum: ', TrUng(9, 6, 5));