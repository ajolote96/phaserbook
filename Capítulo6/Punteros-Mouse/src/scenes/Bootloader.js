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
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(100, 200, 'cubix_fondo').setInteractive();

        const eventos = Phaser.Input.Events;
        this.input.on(eventos.POINTER_DOWN, (evento) => {
            // console.log("Se ha clicado en el CANVAS");
            // console.log(evento);
        });
        this.input.on(eventos.POINTER_UP, (evento) => {
            // console.log("Se ha levantado el puntero en el CANVAS");
        });
        this.input.on(eventos.POINTER_MOVE, (evento) => {
            if(evento.isDown) {
                this.cubix.x = evento.worldX;
                this.cubix.y = evento.worldY;
            }
        });

        this.input.on(eventos.GAME_OVER, () => {
            console.log('Has entrado en el lienzo');
        });
        this.input.on(eventos.GAME_OUT, () => {
            // console.log('Has salido en el lienzo');
        });

        this.input.on(eventos.POINTER_DOWN_OUTSIDE, () => {
            // console.log('HAS CLICADO FUERA DEL LIENZO');
        });
        this.input.on(eventos.POINTER_UP_OUTSIDE, () => {
            // console.log('HAS LEVANTADO FUERA DEL LIENZO');
        });

        // this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
        //     gameObject.setTint(0x00ff00);
        // });
        // this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });

        // this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
        //     gameObject.setTint(0x0000ff);
        // });
        // this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });
        this.cubix_fondo.on(eventos.POINTER_DOWN, function() {
            this.setTint(0x00ff00);
        });
        this.cubix_fondo.on(eventos.POINTER_UP, function() {
            this.clearTint();
        });
    }
    update(time, delta) {
       
    }
}

export default Bootloader;