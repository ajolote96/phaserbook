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
        this.load.audio('8bits', ['8bits.ogg']);
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        const miaudio = this.sound.add('8bits');

        const cursor = this.input.keyboard.createCursorKeys();

        // this.sound.pauseOnBlur = false;
        
        cursor.up.on('down', () => {
            this.sound.pauseAll();
            // this.tweens.add({
            //     targets: [miaudio],
            //     duration: 2000,
            //     volume: 0,
            //     ease: 'Power1'
            // });
            // miaudio.volume -= 0.1;
            // miaudio.mute = true;
            // miaudio.detune += 100;
            // miaudio.rate -= 0.1;
            // miaudio.pause();
        });
        cursor.down.on('down', () => {
            this.sound.resumeAll();
            // miaudio.volume = 1;
            // miaudio.mute = false;
            // miaudio.detune = 1;
            // miaudio.rate = 1;
            // miaudio.resume();
        });
        cursor.left.on('down', () => {
            // miaudio.stop();
            this.sound.stopAll();
        });
        cursor.right.on('down', () => {
            miaudio.play();
        });

    }
    update(time, delta) {
       
    }
}

export default Bootloader;