class Maze {
    constructor() {
        this.rooms = [];
        this.rows = 5;
        this.cols = 5;
        this.mazeDivs = [];
    }
    displayRooms() {
        var maze = document.querySelector('#maze');
        this.mazeDivs.forEach(div => {
            maze.append(div);
        });
        this.removePassages();
    }
    removePassages() {
        // for (let i = 0; i < this.rooms.length; i++) {
            console.log(this.rooms)
            let room = this.rooms[0]
            let downRoom = this.rooms[5]
            let rightRoom = this.rooms[1]
            // MAKE RIGHT CONNECTION
            console.log(room + ' room.east')
            console.log(rightRoom + ' rightRoom');
            this.makeConnection(room, downRoom, rightRoom, 0)
            // MAKE DOWN CONNETION
            console.log(rightRoom + ' rightRoom.west')
            this.makeConnection(room, downRoom, rightRoom, 1)
        // }
    }
    makeConnection(room, downRoom, rightRoom, direction) {
        // RIGHT
        if (direction === 0) {
            if (room.east !== null && rightRoom.west !== null) {
                console.log('Connection made')
            } else if (room.east !== null && rightRoom.west === null) {
                console.log('Connection needed from source cell')
            } else if (room.east === null && rightRoom.west !== null) {
                console.log('Connection needed from right room')
            } else {
                console.log('No Connection to be made')
            }
        }  else {
            // DOWN
            if (room.south !== null && rightRoom.north !== null) {
                console.log('Connection made')
            } else if (room.south !== null && rightRoom.north === null) {
                console.log('Connection needed from source cell')
            } else if (room.south === null && rightRoom.north !== null) {
                console.log('Connection needed from right room')
            } else {
                console.log('No Connection to be made')
            }
        }
    }
    createRooms() {
        for (let i = 0; i < this.rooms.length; i++) {
            let northEmpty = this.rooms[i].north
            let eastEmpty = this.rooms[i].east
            let westEmpty = this.rooms[i].west
            let southEmpty = this.rooms[i].south
            if (northEmpty !== null) {
                console.log(northEmpty + ' north Empty')
            } 
            if (eastEmpty !== null) {
                console.log(eastEmpty + ' east Empty')
            } 
            if (westEmpty !== null) {
                console.log(westEmpty + ' west Empty')
            } 
            if (southEmpty !== null) {
                console.log(southEmpty + ' south Empty')
            } 
            // this.sortLayout(i, northEmpty, southEmpty, eastEmpty, westEmpty)
            this.createHTMLEle(this.rooms[i], this.rooms[i].north, this.rooms[i].south, this.rooms[i].east, this.rooms[i].west)
            // this.sortLayout(i)
        }
    }
    sortLayout() {
// USE JQUERY AND CSS TO TARGET DIVS AT LOOP AND REMOVE CERTAIN BORDERS
        if ($(`.0`).hasClass('north')) {
            $(`.0`).removeClass('north')
        }
        if ($('.0').hasClass('west')) {
            $(`.0`).removeClass('west')
        }
    }
    createHTMLEle(room, north, south, east, west) {
        var newDiv = document.createElement('div');
        var className = room.id;
        newDiv.classList.add(className)
        console.log(typeof north)
        room.toString();
        console.log(room.north + ' NORTH');
        if (north) {
            newDiv.classList.add('north')
        }
        if (south) {
            newDiv.classList.add('south')
        }
        if (east) {
            newDiv.classList.add('east')
        }
        if (west) {
            newDiv.classList.add('west')
        }
        // if (north === "{'isExit':false}") {
        //     console.log('WOOOOOOOO')
        //     north = 'north'
        //     newDiv.classList.add(north)
        // }
        // else {
        //     newDiv.classList.add(north)
        // }
        // if (east === object) {
        //     east = 'east'
        //     newDiv.classList.add(east)
        // } else {
        //     newDiv.classList.add(east)
        // }
        // if (south === object) {
        //     console.log(south + ' SOUTH')
        //     newDiv.classList.add(south)
        // } else {
        //     newDiv.classList.add(south)
        // }
        // if (west === object) {
        //     console.log(west + ' WEST')
        //     newDiv.classList.add(west)
        // } else {
        //     newDiv.classList.add(west)
        // }
        this.mazeDivs.push(newDiv)
    }
    genRooms() {
        for (let i = 0; i < 25; i++) {
            var rand = (Math.floor(Math.random() * 4) + 1)
            if (i == 24) {
                var exitRoom = new Room(true);
                exitRoom.id = i;
                exitRoom.getPassage(rand);
                this.rooms.push(exitRoom);
            } else {
                var room = new Room(false);
                room.id = i;
                room.getPassage(rand);
                this.rooms.push(room);
            }
        }
        // console.log(this.rooms)
    }
}