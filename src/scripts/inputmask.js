import inputMask from "../scripts/inputmask";

export default class InputMaskPlug {
    constructor(block) {
        this.block = block;

        this.init();
    }

    init() {
        inputMask().mask(this.block);
    }
}