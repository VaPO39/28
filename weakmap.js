// как map но с особенностями, за счет него можно избежать утечек данных в js
let obj = {
    name: 'weakmap'
}
/*
const arr = [obj]

obj = null
console.log(arr[0])
const map = new WeakMap([//! в структуре weakmap ключами являются только объекты
    [obj,'obj data']// ключ obj это наша переменная созданная на второй строчке
])
//? у  weakmap  усть методы set get delete has
console.log(map.has(obj))*/

const cache = new WeakMap()//объект кеша
function cacheUsers(user) {
    if (!cache.has(user)) {// проверяет , если пользователя нет в кеша, то
        cache.set(user, Date.now())// добавляет пользователя в кеш, со значениемвремени сейчас
    }
    return cache.get(user)
}
let Lena = { name: 'Lena' }
let Katya = { name: 'Katya' }
cacheUsers(Lena)
cacheUsers(Katya)
Lena= null// аватоматически из weakmap был удален данный ключ, так как обьект был удален , а память в стеше очищена
console.log(cache.has(Lena))
console.log(cache.has(Katya))// проверяет есть ли пользователи

