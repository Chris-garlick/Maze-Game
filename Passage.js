class Passage {
    constructor() {
        this.isExit;
    }
    setExit(bool) {
        if (bool) {
            this.isExit = true;
        } else {
            this.isExit = false;
        }
    }
    getExit() {
        return this.isExit;
    }
}