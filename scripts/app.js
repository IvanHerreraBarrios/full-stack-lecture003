let age;
let ages = [0,0,0];
let max;

for (let i = 0; i < ages.length; i++) {
    age = + prompt("Enter the age");
    ages[i] = age;
}

max = ages[0];

for (let i = 0; i < ages.length; i++) {
    if(ages[i] > max){
        max = ages[i];
    }
}

alert(`The oldest is ${max}`);

//f10 breakpoints
//esc hide console