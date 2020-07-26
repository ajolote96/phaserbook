class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.atlas('monedas', 'moneda/monedas.png', 'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim', 'moneda/monedas_anim.json');
    }
    create() {
        // this.moneda = this.add.sprite(100, 100, 'monedas');
        this.grupo = this.add.group({
            key: 'monedas',
            repeat: 5,
            maxSize: 3,
            setXY: {
                x: 90,
                y: 150,
                stepX: 50,
                // stepY: 50
            },
            removeCallback: () => {
                this.grupo.create(150, 100, 'monedas');
            }
        });
        
        this.add.tween({
            targets: this.grupo.getChildren(),
            y: 200,
            yoyo: true,
            duration: 500,
            repeat: -1,
            ease: 'Power1'
        });
        this.grupo.getChildren()[1].destroy();
        // this.grupo.add(this.moneda);
        // this.grupo.create(150, 200, 'monedas');

        this.grupo.children.iterate( (moneda) => {
            moneda.setScale(4);
            // moneda.body.setAllowGravity(false);
            // moneda.anims.play('moneda');
        });

        this.grupo.playAnimation('moneda');
        console.log(this.grupo.getChildren());
        
        // this.moneda.anims.play('moneda');
    }
    update(time, delta) {
       
    }
}

export default Bootloader;