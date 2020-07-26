import SceneC from '../scenes/SceneC.js';

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['imgA', 'imgB', 'imgC']);
    }
    create() {
        this.scene.add('SceneC', SceneC);

        this.scene.start('SceneA');
        this.scene.launch('SceneB');
        this.scene.launch('SceneC');

        // this.scene.sleep('SceneA');
        // setTimeout(() => {
        //     this.scene.wake('SceneA');
        // }, 4000);

        // setTimeout(() => {
        //     this.scene.pause('SceneA');
        // }, 2000);
        // setTimeout(() => {
        //     this.scene.resume('SceneA');
        // }, 4000);

        // this.scene.stop('SceneC');
        // this.scene.remove('SceneC');

        // this.scene.moveDown('SceneC');
        // this.scene.moveUp('SceneA');

        // this.scene.swapPosition('SceneA', 'SceneC');
        // this.scene.bringToTop('SceneA');
        // this.scene.moveAbove('SceneA', 'SceneC');
        // this.scene.moveBelow('SceneA', 'SceneC');

        // this.scene.sendToBack('SceneC');
        console.log(this.scene.manager.scenes.map( x => x.scene.key));
    }
    update(time, delta) {
       
    }
}

export default Bootloader;