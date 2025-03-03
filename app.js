console.log("Hello World!\n==========\n");

//Exercise 1 

for ( let i =0; i < 100; i++){
    if (i % 2 == 0) {
        continue;
    } else {
        console.log (i);
    }
}

 //Exercise 2 



for  (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log ("FIZZBUZZ");
    } else if ( i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
     } else {
        console.log(i);
     }
    }


    //Exercise 3


    let i = 1 ;
    while ( i <= 100 ) {
if (i % 2 !== 0 ) {
    console.log (i);
}
i ++;
}


let j = 1;
do {
if (j% 2 !== 0) {
    console.log (j); 
}
j++; 
} while (j <= 100);


let c = 1; 
while (c <=100) {
    if (c % 3 === 0 && c % 5 ===0) {
        console.log("FIZZBUZZ");
    } else if ( c % 5 === 0)  {
        console.log (c);
    }
    c++;
}


//Exercise 4

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500



let found = false;

for ( i = 0; i <= n; i ++ )  {
    if ( i === value ) {
        console.log ("Found value!");
        found = true;
        break; 
    }
}

if ( !found) {
    console.log("Did not find value");
}

