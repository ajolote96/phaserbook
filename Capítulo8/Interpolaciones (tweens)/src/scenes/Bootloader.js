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
        this.cubix = this.add.image(100, 100, 'cubix');
        // this.cubix_fondo = this.add.image(160, 100, 'cubix_fondo');
        // console.log(this.cubix);
        this.tweens = this.add.tween({
            targets: [this.cubix],
            // ease: 'Bounce',
            duration: 1000,
            y: 300,
            // x: {
            //     value: 200,
            //     ease: 'Elastic',
            //     duration: 3000
            // },
            repeat: 0,
            yoyo: true,
            // delay: 1000
            // hold: 1000
            // repeatDelay: 1000,
            onStart: () => {
                console.log('Inicia la tween');
            },
            onRepeat: () => {
                console.log('Se ha repetido');
            },
            onYoyo: (tween, obj, target) => {
                target.setTint(0xff0000);
                console.log('Se ha hecho YOYO');
            },
            onComplete: (tween, obj, target) => {
                // target.setTint(0xff0000);
                console.log('Has completado el tween');
            },
            onYoyoParams: [this.cubix]
            // onCompleteParams: [this.cubix]
        });
    }
    update(time, delta) {
       
    }
}

export default Bootloader;