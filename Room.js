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
    toString(dir) {
        // if (this.north !== null) {
        //     this.north = "{'isExit': false}"
        // }
        // if (this.east !== null) {
        //     this.east = "{'isExit': false}"
        // }
        // if (this.south !== null) {
        //     this.south = "{'isExit': false}"
        // }
        // if (this.west !== null) {
        //     this.west = "{'isExit': false}"
        // }
        if (this.dir === null) {
            this.dir = "{'isExit': false}"
        }
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
}