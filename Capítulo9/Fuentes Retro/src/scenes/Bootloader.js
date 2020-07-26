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

        this.load.image('fuente', 'fuentes/fuente.png');
        this.load.json('fuente_json', 'fuentes/fuente.json');
    }
    create() {
        const fuenteConfig = this.cache.json.get('fuente_json');
        this.cache.bitmapFont.add('nombreFuente', Phaser.GameObjects.RetroFont.Parse(this, fuenteConfig));
        this.texto = this.add.bitmapText(50, 100, 'nombreFuente', 'PUNTOS 0', 30, 0).setTint(0xffee00);
        this.puntos = 0;

    }
    update(time, delta) {
        this.puntos++;
        this.texto.setText('PUNTOS ' + this.puntos);
       
    }
}

export default Bootloader;