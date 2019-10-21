// 1. Написать функцию odd, которая принимает массив чисел и возвращает массив
// с нечетными значениями.
//
// 2. Написать функцию even, которая делает все тож самое, но возвращает массив
// с нечетными числами.
//
// 3. Написать функцию isPalindrome, которая принимает строку и возвращает true,
//     если она палиндром(погуглите) и false, если нет.
//
// 4. И на смекалку. У нас есть многомерный массив чисел, количество вложенностей
// произвольное, мы его не знаем. Нужно написать функцию flat, которая вернет
// одномерный массив из всех чисел.

function odd(arr) {
    var odds = arr.filter(function (item) {
        if (item%2 !== 0)
            return item;

    });
    return odds;
}

var arr = [1,5,7,8,10,2,2,3,9,7,11];
console.log(odd(arr));

function even(ar) {
    return ar.filter(function (item) {
        return (item%2 === 0);
    })
}

console.log(even(arr));

var arr2 = [-1,5,-8,9,-2,-1,5,8,11];
function positive(array) {
   return array.filter(function (item) {
        return item>0;

    })
}
function negative(array) {
    return array.filter(function (item) {
        return item<0;

    })
}
console.log(positive(arr2));
console.log(negative(arr2));


function isPalindrome(str) {
    var strReverse = str.split('').reverse().join('');
    if (str === strReverse) {
        return true
    } else return false;
}

var checkPalindrome = 'level';
var strNotPalindrome = 'sunny';
console.log(isPalindrome(checkPalindrome));
console.log(isPalindrome(strNotPalindrome));


function flat(array)
{
    var res=[];
    for (var i=0; i<array.length; i++)
        if (!Array.isArray(array[i]))
            res.push(array[i]);
        else
            res=res.concat(flat(array[i]));
    return res;
}

function flat2(arr) {
    var strArray = arr.toString().split(',');
    for (var i = 0; i < strArray.length; i++) {
            strArray[i] = +strArray[i];
        }
    return strArray;

}

var multArray = [
    [5,7,8],
    [5,8,3],
    [2,1,
        [1,8],
        7],
    ];

console.log(flat(multArray));
console.log(flat2(multArray));
