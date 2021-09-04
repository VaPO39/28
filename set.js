const set = new Set([1, 2, 3, 3, 3, 4, 5, 6,])// передаются уникальные значения
set.add(10).add(20).add(30).add(20)// адд добавляет в конец массива уникальные значения
console.log(set)
/*
console.log(set.has(23))// метод хас  проверяте есть ли элемент в масстве(23)
console.log(set.size)// выдает размер массива
console.log(set.delete(3))
console.log(set.size)
console.log(set.clear())// полная очистка сета
console.log(set.size)


console.log(set)
////
console.log(set.values())// values это метод и нужны круглые скобки//!!!!
console.log(set.keys())// сет проще чем меп поэтому вальюс и кейс выдают одно и тоже
console.log(set.entries())// продублирует наши переменные и выведет их в формате [1, 1], некст строка [2, 2]
*/
///
function uniqValues(array) {
    return Array.from (new  Set(array))// сделает из массива array массив без повторяющихся значений
}
console.log(uniqValues([1,2,2,3,4,4,4,5,3,1,7]))



