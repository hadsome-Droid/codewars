//todo                       Keep up the hoop


//*  Напишите программу, в которой Алекс может ввести(n), сколько раз крутится обруч,
//*     и она вернет ему ободряющее сообщение:)

//*  Если Алекс получит 10 или более бросков, верните строку "Отлично, теперь 
//*  переходим к трюкам".
//*  Если он не получит 10 обручей, верните строку "Продолжайте в том же духе,
//*   пока не получите".


function hoopCount(n) {
   return n >= 10 ?
      "Great, now move on to tricks" :
      "Keep at it until you get it";
}

console.log(hoopCount(6), "Keep at it until you get it");
console.log(hoopCount(10), "Great, now move on to tricks");
console.log(hoopCount(22), "Great, now move on to tricks");