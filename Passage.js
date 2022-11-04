class Passage {
    constructor() {
        this.isExit;
    }
    setExit(bool) {
        // SETS EXIT TO BE TRUE OF FALSE 
        if (bool) {
            this.isExit = true;
        } else {
            this.isExit = false;
        }
    }
    getExit() {
        // RETURNS EXIT
        return this.isExit;
    }
}