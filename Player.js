class Player {
    constructor() {
        this.cell = this.randomisePlayerPostion();
        this.wealth = 0;
        this.moves = 0;
    }
    randomisePlayerPostion() {
        var rand = Math.floor(Math.random() * 24)
        return rand;
    }
    checkBottomBorder(heroX) {
        // top = 15 right = 215 left = 15 bottom = 215;
        if ((heroX === 21) || (heroX === 22) || (heroX === 23) || (heroX === 24)) {
            return false;
        } else {
            return true;
        }
    }
    checkRightBorder(heroY) {
        // CHECK RIGHT
        if ((heroY === 0) || (heroY === 5) || (heroY === 10) || (heroY === 15) || (heroY === 20)) {
            return false;
        } else {
            return true;
        }
    }
    checkTopBorder(heroX) {
        // // CHECK UP
        if ((heroX === 0) || (heroX === 1) || (heroX === 2) || (heroX === 3) || (heroX === 4)) {
            return false;
        } else {
            return true;
        }
    }
    checkLeftBorder(heroY) {
        // CHECK LEFT
        if ((heroY === 4) || (heroY === 9) || (heroY === 14) || (heroY === 19) || (heroY === 24))  {
            return false;
        } else {
            return true;
        }
    }
    // getHeroDetails() {
    //     var hero = $('.hero');
    //     var heroX = hero.css('top');
    //     var heroY = hero.css('left');
    //     heroX = heroX.replace('px','')
    //     heroX = parseInt(heroX);
    //     heroY = heroY.replace('px', '');
    //     heroY = parseInt(heroY);
    //     return [heroX, heroY]
    // }
}



