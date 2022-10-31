// A Maze has a set of any number of Rooms.
// • Rooms are connected by means of Passages.
// • Each Room may have between 1 and 4 Passages leaving it, in the directions North,
// East, South, or West.
// • Each Passage with isExit == false will connect two Rooms, which might be the
// same.
// • Such Passages are bi-directional, i.e. will take you back to where you came from.
// • Each Passage with isExit == true will connect to exactly one Room.
// • There can be only one Room with an exit Passage.

// • Each Room contains a set of Items, where an Item is either a Treasure or a Threat,
// and has a name.
// • Each Treasure has an Integer value, e.g. Gold (value 100).
// • Each Threat may be defeated by one Action, e.g. a Troll may be defeated by the
// action called Club.
// • Once a Treasure has been collected or a Threat defeated, it will disappear from the
// Room for the remainder of the game.

class Maze {
    constructor() {
        this.rooms = [];
        this.rows = 5;
        this.cols = 5;
        // this.mazeWrapper = this.createWrapper();
    }
    createRooms() {
        for (let i = 0; i < (this.rows * this.cols - 1); i++) {
            var room = new Room();
            room.createPassages(0);
            this.rooms.push(room);
        }
        var exitRoom = new Room();
        exitRoom.createPassages(1);
        this.rooms.push(exitRoom);
    }
    createWrapper() {
        this.mazeWrapper = document.createElement('div');
        this.mazeWrapper.classList.add('wrapper');
        document.body.append(this.mazeWrapper);
    }
    createHTMLEle(dir, dir2, dir3, dir4) {
        var newDiv = document.createElement('div');
        newDiv.classList.add(dir);
        if (dir2) {
            newDiv.classList.add(dir2); 
        }
        if (dir3) {
            newDiv.classList.add(dir3);
        }
        if (dir4) {
            newDiv.classList.add(dir4)
        }
        console.log(newDiv)
        // this.mazeWrapper.appendChild(newDiv);
        document.body.append(newDiv)
    }
    drawRooms() {
        for (let i = 0; i < this.rooms.length; i++) {
            // LOOP THROUGH ROOMS, DRAWING A DIV WITH BORDER IF IT'S NOT AN EXIT
            // ADD IN MORE IFS TO CHECK FOR MORE PASSAGES.
            if (this.rooms[i].hasOwnProperty('north')) {
                this.createHTMLEle('north')
            } else if (this.rooms[i].hasOwnProperty('east')) {
                this.createHTMLEle('east')
            } else if (this.rooms[i].hasOwnProperty('south')) {
                this.createHTMLEle('south')
            } else if (this.rooms[i].hasOwnProperty('west')) {
                this.createHTMLEle('west')
            } else if (i == 25) {
                this.createHTMLEle('west')
            } else {
                console.log('divs not worked')
            }
        }
        this.removeOutterPassages();
    }
    removeOutterPassages() {
        for (let i = 0; i < this.rooms.length; i++) {
            if (i == 0) {
                // TOP LEFT
                this.rooms[i].north = {};
                this.rooms[i].west = {};
                this.rooms[i].top = true;
                this.rooms[i].left = true;
            } else if (i == 1 || i == 2 || i == 3) {
                // TOP
                this.rooms[i].north = {};
                this.rooms[i].top = true;
            } else if (i == 4) {
                // TOP RIGHT
                this.rooms[i].north = {};
                this.rooms[i].east = {};
                this.rooms[i].top = true;
                this.rooms[i].right = true;
            } else if (i == 9 || i == 14 || i == 19) {
                // RIGHT
                this.rooms[i].east = {};
                this.rooms[i].right = true;
            } else if (i == 24) {
                // BOTTOM RIGHT
                this.rooms[i].east = {};
                this.rooms[i].south = {};
                this.rooms[i].bottom = true;
                this.rooms[i].right = true;
            } else if (i == 21 || i == 22 || i == 23) {
                // BOTTOM
                this.rooms[i].south = {};
                this.rooms[i].bottom = true;
            } else if (i == 20) {
                // BOTTOM LEFT
                this.rooms[i].south = {};
                this.rooms[i].west = {};
                this.rooms[i].bottom = true;
                this.rooms[i].left = true;
            } else if (i == 5 || i == 10 || i == 15) {
                this.rooms[i].west = {};
                this.rooms[i].left = true;
            }
        }
    }
}

class Room {
    constructor() {
        this.north;
        this.east;
        this.west;
        this.south;
        this.passages;
        this.top;
        this.right;
        this.bottom;
        this.left;
    }
    randomDirection(num) {
        if (num == 0) {
            return 0;
        }  else if (num == 1) {
            return 1;
        } else if (num == 2) {
            return 2;
        } else if (num == 3) {
            return 3;
        }
    }
    randomiseAmountOfPassages() {
        var numRan = Math.floor(Math.random() * 4);
        if (numRan == 0) {
            return 1;
        } else if (numRan == 1) {
            return 2;
        } else if (numRan == 2) {
            return 3;
        } else if (numRan == 3) {
            return 4;
        }
    }
    randomisePassage(passages) {
        if (passages == 1) {
            this.passages = 1;
            this.south = {'isExit': false}
        } else if (passages == 2) {
            this.passages = 2;
            this.north = {'isExit': false}
            this.west = {'isExit': false}
        } else if (passages == 3) {
            this.passages = 3
            this.north = {'isExit': false}
            this.west = {'isExit': false}
            this.east = {'isExit': false}
        } else if (passages == 4) {
            this.passages = 4
            this.south = {'isExit': false}
            this.north = {'isExit': false}
            this.west = {'isExit': false}
            this.east = {'isExit': false}
        }
    }
    createPassages(num) {
        if (num == 0) {
            var numRan = Math.floor(Math.random() * 4);
            var dir = this.randomDirection(numRan)
            var passages = this.randomiseAmountOfPassages()
            if (dir == 0) {
                this.randomisePassage(passages);
            } else if (dir == 1) {
                this.randomisePassage(passages);
            } else if (dir == 2) {
                this.randomisePassage(passages);
            } else if (dir == 3) {
                this.randomisePassage(passages);
            } else {
                console.log('not 0-3...' + numRan);
            }
        } else {
            this.west = {'isExit': true}
        }
    }
}