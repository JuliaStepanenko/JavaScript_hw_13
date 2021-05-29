console.log("  Task #1  ");
console.log("Реализовать рекурсивную функцию которая находит факториал переданного в нее числа");
console.log("getFactorial(3)");
console.log("в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1");
console.log("");



let factorialNumber = +prompt(" Введите число для нахождения его факториала ")

function calcFactorialNumber (number = 3){
    if(number === 1 ) {
        return number;
    } else {
        return number * calcFactorialNumber (number - 1);
    }
}

console.log( `факториал числа 3 равен ` + calcFactorialNumber());
console.log("");

console.log( `факториал числа ${factorialNumber} равен ` + calcFactorialNumber( factorialNumber));
alert( `факториал числа ${factorialNumber} равен ` +  calcFactorialNumber( factorialNumber));
