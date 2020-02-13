import FechaNacimiento from "./fecha-nacimiento.js";
import Alumno from "./alumno.js";
import Grupo from "./grupo.js";

class Main {

    constructor() {
        this.alumno1 = new Alumno("pepe",25525,new FechaNacimiento(20,5,2002))
        this.alumno2 = new Alumno("pipo",20005,new FechaNacimiento(16,7,2006))
        this.grupo1 = new Grupo(2, "G")
    }

    probarFechas() {
        let pepe = new FechaNacimiento(6,3,2000)
        console.log(pepe.getEdad())
        console.log(pepe.getFormatoCorto())
        console.log(pepe.getFormatoExtendido())

    }

    probarAlumno() {
        console.log(this.alumno1.getEdad())
        console.log(this.alumno1.getPerfil())
    }

    probarGrupo() {
        this.grupo1.agregarAlumno(this.alumno1)
        this.grupo1.agregarAlumno(this.alumno2)
        this.grupo1.listarAlumnos();
    }
}

let app = new Main();
app.probarGrupo();
