class Maze {
    constructor() {
        this.rooms = [];
        this.rows = 5;
        this.cols = 5;
        this.mazeDivs = [];
        this.hero = new Player();
    }
    displayRooms() {
        var maze = document.querySelector('#maze');
        this.mazeDivs.forEach(div => {
            maze.append(div);
        });
        this.removePassages();
        this.checkFinalBorders();
    }
    setPlayer() {
        this.hero.setPlayer();
    }
    removePassages() {
        for (let i = 0; i < this.rooms.length; i++) {
            let room = this.rooms[i]
            let downRoom = this.rooms[i+5]
            let upRoom = this.rooms[i-5]
            let rightRoom = this.rooms[i+1]
            let leftRoom = this.rooms[i-1]
            room = JSON.stringify(room);
            downRoom = JSON.stringify(downRoom);
            rightRoom = JSON.stringify(rightRoom);
            upRoom = JSON.stringify(upRoom);
            leftRoom = JSON.stringify(leftRoom);
            let rightSide = [4, 9, 14, 19, 24]
            let bottomSide = [20, 21, 22, 23, 24]
            let topSide = [0, 1, 2, 3, 4]
            let leftSide = [0, 5, 10, 15, 20]
            if (topSide.includes(i)) {
                console.log('top side skippers');
            } else {
                console.log(i + ' I')
                // CHECK RIGHT ROOMS 
                if (room.includes('north') && upRoom.includes('south')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Up No Connection Needed')
                } else if (!room.includes('north') && upRoom.includes('south')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].north = {'isExit':false}
                    $(`.${i}`).addClass('north')
                    $(`.${i}`).css('border-right', "0px !important")
                } else if (room.includes('north') && !upRoom.includes('south')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i - 5].south = {'isExit':false}
                    $(`.${i - 5}`).addClass('south')
                } else if (!room.includes('north') && !upRoom.includes('south')) {
                    // IF NEITHER DO
                    console.log('Up No Connection Required to be built.')
                } else {
                    console.log('ermmmm');
                }
            }
            if (rightSide.includes(i)) {
                console.log('right side skippers');
            } else {
                console.log(i + ' I')
                // CHECK RIGHT ROOMS 
                if (room.includes('east') && rightRoom.includes('west')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Right No Connection Needed')
                } else if (!room.includes('east') && rightRoom.includes('west')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].east = {'isExit':false}
                    $(`.${i}`).addClass('east')
                    $(`.${i}`).css('border-right', "0px !important")
                } else if (room.includes('east') && !rightRoom.includes('west')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i + 1].west = {'isExit':false}
                    $(`.${i + 1}`).addClass('west')
                } else if (!room.includes('east') && !rightRoom.includes('west')) {
                    // IF NEITHER DO
                    console.log('Right No Connection Required to be built.')
                } else {
                    console.log('ermmmm');
                }
            }
            if (bottomSide.includes(i)) {
                console.log('bottom side skippers');
            } else {
                if (room.includes('south') && downRoom.includes('north')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Down No Connection Needed')
                } else if (!room.includes('south') && downRoom.includes('north')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].south = {'isExit':false}
                    $(`.${i}`).addClass('south')
                    console.log(this.rooms[i].south);
                } else if (room.includes('south') && !downRoom.includes('north')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i+5].north = {'isExit':false}
                    $(`.${i + 5}`).addClass('north')
                    console.log('Down Connectioned needed from down Room')
                } else if (!room.includes('south') && !downRoom.includes('north')) {
                    console.log('Down No Connection Required to be built.')
                } else {
                    console.log('ermmmm');
                }
            }     
            if (leftSide.includes(i)) {
                console.log('top side skippers');
            } else {
                console.log(i + ' I')
                // CHECK RIGHT ROOMS 
                if (room.includes('east') && leftRoom.includes('west')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Up No Connection Needed')
                } else if (!room.includes('east') && leftRoom.includes('west')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].east = {'isExit':false}
                    $(`.${i}`).addClass('east')
                    $(`.${i}`).css('border-right', "0px !important")
                } else if (room.includes('east') && !leftRoom.includes('west')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i - 1].west = {'isExit':false}
                    $(`.${i - 1}`).addClass('west')
                } else if (!room.includes('east') && !leftRoom.includes('west')) {
                    // IF NEITHER DO
                    console.log('Up No Connection Required to be built.')
                } else {
                    console.log('ermmmm');
                }
            }  
        }
    }
    checkFinalBorders() {
        let classes = ['north', 'east', 'south', 'west']
        let rightSide = [4, 9, 14, 19, 24]
        let bottomSide = [20, 21, 22, 23, 24]
        let topSide = [0, 1, 2, 3, 4]
        let leftSide = [0, 5, 10, 15, 20]
        let allSquaresLeft = [6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18]
        for (let i = 0; i < this.rooms.length; i++) {
            // loop through maze and find any divs with only one class
            var rand = Math.floor(Math.random() * 4)
            let thisDiv = $(`.${i}`)
            var count = thisDiv.hasClasses(classes);
            if (count === 1) {
                if (!bottomSide.includes(i)){
                    if ((rand === 0) || (rand === 2)) {
                        if ($(`.${i}`).hasClass('north')) {
                            this.rooms[i].east = {'isExit':false};
                            this.rooms[i+1].west = {'isExit':false};
                            $(`.${i}`).addClass('east')  
                            $(`.${i+1}`).addClass('west')  
                        } else {
                            this.rooms[i].north = {'isExit':false}
                            this.rooms[i+5].south = {'isExit':false};
                            $(`.${i}`).addClass('north')
                            $(`.${i+5}`).addClass('south')
                        }
                    } else if ((rand === 1) || (rand === 3) ) {
                        if ($(`.${i}`).hasClass('east')) {
                            this.rooms[i].south = {'isExit':false};
                            this.rooms[i+5].north = {'isExit':false};
                            $(`.${i}`).addClass('south')  
                            $(`.${i+5}`).addClass('north')  
                        } else {
                            this.rooms[i].east = {'isExit':false}
                            this.rooms[i+1].west = {'isExit':false}
                            $(`.${i}`).addClass('east')
                            $(`.${i+1}`).addClass('west')
                        }
                    }
                }
                if (!rightSide.includes(i)) { 
                    if (rand === 1) {
                        if ($(`.${i}`).hasClass('east')) {
                            this.rooms[i].south = {'isExit':false};
                            this.rooms[i+5].north = {'isExit':false};
                            $(`.${i}`).addClass('south')  
                            $(`.${i+5}`).addClass('north')  
                        } else {
                            this.rooms[i].east = {'isExit':false}
                            this.rooms[i+1].west = {'isExit':false}
                            $(`.${i}`).addClass('east')
                            $(`.${i+1}`).addClass('west')
                        }
                    } 
                }
                if (!topSide.includes(i)) {
                    if (rand === 2) {
                        if ($(`.${i}`).hasClass('west')) {
                            this.rooms[i].south = {'isExit':false};
                            this.rooms
                        }
                    }
                }
                if (allSquaresLeft.includes(i)) {
                    if (rand === 0) {

                    }
                }
            }
        }
    }
//     makeSingleConnection(room, roomJSON, downRoom, rightRoom, direction) {
// // NEW - TAKE A SINGLE ROOM AND MAKE EITHER RIGHT OR DOWN A PASSAGE

//         // RIGHT
//         console.log(room + ' room');
//         console.log(room + ' THIS IS A TEST');
//         var newRoom = JSON.stringify(room)
//         console.log(newRoom + ' new room')
//         console.log(newRoom['east'] + ' NEW ROOM')
//         setTimeout(function() {
//             if (direction === 0) {
//                 if(room['east']){
//                     console.log('room east')
//                     var eastRoom = room['east'];
//                     if (eastRoom === null && rightRoom['west'] !== null) {
//                         eastRoom = room['east']['isExit'] = false;
//                     }
//                 }
//                 if(rightRoom['west']){
//                     console.log('room west')
//                     var westRoom = room['west']['isExit'];
//                     if (westRoom === null) {
//                         westRoom = room['west']['isExit'] = false;
//                     }
//                 }
                
//                 console.log(eastRoom);
//                 console.log(westRoom);
//                 // console.log(room['east']['isExit'])
//                 // console.log(rightRoom)
//                 if(westRoom && eastRoom){

//                 }
//                 if (eastRoom['east']['isExit'] || westRoom['west']['isExit']) {
//                     eastRoom['east']['isExit'] = false;
//                     westRoom['east']['isExit'] = false;
//                     // if (room['east']['isExit'] === false && rightRoom['west']['isExit'] === false) {
//                     //     console.log('Connection there')
//                     // } else if (room['east']['isExit'] === false  && rightRoom['west']['isExit'] !== false) {
//                     //     console.log('Connection needed from source cell')
//                     // } else if (eastRoom !== {"isExit":false} && westRoom === {"isExit":false}) {
//                     //     console.log('Connection needed from right room')
//                     // } else if (eastRoom !== {"isExit":false} && westRoom !== {"isExit":false}) {
//                     //     console.log('No Connection to be made')
//                     // }
//                 } else {
//                     console.log('both are undefined')
//                 }
//             }  else {
//                 // DOWN
//                 if (room.south !== null && downRoom.north !== null) {
//                     console.log('Down Connection made')
//                 } else if (room.south !== null && downRoom.north === null) {
//                     console.log('Down Connection needed from source cell')
//                 } else if (room.south === null && downRoom.north !== null) {
//                     console.log('Down Connection needed from right room')
//                 } else {
//                     console.log('Down No Connection to be made')
//                 }
//             }
//         }, 2000)

//     }
    createRooms() {
        for (let i = 0; i < this.rooms.length; i++) {
            this.createHTMLEle(this.rooms[i], this.rooms[i].north, this.rooms[i].south, this.rooms[i].east, this.rooms[i].west, this.rooms[i].enemy, this.rooms[i].treasure)
        }
    }
    createHTMLEle(room, north, south, east, west, item1, item2) {
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
        if (item1) {
            newDiv.classList.add('enemy')
        }
        if (item2) {
            newDiv.classList.add('treasure')
        }
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
                room.setTreasureOrEnemy();
                this.rooms.push(room);
                console.log(room)
            }
        }
        // console.log(this.rooms)
    }
    movePlayer(e) {
        if (!e.repeat) {
            if (e.keyCode === 40) {
                // DOWN - 40
                console.log(this.hero.cell + ' hero cell')
                let divCell = $(`.${this.hero.cell}`)

                console.log(divCell)
                var canMove = divCell.attr()
                console.log(canMove)
                if (canMove) {
                    console.log('Free to move')
                } else {
                    console.log('not free to move')
                }
                this.hero.cell += 5;
                this.hero.setPlayer();
                var details = this.hero.getHeroDetails();
                var heroX = details[0];
                console.log(heroX)
                if (this.hero.checkBottomBorder(heroX)) {
                    $('.hero').finish().animate({top: "+=50"} , 200, 'linear');
                }
            } else if (e.keyCode === 37) {
                // LEFT - 37
                this.hero.cell -= 1;
                this.hero.setPlayer();
                // $('.this.hero').css('left', -50);
                var details = this.hero.getHeroDetails();
                var heroY = details[1];
                if (this.hero.checkLeftBorder(heroY)) {
                    $('.hero').finish().animate({left: "-=50"}, 200, 'linear');
                }
            } else if (e.keyCode === 38) {
                // UP - 38
                this.hero.cell -= 5;
                this.hero.setPlayer();
                // $('.this.hero').css('top', -50);
                var details = this.hero.getHeroDetails();
                var heroX = details[0];
                if (this.hero.checkTopBorder(heroX)) {
                    $('.this.hero').finish().animate({top: "-=50"}, 200, 'linear');
                }
            } else if (e.keyCode === 39) {
                // RIGHT - 39
                this.hero.cell -= 5;
                this.hero.setPlayer();
                // $('.this.hero').css('right', 50);
                var details = this.hero.getHeroDetails();
                var heroY = details[1];
                if (this.hero.checkRightBorder(heroY)) {
                    $('.this.hero').finish().animate({left: "+=50"}, 200, 'linear');
                }
            } else {
                console.log('error on move')
            }
        }
    }
}

$.fn.extend({
    hasClasses: function (selectors) {
        var self = this;
        var count = 0;
        for (var i in selectors) {
            if ($(self).hasClass(selectors[i])) {
                count++;
            }
        }
        return count;
    }
});
