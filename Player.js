class Player {
    constructor() {
        this.cell = 0;
    }
    setPlayer() {
        var start = document.getElementsByClassName(`.${this.cell}`)
        start.innerHTML = '<img src="./img/hero.png"></img>'
        // var img = new Image();
        // img.src = '/img/hero.png'
        // img.appendTo(start)
    }
    checkBottomBorder(heroX) {
        // top = 15 right = 215 left = 15 bottom = 215;
        if (heroX < 200) {
            console.log(heroX + 'hero X from')
            return true;
        }
    }
    checkRightBorder(heroY) {
        // CHECK RIGHT
        if (heroY < 200) {
            return true;
        }
    }
    checkTopBorder(heroX) {
        // // CHECK UP
        if (heroX > 50) {
            console.log(heroX + 'heroX from up')
            return true;
        }
    }
    checkLeftBorder(heroY) {
        // CHECK LEFT
        if (heroY > 50) {
            return true;
        }
    }
    getHeroDetails() {
        var hero = $('.hero');
        var heroX = hero.css('top');
        var heroY = hero.css('left');
        heroX = heroX.replace('px','')
        heroX = parseInt(heroX);
        heroY = heroY.replace('px', '');
        heroY = parseInt(heroY);
        return [heroX, heroY]
    }
    movePlayer(e) {
        if (!e.repeat) {
            if (e.keyCode === 40) {
                // DOWN - 40
                this.cell += 5;
                this.setPlayer();
                var details = this.getHeroDetails();
                var heroX = details[0];
                console.log(heroX)
                if (this.checkBottomBorder(heroX)) {
                    $('.hero').finish().animate({top: "+=50"} , 200, 'linear');
                }
            } else if (e.keyCode === 37) {
                // LEFT - 37
                this.cell -= 1;
                this.setPlayer();
                // $('.hero').css('left', -50);
                var details = this.getHeroDetails();
                var heroY = details[1];
                if (this.checkLeftBorder(heroY)) {
                    $('.hero').finish().animate({left: "-=50"}, 200, 'linear');
                }
            } else if (e.keyCode === 38) {
                // UP - 38
                this.cell -= 5;
                this.setPlayer();
                // $('.hero').css('top', -50);
                var details = this.getHeroDetails();
                var heroX = details[0];
                if (this.checkTopBorder(heroX)) {
                    $('.hero').finish().animate({top: "-=50"}, 200, 'linear');
                }
            } else if (e.keyCode === 39) {
                // RIGHT - 39
                this.cell -= 5;
                this.setPlayer();
                // $('.hero').css('right', 50);
                var details = this.getHeroDetails();
                var heroY = details[1];
                if (this.checkRightBorder(heroY)) {
                    $('.hero').finish().animate({left: "+=50"}, 200, 'linear');
                }
            } else {
                console.log('error on move')
            }
        }
    }
}