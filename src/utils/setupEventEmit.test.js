import setupEventEmit from "./setupEventEmit";
import MyEventEmitter from "utils/EventEmitter";

describe('setupEventEmit tests', () => {
    it('check for multiple event emits after setupEventEmit func', () => {
        jest.useFakeTimers();
        const emitter = new MyEventEmitter();
        let eventsCount = 0;
        emitter.on("test", () => {
            eventsCount++;
        });
        setupEventEmit("test", emitter);
        jest.advanceTimersByTime(5000);
        expect(eventsCount).toBeGreaterThan(1);
    });
});
