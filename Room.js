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
    }
    getPassage(n) {
        // CREATE A NEW PASSAGE AND ASSIGN TO NORTH EAST SOUTH OR WEST
        for (let i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * 4)
            if (rand == 0) {
                // var bool = new Passage();
                // bool = bool.setExit(this.bool);
                // if (bool !== undefined) {
                //     this.north = false;
                //     console.log(bool + ' bool')
                // }
                this.north = new Passage();
                this.north.setExit(this.bool);
                console.log(this.north + ' getPassage')
                console.log(JSON.stringify(this.north + ' getPassage JSON'))
                this.passages.push('north');
                this.toString('north')
                console.log(this.north + ' NORTH FROM PASSAGE')
            } else if (rand == 1) {
            //     var bool = new Passage();
            //     bool = bool.setExit(this.bool);
            //     if (bool) {
            //         this.north = false;
            //     }
                this.east = new Passage();
                this.east.setExit(this.bool);
                console.log(this.east + ' getPassage')
                this.passages.push('east');
            } else if (rand == 2) {
                // var bool = new Passage();
                // bool = bool.setExit(this.bool);
                // if (bool) {
                //     this.north = false;
                // }
                this.south = new Passage(); 
                this.south.setExit(this.bool);
                console.log(this.south + ' getPassage')

                this.passages.push('south');
            } else if (rand == 3) {
                // var bool = new Passage();
                // bool = bool.setExit(this.bool);
                // if (bool) {
                //     this.north = false;
                // }
                this.west = new Passage();
                this.west.setExit(this.bool);
                console.log(this.west + ' getPassage')

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
                console.log('WTF ')
            }
        }
    }
}