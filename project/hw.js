function rand(min, max) {
    return (Math.random() * (max - min)) + min;
}

function createArrayWithRandomNumber(n, min, max) {
    let a = []

    for (let i = 0; i < n; i++) {
        a.push(rand(min, max));
    }

    return a;
}

function sum(a){
    let tot = 0;

    for(let i = 0; i  < a.length; i++)
    {
        tot += a[i];
    }

    return tot;
}

function average(a){
    let s = sum(a);

    return s/a.length;
}

function min(a){
    let minVal = Number.MAX_VALUE;

    for(let i = 0; i < a.length; i++)
    {
        if(a[i] < minVal) minVal = a[i];
    }

    return minVal;
}

function max(a){
    let maxVal = Number.MIN_VALUE;

    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > maxVal) maxVal = a[i];
    }

    return maxVal;
}

let randomArray = createArrayWithRandomNumber(10, 0, 50);
let oddIndexArray = []
let evenIndexArray = []

for(let i = 0; i < randomArray.length; i++)
{
    // console.log("sss");
    if(i%2 == 0) 
    {
        evenIndexArray.push(randomArray[i]);
    }
    else oddIndexArray.push(randomArray[i]);
}

// console.log(randomArray);
// console.log(evenIndexArray);
// console.log(oddIndexArray);

console.log("----------- Custom Function all array ------------");
console.log(`sum        : ${sum(randomArray)}`);
console.log(`average    : ${average(randomArray)}`);
console.log(`max        : ${max(randomArray)}`);
console.log(`min        : ${min(randomArray)}`);

console.log("----------- Internal Function all array ------------");
console.log(`sum        : ${randomArray.reduce((a,b) => a+b, 0)}`);
console.log(`average    : ${randomArray.reduce((a,b) => a+b, 0) / randomArray.length}`);
console.log(`max        : ${Math.max(...randomArray)}`);
console.log(`min        : ${Math.min(...randomArray)}\n\n`);

console.log("----------- Custom Function even index array ------------");
console.log(`sum        : ${sum(evenIndexArray)}`);
console.log(`average    : ${average(evenIndexArray)}`);
console.log(`max        : ${max(evenIndexArray)}`);
console.log(`min        : ${min(evenIndexArray)}`);

console.log("----------- Internal Function even index array ------------");
console.log(`sum        : ${evenIndexArray.reduce((a,b) => a+b, 0)}`);
console.log(`average    : ${evenIndexArray.reduce((a,b) => a+b, 0) / evenIndexArray.length}`);
console.log(`max        : ${Math.max(...evenIndexArray)}`);
console.log(`min        : ${Math.min(...evenIndexArray)}\n\n`);

console.log("----------- Custom Function odd index array ------------");
console.log(`sum        : ${sum(oddIndexArray)}`);
console.log(`average    : ${average(oddIndexArray)}`);
console.log(`max        : ${max(oddIndexArray)}`);
console.log(`min        : ${min(oddIndexArray)}`);

console.log("----------- Internal Function odd index array ------------");
console.log(`sum        : ${oddIndexArray.reduce((a,b) => a+b, 0)}`);
console.log(`average    : ${oddIndexArray.reduce((a,b) => a+b, 0) / oddIndexArray.length}`);
console.log(`max        : ${Math.max(...oddIndexArray)}`);
console.log(`min        : ${Math.min(...oddIndexArray)}`);
