export default class Grupo{
    constructor(semestre,literal){
        this.semestre = semestre
        this.literal = literal
        this.alumnos = new Array();
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno)    
    }

    listarAlumnos(){
        this.alumnos.forEach( alumno => {
            console.log(alumno.getPerfil())
        })
    }
    elimarAlumno(alumno){
        this.alumnos.filter(alumno)
    }
}