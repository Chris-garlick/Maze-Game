class Room {
    constructor(bool) {
        this.id = 0;
        this.north;
        this.east;
        this.south;
        this.west;
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
            } else if (rand == 1) {
                this.east = new Passage();
                this.east.setExit(this.bool);
            } else if (rand == 2) {
                this.south = new Passage(); 
                this.south.setExit(this.bool);
            } else if (rand == 3) {
                this.west = new Passage();
                this.west.setExit(this.bool);
            }  
        }
    }
    setTreasureOrEnemy() {
        // SETS EITHER TREASURE OR ENEMY IF BOTH ARE FALSE.
        if (this.enemy === false && this.treasure === false) {
            let ran = Math.floor(Math.random() * 2)
            if (ran === 0) {
                this.enemy = true;
                this.treasure = false;
            } else if (ran === 1) {
                this.enemy = false;
                this.treasure = true;
            }
        }
    }
    setLastExit(bool) {
        // SETS FINAL EXIT
        var rand = Math.floor(Math.random() * 2)
        if (bool) {
            if (rand === 0) {
                this.north = {'isExit':false}
                this.east = {'isExit':true}
                return 'east';
            } else if (rand === 1) {
                this.west = {'isExit:':false}
                this.south = {'isExit':true}
                return 'south'
            }
        }
    }
}