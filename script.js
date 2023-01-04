//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. 
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.


// function solution (array1) {
//     return array1.replaceAll ("а","я")
// }
// console.log (solution ("Аскар, Баяман, Калмамат"))


// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.

// function alphabet_order(str) {
// return str.split('').sort().join('');
// }
// console.log (alphabet_order("zhanakeeva"));



// task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
 
// const EvenNumbers = (inputs) => {
// return inputs.filter( x => x % 2 === 0 );
// }
// console.log(EvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]))



// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.

// const onlyNumbers = (arr) => {
// return arr.filter (element => typeof element === 'number')
// }
// console.log (onlyNumbers ([1, 56, 5, 'aisu', null]))



// task 5 Напишите функцию, которая принимает массив и возвращает:


// const task1 = (arr) => {
//     return arr.reduce ((x, y) => Math.min(x, y))
// }

// const task2 = (arr) => {
// return arr.reduce ((x, y) => Math.max(x, y))
// }

// const task3 = (arr) => {
// return arr.length
// }

// const task4 = arr => {
// return arr.reduce((a, b) => a + b)/arr.length.toFixed(1)
// }

// console.log ([task1  ([ 7, 13, 3, 77, 100 ]), task2  ([ 7, 13, 3, 77, 100 ]), task3  ([ 7, 13, 3, 77, 100 ]), task4 ([ 7, 13, 3, 77, 100 ])])




//     Минимальный элемент

// const task1 = (arr) => {
//     return arr.reduce ((x, y) => Math.min(x, y))
// }
// console.log (task1  ([ 7, 13, 3, 77, 100 ]))

// Максимальный элемент

// const task5 = (arr) => {
// return arr.reduce ((x, y) => Math.max(x, y))
// }
// console.log (task5 ([ 7, 13, 3, 77, 100 ]))

// Длину массива

// const task5 = (arr) => {
// return arr.length
// }
// console.log (task5 ([ 7, 13, 3, 77, 100 ]))

// Среднее арифметическое

// const average = arr => {
// return arr.reduce((a, b) => a + b)/arr.length.toFixed(1)
// }
// console.log (average ([ 7, 13, 3, 77, 100 ]))


// Ответ должен быть в виде массива

// Пример входных данных: [7, 13, 3, 77, 100]

// Результат: [ 3, 100, 5, 40 ]





// task 6

// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const newArr = arr.filter((el) => {
//     return el % 2 === 0
// })

// const first = newArr.find((el, idx) => {
//     return idx === 0
// })
// console.log(first) 






// const EvenNumbers = (inputs) => {
//     return inputs.filter( x => x % 2 === 0);
//     }




// codewars (fizzbuzz)

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let newArr = arr.forEach((el)=> {
     if (el % 15 === 0 ) {
        console.log("FizzBuzz" + " ");
    } else if ( el % 3 === 0 ) {
        console.log ("Fizz" + " ")
    } else if ( el % 5 === 0 ) {
        console.log("Buzz" + " ")
    } else {
        console.log ( el + " ")
    }
})



// let arr = [1,2,3,4]
// let a = [...arr, 7,8]
// console.log(a)
