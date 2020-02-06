//clases
/*Nombre de la clase y el archivo son los mismos
El nombre de clase es en singular
la clase empieza con mayus
*/
class Alumno {
    /*
    Metodo constructor
    -sirve para incializar una clase
    -se ejecuta de maneara automatica al crear un 
    objeto o una instancia de la clase (new)
*/
    constructor(nombre,noCuenta,fecha) {
        this.nombre = nombre
        this.noCuenta = noCuenta
        this.fecha = fecha
        console.log("El objeto se ha inicializado")
    }


    /*
    Metodos=Asociados a clases
    -solo realizan una tarea
    -nombre del metodo es un verbo en infinitvo 
    -el nombreSeEscribeAsi
    */
    decirHola(){
        console.log("Hola soy "+this.nombre+", Buen dia!")
        console.log(`Hola soy ${this.nombre}, Buen dia!`)
    }
    decirAdios(){
        console.log(`Adios! ${this.nombre} se a retirado`)
    }

    mostrarPerfil(){
        console.log(`   ~ Nombre = ${this.nombre}`)
        console.log(`   ~ No. de cuenta = ${this.noCuenta}`)
        console.log(`   ~ Fecha de nacimiento = ${this.fecha}`)
    }
}
/*
-alumno1 es un objeto de tipo Alumno
-alumno1 es una instancia de la clase Alumno 
-El operador new se utiliza para crear un nuevo
objeto o una nueva instancia de una clase
*/
let alumno1 = new Alumno("pepe","20161012",new Date (2002, 3, 17))
let alumno2 = new Alumno("juan","20145754",new Date (2000, 1, 1))

alumno1.decirHola()
alumno1.mostrarPerfil()
alumno1.decirAdios()

alumno2.decirHola()
alumno2.mostrarPerfil()
alumno2.decirAdios()