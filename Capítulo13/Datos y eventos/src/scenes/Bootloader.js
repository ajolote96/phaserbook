class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        // this.registry.events.on('evento', (dato) => {
        //     console.log('Se ha emitido el evento ', dato);
        // });
    }
    create() {      
        this.scene.start('SceneA', 200);

        // this.data.set('vidas', 5);
        // this.data.set('monedas', 3);
        // this.data.set('monsters', 3);

        // // this.data.list.vidas -= 2;
        // // this.data.remove('monedas');
        // this.data.reset();
        // console.log(this.data.query('mon'))
    }
    update(time, delta) {
       
    }
}

export default Bootloader;