//todo               L1: Set Alarm

//* employed | vacation
//* true | true     => false
//* true | false    => true
//* false | true     => false
//* false | false    => false

function setAlarm(employed, vacation) {
   if (employed === vacation) { return false }

   if (employed && !vacation) { return true }

   if (!employed && vacation) { return false }
}

console.log(setAlarm(true, true))