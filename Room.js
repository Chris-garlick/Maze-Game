class Room {
    constructor(bool) {
        this.id = 0;
        this.north;
        this.east;
        this.south;
        this.west;
        this.passages = [];
        this.bool = bool;
        this.enemy = false;
        this.treasure = false;
        this.hero;
        this.last;
    }
    getPassage(n) {
        // CREATE A NEW PASSAGE AND ASSIGN TO NORTH EAST SOUTH OR WEST
        for (let i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * 4)
            if (rand == 0) {
                this.north = new Passage();
                this.north.setExit(this.bool);
                this.passages.push('north');
            } else if (rand == 1) {
                this.east = new Passage();
                this.east.setExit(this.bool);
                this.passages.push('east');
            } else if (rand == 2) {
                this.south = new Passage(); 
                this.south.setExit(this.bool);
                this.passages.push('south');
            } else if (rand == 3) {
                this.west = new Passage();
                this.west.setExit(this.bool);
                this.passages.push('west');
            }  
        }
        console.log(this.passages)
    }
    setTreasureOrEnemy() {
        if (this.enemy === false && this.treasure === false) {
            let ran = Math.floor(Math.random() * 2)
            if (ran === 0) {
                this.enemy = true;
                this.treasure = false;
            } else if (ran === 1) {
                this.enemy = false;
                this.treasure = true;
            } else {
                console.log('erm ')
            }
        }
    }
    setLastExit(bool) {
        var rand = Math.floor(Math.random() * 2)
        if (bool) {
            if (rand === 0) {
                this.north = {'isExit':false}
                this.east = {'isExit':true}
                this.south = {'isExit':true}
            } else if (rand === 1) {
                this.west = {'isExit:':false}
                this.east = {'isExit':true}
                this.south = {'isExit':true}
            }
        }
    }
}