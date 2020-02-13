export default class FechaNacimiento{
    constructor(dia,mes,año)
    {
    this.dia = dia
    this.mes = mes
    this.año = año
    this.fecha = new Date(this.año,(this.mes-1),this.dia)
    }

    getEdad()
    {
        let fechaActual = new Date()
        let edad = Math.floor(((fechaActual - this.fecha) / (1000 * 60 * 60 * 24) / 365));
        return edad
    }
    getFormatoCorto()
    {
        return (`${this.dia}/${this.mes}/${this.año}`)
    }
    getFormatoExtendido()
    {
        let dia = this.fecha.getDay()
        let semana = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
        let mes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
        return (semana[dia]+" "+this.dia+" de "+mes[this.mes]+" del "+this.año)
        
    }
}
