//* Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(s) {
   return s.replace(/!/g, '')
}

removeExclamationMarks("Hello World!")