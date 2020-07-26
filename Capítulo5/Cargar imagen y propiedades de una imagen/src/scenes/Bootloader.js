class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        // this.load.image('cubix_fondo', 'cubix_fondo.png');
        // this.load.image('cubix');
        this.load.image(['cubix', 'cubix_fondo']);
    }
    create() {
        this.cubix = this.add.image(130, 130, 'cubix');
        this.cubix_fondo = this.add.image(100, 100, 'cubix_fondo');
        // this.cubix.setOrigin(0.5, 0.5);
        // this.cubix.flipY = true;
        // this.cubix.setVisible(0);
        // this.cubix.setScale(2);
        // this.cubix.setAlpha(1);
        // this.cubix.setTint(0xff0000);
        // this.cubix.x = 200;
        // this.cubix.y = 200;
        
        this.cubix.setDepth(1);
        this.cubix_fondo.setDepth(2);
        console.log(this.cubix);

    }
    update(time, delta) {
        // this.cubix.angle++;
       
    }
}

export default Bootloader;