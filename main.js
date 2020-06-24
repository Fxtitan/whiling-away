//import let from 'let';
const challenge = (n) => {
    return '######### Challenge ' + n + ' #########'
}

console.log(challenge(1));

//func that prints 1 - 5
const letsCount = () => {
    let num = 1;
    while(num <= 5) {
        console.log(num)
        num ++;
    }
}
letsCount();
console.log(challenge(2));

const sixth = (six) => {
    let num = 1
    while (num <= six) {
        console.log(num);
        num ++;
    }
}
sixth(6);
console.log(challenge(3));

const stepByStep = (one, two) => {
    while (one <= two) {
        console.log(one);
        one ++;
    }
}
stepByStep(3,6);
console.log(challenge(4));

const evenSteven = (number) => {
    let count = 2;
    while (count <= number) {
        console.log(count);
        count += 2;
    }
}
evenSteven(8);
console.log(challenge(5));

const challenge5 = (num) => {
    let count = 1
    while(count < num) {
        if (count % 2 === 1) {
            count ++;
            console.log(count);   
        }
        console.log(count);
        count ++;
    }   
}
challenge5(11);
console.log(challenge(6));

const challenge6 = (number) => {
    let count = 10;
    while (count >= number) {
        console.log(count);
        count --;
    }
}
challenge6(1);
console.log(challenge(7));

const challenge7 = (number) => {
    let count = 10;
    while (count >= number) {
        console.log(count);
        count --;
    }
    console.log("Blast off!");
}
challenge7(1);
console.log(challenge(8));

const challenge8 = (number) => {
    let count = 0;
    while (number >= count) {
        console.log(number);
        number += - 3;
    }
}
challenge8(20);
console.log(challenge(9));

const challenge9 = (num) => {
    let count = 1;
    while (count <= num) {
        console.log("Hello!" + count + '.' + ' ');
        count ++;
    }
}
challenge9(7);
console.log(challenge(10));

const challenge10 = (num, str) => {
    let count = 1;
    while (count <= num) {
        console.log(str + count + '.' + ' ');
        count ++;
    }
}
challenge10(7, 'Hello there. ');
console.log(challenge(11));

const challenge11 = (str, num) => {
    let stupid = 1
    while (stupid <= num) {
        console.log(str + num);
        stupid ++;
    }

}
challenge11("Good-bye...", 4);
challenge11("Get out!", 6);
console.log(challenge(12));

const challenge12 = (str) => {
    let count = 0;
    while (count < str.length) {
        console.log(str[count]);
        count ++;
    }
}
challenge12('think');
console.log(challenge(13));

const challenge13 = (str) => {
    let count = 0; 
    while (count < str.length) {
        if (count % 2 === 1) //even
        console.log(str[count]);
        count++;
    }
}
challenge13('nobody');
console.log(challenge(14));

const challenge14 = (str) => {
    let count = str.length - 1;
    while (count >= 0) {
        console.log(str[count]);
        count --;
    }

}
challenge14('Hello');
console.log(challenge(15));

const challenge15 = (num) => {
    let count = 0;
    while (count <= num) {
        console.log(count)
        count ++;
    } if (num % 3 === 0) {
        console.log("Fizz");
    } if (num % 5 === 0) {
        console.log("Buzz");
    } if (num % 15 === 0) {
        console.log("FizzBuzz");
    }

}
challenge15(15);
console.log(challenge(16));

const fibs = (num) => {

}
fibs(8)
















