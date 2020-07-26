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
        this.timeline = this.tweens.timeline({
            targets: [this.cubix],
            // duration: 2000,
            // totalDuration: 1000,
            // paused: true,
            loop: -1,
            tweens: [
                {
                    x: 300,
                },
                {
                    y: 300,
                    // offset: "-=500"
                },
                {
                    x: 100
                },
                {
                    y: 100
                },
            ]
        });
        // this.timeline.play();
        
        // this.timeline = this.tweens.createTimeline();

        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 300,
        //     ease: 'Bounce'
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 300
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 100
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 100
        // });

        // this.timeline.play();

    }
    update(time, delta) {
       
    }
}

export default Bootloader;