// todo                   Anagram Detection

//* Анаграмма - это результат перестановки букв слова для получения
//*  нового слова(см.википедию).

//*    Примечание: анаграммы не чувствительны к регистру

//* Завершите выполнение функции для возврата, true если два приведенных
//*  аргумента являются анаграммами друг друга; верните false в противном случае.

//*    Примеры
//* "foefet" является анаграммой "toffee"

//* "Buckethead" является анаграммой "DeathCubeK"

const isAnagram = function (test, original) {
   let strTest = test.toLowerCase().split('').sort().join('')
   let strOriginal = original.toLowerCase().split('').sort().join('')
   return strTest === strOriginal
};

console.log(isAnagram("foefet", "toffee"))