class SceneC extends Phaser.Scene {
    constructor() {
        super({key: 'SceneC'});
    }
    init() {
        console.log('Scene SceneC');
    }
    create() {
        this.add.image(100, 100, 'imgC');
        // this.scene.stop();
    }
    update(time, delta) {
       
    }
}

export default SceneC;