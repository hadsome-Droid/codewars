// todo                        Volume of a Cuboid



//*  Бобу нужен быстрый способ вычислить объем кубоида с помощью трех значений:
//*  длины, ширины и высоты кубоида.Напишите функцию, которая
//*   поможет Бобу с этим вычислением.

class Kata {
   static getVolumeOfCuboid(length, width, height) {
      return length * width * height
   }
}

console.log(Kata.getVolumeOfCuboid(6, 2, 5))
