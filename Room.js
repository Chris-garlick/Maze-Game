class Room {
    constructor(bool) {
        this.id = 0;
        this.north = null;
        this.east = null;
        this.south = null;
        this.west = null;
        this.passages = [];
        this.bool = bool;
    }
    toString() {
        if (this.north !== null) {
            this.north = "{'isExit': false}"
        }
        if (this.east !== null) {
            this.east = "{'isExit': false}"
        }
        if (this.south !== null) {
            this.south = "{'isExit': false}"
        }
        if (this.west !== null) {
            this.west = "{'isExit': false}"
        }
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
}