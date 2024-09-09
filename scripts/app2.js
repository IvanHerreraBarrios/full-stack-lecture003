
let data = new Array();
let information;

information = prompt("Enter something");

while (information != 0) {
    data.push(information);
    console.log(data);

    information = prompt("Enter something");
}

console.log(data);

let numerical = [];
let words=[];
for (let aux of datos) {
    console.log(aux);
    let num = +aux;
    if (num) {
        numerical.push(num);
    } else {
        words.push(aux);
    }
}

console.log(numerical);

let aux;
numerical = numerical.sort(function(a,b){
    return a-b; //+ => a is bigger, - => b is bigger, ascending form
    return b-a; //descending form
});
console.log(`${numerical}`);

words.sort();
console.log(`words ${words}`)
/*
for (let i = 0; i < numerical.length; i++) {
    if (numerical[i] > numerical[i+1]) {
        aux = numerical[i];
        numerical[i] = numerical[i+1];
        numerical[i+1] = aux;
    }
}*/

//objects

let product = {
    id: 1,
    title: "Iron man",
    price: 34,
};

let products = [];
let $id;
let $title;
let $price;

$id = prompt(`id`, ``);


//id = 0 => false
while (id) {
    $title = prompt(`Title`, '');
    $price = prompt(`Price`, 0);

    let product = {
        id: $id,
        title: $title,
        price: $price,
    };
    products.push(product);

    $id = prompt(`id`, ``);
}

console.log(products);

products.sort(function (a,b) {
    return a.price - b.price;
})

let div = document.getElementById('lecture3');
for (let productAux of products) {
    let toString = `id: ${productAux.id}, title ${productAux.title} price ${productAux.price}`
    div.innerHTML += toString + `<br>`;
}

console.log(products);

let option;
do {
    option = prompt(`1: ASC \n 2: DESc`);
} while (option !=='1' && option !== '2');

if (option === '1') {
    products.sort(function(a,b) {
        return a.price - b.price;
    });
} else {
    products.sort(function(a,b) {
        return b.price - a.price;
    });
}

div = document.getElementById('sort');
for (let productAux of products) {
    let toString = `id: ${productAux.id}, title ${productAux.title} price ${productAux.price}`
    div.innerHTML += toString + `<br>`;
}