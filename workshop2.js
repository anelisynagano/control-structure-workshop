let total = 0;
// try adding five instead of one
for (let i = 0; i <= 100; i = i + 5) {
    total = total + i;
    
    // compare if i is divisible by 5, then run block of code
    // if (i % 5 === 0) {
    //     total = total + i;
    // }
}

console.log(total)