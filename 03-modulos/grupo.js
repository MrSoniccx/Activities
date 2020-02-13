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
        this.alumnos.forEach( (alumno, i) => {
            console.log(`(${i+1}) ${alumno.getPerfil()}`)
        })
    }
    elimarAlumno(alumno){
        this.alumnos.filter(alumno)
    }
}