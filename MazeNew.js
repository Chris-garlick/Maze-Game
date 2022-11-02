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
            room = JSON.stringify(room);
            downRoom = JSON.stringify(downRoom);
            rightRoom = JSON.stringify(rightRoom);

            if (room.includes('east') && rightRoom.includes('west')) {
                console.log(room + ' room')
                console.log(rightRoom + ' right room')
                console.log('No Connection Needed')
            } else if (!room.includes('east') && rightRoom.includes('west')) {
                console.log(room + ' room')
                console.log(rightRoom + ' right room')
                this.rooms[0].east = {'isExit':false}
                $('.0').addClass('east')
                console.log('Connection needed from target cell')
                console.log(this.rooms[0].east);
                console.log(rightRoom + ' rr');
            } else if (room.includes('east') && !rightRoom.includes('west')) {
                console.log(room + ' room')
                console.log(rightRoom + ' right room')
                console.log('Connectioned needed from right Room')
            } else if (!room.includes('east') && !rightRoom.includes('west')) {
                console.log(room + ' room')
                console.log(rightRoom + ' right room')
                console.log('No Connection Required to be built.')
            } else {
                console.log('ermmmm');
            }
            // let roomJSON = JSON.stringify(room)
            // downRoom = JSON.stringify(downRoom)
            // rightRoom = JSON.stringify(rightRoom)
            // console.log(roomJSON + ' json')
            // MAKE RIGHT CONNECTION  
            // this.makeConnection(room, roomJSON, downRoom, rightRoom, 0)
            // MAKE DOWN CONNETION
            // this.makeConnection(room, roomJSON, downRoom, rightRoom, 1)
        // }
    }
    makeConnection(room, roomJSON, downRoom, rightRoom, direction) {
        // RIGHT
        console.log(room + ' room');
        console.log(room + ' THIS IS A TEST');
        var newRoom = JSON.stringify(room)
        console.log(newRoom + ' new room')
        console.log(newRoom['east'] + ' NEW ROOM')
        setTimeout(function() {
            if (direction === 0) {
                if(room['east']){
                    console.log('room east')
                    var eastRoom = room['east'];
                    if (eastRoom === null && rightRoom['west'] !== null) {
                        eastRoom = room['east']['isExit'] = false;
                    }
                }
                if(rightRoom['west']){
                    console.log('room west')
                    var westRoom = room['west']['isExit'];
                    if (westRoom === null) {
                        westRoom = room['west']['isExit'] = false;
                    }
                }
                
                console.log(eastRoom);
                console.log(westRoom);
                // console.log(room['east']['isExit'])
                // console.log(rightRoom)
                if(westRoom && eastRoom){

                }
                if (eastRoom['east']['isExit'] || westRoom['west']['isExit']) {
                    eastRoom['east']['isExit'] = false;
                    westRoom['east']['isExit'] = false;
                    // if (room['east']['isExit'] === false && rightRoom['west']['isExit'] === false) {
                    //     console.log('Connection there')
                    // } else if (room['east']['isExit'] === false  && rightRoom['west']['isExit'] !== false) {
                    //     console.log('Connection needed from source cell')
                    // } else if (eastRoom !== {"isExit":false} && westRoom === {"isExit":false}) {
                    //     console.log('Connection needed from right room')
                    // } else if (eastRoom !== {"isExit":false} && westRoom !== {"isExit":false}) {
                    //     console.log('No Connection to be made')
                    // }
                } else {
                    console.log('both are undefined')
                }
            }  else {
                // DOWN
                if (room.south !== null && downRoom.north !== null) {
                    console.log('Down Connection made')
                } else if (room.south !== null && downRoom.north === null) {
                    console.log('Down Connection needed from source cell')
                } else if (room.south === null && downRoom.north !== null) {
                    console.log('Down Connection needed from right room')
                } else {
                    console.log('Down No Connection to be made')
                }
            }
        }, 2000)

    }
    createRooms() {
        for (let i = 0; i < this.rooms.length; i++) {
            let northEmpty = this.rooms[i].north
            let eastEmpty = this.rooms[i].east
            let westEmpty = this.rooms[i].west
            let southEmpty = this.rooms[i].south
            if (northEmpty !== null) {
                // console.log(northEmpty + ' north Empty')
            } 
            if (eastEmpty !== null) {
                // console.log(eastEmpty + ' east Empty')
            } 
            if (westEmpty !== null) {
                // console.log(westEmpty + ' west Empty')
            } 
            if (southEmpty !== null) {
                // console.log(southEmpty + ' south Empty')
            } 
            // this.sortLayout(i, northEmpty, southEmpty, eastEmpty, westEmpty)
            this.createHTMLEle(this.rooms[i], this.rooms[i].north, this.rooms[i].south, this.rooms[i].east, this.rooms[i].west)
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