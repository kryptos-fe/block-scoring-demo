console.log(`su dung if-else`)


let animalTop4 = ['cho', 'meo', 'chuot', 'chim'];

let i = 0;
while (i < animalTop4.length) {
    i++;
    if (animalTop4[i] === 'meo') { 
        console.log('Found it: ', animalTop4[i])
        continue;
    }

    console.log('>>> check i: ', i)

};