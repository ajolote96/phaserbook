class SceneB extends Phaser.Scene {
    constructor() {
        super({key: 'SceneB'});
    }
    init() {
        console.log('Scene SceneB');
    }
    create() {
        this.add.image(100, 100, 'imgB');
    }
    update(time, delta) {
       
    }
}

export default SceneB;