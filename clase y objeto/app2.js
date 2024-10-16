class libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    mostarinfo(){
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}`);
    }

}

const libro1 = new libro ('cien años de soledad','Gabriel Garcia Marquez');
const libro2 = new libro ('don quijote de la mancha', 'Miguel de cervantes');

libro1.mostarinfo();
libro2.mostarinfo();