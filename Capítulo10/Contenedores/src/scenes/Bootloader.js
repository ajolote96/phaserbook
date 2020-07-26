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
        this.load.image('contenedor', 'contenedor.png');
    }
    create() {
        this.cubix = this.add.image(300, 100, 'cubix')
        .setScale(.7)
        .setDepth(2);
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this.texto = this.add.text(90, 90, 'PUNTOS 0', {fontSize: 30});
    
        const container = this.add.container(0, -300);
        container.add([
            this.contenedor,
            this.cubix,
            this.texto
        ]);


        this.add.tween({
            targets: [container],
            ease: 'Bounce',
            y: 100,
        });
    }
    update(time, delta) {
       
    }
}

export default Bootloader;