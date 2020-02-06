//clases
/*Nombre de la clase y el archivo son los mismos
El nombre de clase es en singular
la clase empieza con mayus
*/
class Alumno {
    /*
    Metodos=Asociados a clases
    -solo realizan una tarea
    -nombre del metodo es un verbo en infinitvo 
    -el nombreSeEscribeAsi
    */
    decirHola(){
        console.log("Hola soy Yahel, Buen dia!")
    }
}
/*
-alumno1 es un objeto de tipo Alumno
-alumno1 es una instancia de la clase Alumno 
-El operador new se utiliza para crear un nuevo
objeto o una nueva instancia de una clase
*/
let alumno1 = new Alumno();
let alumno2 = new Alumno();

alumno1.decirHola();
alumno2.decirHola();