/*
const obj = {
    name: 'Sergey',
    job: 'OffWorker',
    age: 56
}
const array1 = [
    ['name', 'Ivan'],
    ['job', 'Developer'],
    ['age',22]
]
/*console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const mmap = new Map(array1)
mmap
    .set('новая строчка', 'ее значение')// создано благодаря методу Мап
    .set(obj, 'Value of object')// теперь в массив array1 добавили обьект obj
    .set(NaN, 'Nan ??')// добавили обьект нот а намбер
mmap.delete('job')// удаляем ключ(поле) джоб
//? выводы с Map

console.log(mmap.has('job'))// проверка есть ли джоб в нашем массиве
console.log(mmap)// получаем массив ентриес полностью
console.log(mmap.get('name'))// получаем конкретно значения поля нейм
console.log(mmap.size)// выдает размер массива
mmap.clear()// чистим массив
console.log(mmap.size)//снова проверяем его размер
 
//!
for (let entry of mmap.entries()) {// метод entries позволяет вернуть массив mmap, на каждой итерации получаем отдельный entry который и выводим в консоль лог
    console.log(entry)
    
}

for (let [key,value] of mmap.entries()) {// как и в предыдущем случае все работает, но выводит массив по ключу и значению
    console.log(key,value)
    
}
//!
//* метод для values
for (let z of mmap.values()) {// метод values  выведет только значимые параметры
    console.log(z)
    
}
// * так же есть метод для ключей

for (let z of mmap.keys()) {// метод keys  выведет только ключи
    console.log(z)
    
}
//*
mmap.forEach(function callbcakfn (val, key, m){// внутри кол бека само значение велью, его индекс кей, и сам ммап сокращенный до символа м
    console.log(val,key)
    
})

//////////////////////////////////////
const array2 = [...mmap]// получили массив из значений карты ммап
console.log(array2)
//TODO либо  использовать метод аррай фром, делает тоже самое
//! учитывая что карта это усложненный обьект
const array3 = Array.from(mmap)
const mapObj= Object.fromEntries(mmap.entries())// получаем объект из карты
console.log(mapObj)
    //* Важно, если внутри массива был объект то он становится просто обжект обжект, так как обьект ключом быть не может, программа пытается его с помощью метода то стринг к строке и получает [object Object]
    */
const users = [
    { name: 'ELena' },
    {name: 'Kate'
    },
    { name: ' Ivan'}
]
const visit = new Map()
visit
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))// время посещение сайта
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))
    
function lastVisit(user) {
        return visit.get(user)// получаем время посещения сайта
    }
console.log(lastVisit(users[1]))// выводим время

