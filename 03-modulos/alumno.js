
export default class Alumno{
    constructor(nombre,numeroCuenta,fechaNac)
    {
    this.nombre = nombre
    this.numeroCuenta = numeroCuenta
    this.fechaNac = fechaNac
    }

    getEdad(){
        return this.fechaNac.getEdad();
    }

    getPerfil() {
        return `${this.numeroCuenta}, ${this.nombre}, ${this.fechaNac.getFormatoExtendido()}`
    }
}
