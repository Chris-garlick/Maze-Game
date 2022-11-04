class Player {
    constructor() {
        this.cell = this.randomisePlayerPostion();
        this.wealth = 0;
        this.moves = 0;
    }
    randomisePlayerPostion() {
        // RANDOMISES PLAYER START POSITION
        var rand = Math.floor(Math.random() * 24)
        return rand;
    }
    checkBottomBorder(heroX) {
        // CHECKS HERO IS NOT IN BOTTOM ROW
        if ((heroX === 20) || (heroX === 21) || (heroX === 22) || (heroX === 23) || (heroX === 24)) {
            return false;
        } else {
            return true;
        }
    }
    checkRightBorder(heroY) {
        // CHECK HERO IS NOT IN RIGHT COL
        if ((heroY === 0) || (heroY === 5) || (heroY === 10) || (heroY === 15) || (heroY === 20)) {
            return false;
        } else {
            return true;
        }
    }
    checkTopBorder(heroX) {
        // // CHECK HERO IS NOT IN TOP ROW
        if ((heroX === 0) || (heroX === 1) || (heroX === 2) || (heroX === 3) || (heroX === 4)) {
            return false;
        } else {
            return true;
        }
    }
    checkLeftBorder(heroY) {
        // CHECK HERO IS NOT IN LEFT COL
        if ((heroY === 4) || (heroY === 9) || (heroY === 14) || (heroY === 19) || (heroY === 24))  {
            return false;
        } else {
            return true;
        }
    }
}



