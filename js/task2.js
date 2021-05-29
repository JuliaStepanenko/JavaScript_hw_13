console.log("  Task #2  ");
console.log("Реализовать рекурсивную функцию которая возводит число в степень.");
console.log("Число которое нужно возвести в степень передается как первый аргумент в функцию");
console.log("Степень передается как второй аргумент в функцию");
console.log("pow(num, degree)");
console.log("");


let number = +prompt(" Введите число");
let numberDegree = +prompt(" Введите степень для числа ");

function calculateDegree (num , degree){
    if(degree === 1 ) {
        return num;
    } else {
        return num * calculateDegree ( num ,degree - 1);
    }
}

console.log( `Число ${number} возведенное в степень ${numberDegree} равняется ` + calculateDegree( number , numberDegree));
alert( `Число ${number} возведенное в степень ${numberDegree} равняется ` + calculateDegree( number , numberDegree));
