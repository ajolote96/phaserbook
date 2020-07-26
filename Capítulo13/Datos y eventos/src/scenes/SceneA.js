class SceneA extends Phaser.Scene {
    constructor() {
        super('SceneA');
    }
    init(dato) {
        console.log('Has hecho estos puntos: ', dato);
    }
    preload() {
        // this.registry.events.emit('evento', 200);
    }
}

export default SceneA;