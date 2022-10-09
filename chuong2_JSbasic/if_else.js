console.log(`su dung if-else`)


let animalTop4 = ['cho', 'meo', 'chim','chuot'];

let i = 0;
// if lồng while
while (i < animalTop4.length) {
    if (animalTop4[i].length === 5) { 
        console.log('top : ',i+1, animalTop4[i]);
    }else if(animalTop4[i].length === 3){
      console.log('top : ',i+1, animalTop4[i]);
    }else {
    }
    i++;
};

