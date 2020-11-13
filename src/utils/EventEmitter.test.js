import MyEventEmitter from "utils/EventEmitter";


describe('Check work of MyEventEmitter function', () => {
    it('MyEventEmitter init with correct methods', () => {
        const emitter = new MyEventEmitter();
        expect(typeof emitter.on).toBe('function');
    });
    it('MyEventEmitter listener works', () => {
        const emitter = new MyEventEmitter();
        let isEmitted = false;
        emitter.on("test", () => {isEmitted = true});
        emitter.emit("test");
        expect(isEmitted).toBeTruthy();
    });
});
