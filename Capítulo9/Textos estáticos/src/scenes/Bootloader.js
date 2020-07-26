class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }
    create() {
        // this.cubix = this.add.image(100, 100, 'cubix');
        const texto = {
            x: 100, 
            y: 100, 
            text: 'Hola mundo\nque tal', 
            style: {
                fontFamily: 'IndieFlower',
                color: '#000000',
                fontSize: 40,
                backgroundColor: '#ffffff',
                fontStyle: 'Italic',
                padding: {
                    top: 20,
                    bottom: 20,
                    right: 20,
                    left: 20,
                },
                // align: 'left'
            }
        }
        
        this.nuevoTexto = this.make.text(texto);
        this.nuevoTexto.setText('Nuevo texto');
        // texto.setText('Soy un nuevo texto');
        // texto.flipX = true;
        // texto.alpha = 0.5;
        // texto.x = 0;
    }
    update(time, delta) {
       
    }
}

export default Bootloader;