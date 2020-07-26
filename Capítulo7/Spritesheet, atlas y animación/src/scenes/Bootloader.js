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
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato/tomato_anim.json');
    }
    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);
        this.tomato.anims.play('tomato_walk');

        // this.anims.create({
        //     key: 'tomato_walk',
        //     frames: this.anims.generateFrameNames('tomato', {
        //         prefix: 'tomato_animation_1_',
        //         // suffix: '.png',
        //         frames: [0, 1, 2, 3, 4, 5, 6, 7]
        //     }),
        //     repeat: -1,
        //     frameRate: 15
        // });
        // this.tomato.anims.play('tomato_walk');
        // this.anims.play('tomato_walk', this.tomato);
    }
    update(time, delta) {
       
    }
}

export default Bootloader;