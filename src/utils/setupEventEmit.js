import betweenInteger from "./randomIntegerBetween";

function setupEventEmit (fieldname, emitter) {
    setTimeout(() => {
        emitter.emit(fieldname, betweenInteger(1, 100));
        setupEventEmit(fieldname, emitter);
    }, betweenInteger(100, 2000));
}

export default setupEventEmit