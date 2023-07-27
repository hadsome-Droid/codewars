//todo                     Ты играешь на банджо ?


//* Создайте функцию, которая отвечает на вопрос "Вы играете на банджо?".
//* Если ваше имя начинается с буквы "R" или со строчной буквы "r", вы играете на банджо!

//* Функция принимает имя в качестве единственного аргумента и
//* возвращает одну из следующих строк:

//* name + " plays banjo"
//* name + " does not play banjo"
//* Приведенные имена всегда являются допустимыми строками.


function areYouPlayingBanjo(name) {
   if (/^r/i.test(name)) {
      return `${name} plays banjo`
   } else {
      return `${name} does not play banjo`
   }
}


console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo")