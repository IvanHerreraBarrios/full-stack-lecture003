let ages = [];

//[]
ages[0] = 10;
//[10,12]
ages.push(12);
//[10,12,13]
ages.push(13);

//[5,10,12,15]
ages.unshift(5);

let aux = ages.slice(1,3); //That excludes number 3

console.log(`slice(1,3) ${aux}`);

//pop()

let last = ages.pop();
//15

//[5,10,12]
//length=3
console.log(last);
console.log(ages);

ages.push(75);
ages.push(85);

let lastPop;
while (ages.length > 0) {
    lastPop = ages.pop();
    console.log(`Pop ${lastPop}`);
    console.log(`${ages}`);
}