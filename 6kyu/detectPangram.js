//todo                  Detect Pangram


//* Панграмма - это предложение, которое содержит каждую букву алфавита
//*  по крайней мере один раз.Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой, поскольку
//*   в нем по крайней мере один раз используются
//*   буквы A - Z(регистр не имеет значения).

//* Получив строку, определите, является ли она панграммой или нет.
//* Возвращает True, если это так, и False, если нет.
//* Игнорируйте цифры и знаки препинания.

function isPangram(string) {
   let stringPreparation = string.replace(/[\s\d\.\,]/gi, '').toLowerCase()
   return new Set(stringPreparation).size === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))