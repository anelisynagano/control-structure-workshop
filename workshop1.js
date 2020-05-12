const times = 2;
const number = 4;
let total = 0;
let loop = 0;

while (loop < times) {
    // console.log('loop: ', loop)
    // console.log('total before: ', total);
    
    total = total + number;
    // console.log('total after: ', total)
    
    loop = loop + 1;
    // console.log('new loop number: ', loop)
}

console.log(total)