class Libros{
    constructor(autor,nombre,numeropaginas){
        this.autor=autor
        this.nombre=nombre
        this.numeropaginas=numeropaginas
    }
    set nombrelibro(nombre1){

    }
    get mostrarlibro(){

    }
}
let libro1=new Libros("Gabriel garcia marquez","cien años de soledad", "350")
console.log(libro1)