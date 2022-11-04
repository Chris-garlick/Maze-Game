class Maze {
    constructor() {
        this.rooms = [];
        this.mazeDivs = [];
        this.hero = new Player();
    }
    displayRooms() {
        // LOOPS THROUGH MAZE DIVS AND OUTPUTS THEM ONTO DOM
        var maze = document.querySelector('#maze');
        this.mazeDivs.forEach(div => {
            maze.append(div);
        });
        this.removePassages();
        this.checkFinalBorders();
    }
    removePassages() {
        for (let i = 0; i < this.rooms.length; i++) {
            // LOOPS THROUGH CURRENT ROOM AND CHECKS 
            // ADJACENT ROOMS FOR A PASSAGE. IF ONLY ONE HAS, CREATE A CONNETION
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
            if (topSide.includes(i)) {} else {
                // CHECK RIGHT ROOMS 
                if (room.includes('north') && upRoom.includes('south')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Up No Connection Needed')

                } else if (!room.includes('north') && upRoom.includes('south')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].north = {'isExit':false}
                    $(`.${i}`).addClass('north')

                } else if (room.includes('north') && !upRoom.includes('south')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i - 5].south = {'isExit':false}
                    $(`.${i - 5}`).addClass('south')

                } else if (!room.includes('north') && !upRoom.includes('south')) {
                    // IF NEITHER DO
                    console.log('Up No Connection Required to be built.')

                }
            }
            if (rightSide.includes(i)) {} else {
                console.log(i + ' I')
                // CHECK RIGHT ROOMS 
                if (room.includes('east') && rightRoom.includes('west')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Right No Connection Needed')

                } else if (!room.includes('east') && rightRoom.includes('west')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].east = {'isExit':false}
                    $(`.${i}`).addClass('east')

                } else if (room.includes('east') && !rightRoom.includes('west')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i + 1].west = {'isExit':false}
                    $(`.${i + 1}`).addClass('west')

                } else if (!room.includes('east') && !rightRoom.includes('west')) {
                    // IF NEITHER DO
                    console.log('Right No Connection Required to be built.')
                } 
            }
            if (bottomSide.includes(i)) {} else {
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

                } 
            }     
            if (leftSide.includes(i)) {} else {
                console.log(i + ' I')
                // CHECK RIGHT ROOMS 
                if (room.includes('east') && leftRoom.includes('west')) {
                    // IF BOTH HAVE PASSAGE
                    console.log('Up No Connection Needed')

                } else if (!room.includes('east') && leftRoom.includes('west')) {
                    // IF MAIN ROOM DOESNT BUT TARGET DOES
                    this.rooms[i].east = {'isExit':false}
                    $(`.${i}`).addClass('east')

                } else if (room.includes('east') && !leftRoom.includes('west')) {
                    // IF MAIN ROOM DOES BUT TARGET DOESNT
                    this.rooms[i - 1].west = {'isExit':false}
                    $(`.${i - 1}`).addClass('west')

                } else if (!room.includes('east') && !leftRoom.includes('west')) {
                    // IF NEITHER DO
                    console.log('Up No Connection Required to be built.')

                } 
            }  
        }
    }
    checkFinalBorders() {
        let classes = ['north', 'east', 'south', 'west']
        let rightSide = [4, 9, 14, 19, 24]
        let bottomSide = [20, 21, 22, 23, 24]
        for (let i = 0; i < this.rooms.length; i++) {
            // LOOP THROUGH MAZE AND TRY AND FIND DIVS WITH ONLY 1 CLASS
            var rand = Math.floor(Math.random() * 4)
            let thisDiv = $(`.${i}`)
            var count = thisDiv.hasClasses(classes);
            if (count === 1) {
                if (!bottomSide.includes(i)){
                    if ((rand === 0) || (rand === 2)) {
                        if ($(`.${i}`).hasClass('north')) {
                            // IF ONLY NORTH, ADD EAST
                            this.rooms[i].east = {'isExit':false};
                            this.rooms[i+1].west = {'isExit':false};
                            $(`.${i}`).addClass('east')  
                            $(`.${i+1}`).addClass('west')  
                        } else {
                            // OTHERWISE, ADD NORTH
                            this.rooms[i].south = {'isExit':false}
                            this.rooms[i+5].north = {'isExit':false};
                            $(`.${i}`).addClass('south')
                            $(`.${i+5}`).addClass('north')
                        }
                    } else if ((rand === 1) || (rand === 3) ) {
                        if ($(`.${i}`).hasClass('east')) {
                            // IF ONLY EAST ADD SOUTH
                            this.rooms[i].south = {'isExit':false};
                            this.rooms[i+5].north = {'isExit':false};
                            $(`.${i}`).addClass('south')  
                            $(`.${i+5}`).addClass('north')  
                        } else {
                            // OTHERWISE ADD EAST
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
            }
        }
    }
    createRooms() {
        // LOOPS THROUGH LIST OF ROOMS AND CREATES AN HTML ELEMENT
        for (let i = 0; i < this.rooms.length; i++) {
            this.createHTMLEle(this.rooms[i], this.rooms[i].north, this.rooms[i].south, this.rooms[i].east, this.rooms[i].west, this.rooms[i].enemy, this.rooms[i].treasure, this.rooms[i].hero, this.rooms[i].last)
        }
    }
    createHTMLEle(room, north, south, east, west, item1, item2, hero, last) {
        // CREATES A NEW HTML DIV ELEMENT WITH REQUIRED CLASS NAMES
        var newDiv = document.createElement('div');
        var className = room.id;
        newDiv.classList.add(className)
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
        if (hero) {
            newDiv.classList.add('hero')
        }
        if (last) {
            newDiv.classList.add('last')
        }
        this.mazeDivs.push(newDiv)
    }
    genRooms() {
        for (let i = 0; i <= 24; i++) {
            // LOOPS THROUGH CREATING A LIST OF 25 ROOMS
            var rand = (Math.floor(Math.random() * 4) + 1)
            if (i == 24) {
                var exitRoom = new Room(true);
                exitRoom.id = i;
                exitRoom.getPassage(rand);
                exitRoom.setLastExit(true);
                exitRoom.last = true;
                this.rooms.push(exitRoom);
            } else {
                var room = new Room(false);
                room.id = i;
                room.getPassage(rand);
                room.setTreasureOrEnemy();
                if (i === this.hero.cell) {
                    room.hero = true;
                    room.enemy = false;
                    room.treasure = false;
                }
                this.rooms.push(room);
            }
        }
    }
    canMove(i, dir) {
        // CHECKS IF THERE IS A PASSAGE
        var mainCell = this.rooms[i]
        let targetDownCell = this.rooms[i + 5]
        let targetRightCell = this.rooms[i + 1]
        let targetLeftCell = this.rooms[i - 1]
        let targetUpCell = this.rooms[i - 5]

        mainCell = JSON.stringify(mainCell)
        targetDownCell = JSON.stringify(targetDownCell)
        targetRightCell = JSON.stringify(targetRightCell)
        targetLeftCell = JSON.stringify(targetLeftCell)
        targetUpCell = JSON.stringify(targetUpCell)

        if (dir === 'east') {
            // CHECK RIGHT
            if (targetRightCell !== undefined) {
                if (mainCell.includes('east') && targetRightCell.includes('west')) {
                    return true;
                } else {
                    return false;
                }
            } 
            mainCell = JSON.stringify(mainCell)
            if (mainCell.includes('24')) {
                return true;
            }
        } else if (dir === 'south') {
            // CHECK DOWN
            if (targetDownCell !== undefined) {
                if (mainCell.includes('south') && targetDownCell.includes('north')) {
                    return true;
                } else {
                    return false;
                }
            } 
            mainCell = JSON.stringify(mainCell)
            if (mainCell.includes('24')) {
                return true;
            }
        } else if (dir === 'west') {
            // CHECK LEFT
            if (targetLeftCell !== undefined) {
                if (mainCell.includes('west') && targetLeftCell.includes('east')) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else if (dir === 'north') {
            // CHECK NORTH
            if (targetUpCell !== undefined) {
                if (mainCell.includes('north') && targetUpCell.includes('south')) {
                    return true;
                } else {
                    return false;
                } 
            } else {
                return false;
            }
        }
    }
    gameOver() {
        $('#maze').css('display', 'none')
        $('.rightSide').addClass('hide')
        $('.leftSide').addClass('over')
        $('.gameOver').removeClass('hide')
        $('.gameOver .moves span').html(this.hero.moves)
        $('.gameOver .wealth span').html(this.hero.wealth)
        console.log(this.hero.wealth);
    }
    movePlayer(e) {
        // MOVES THE PLAYER ON KEYDOWN
        let heroCell = this.hero.cell;
        heroCell = JSON.stringify(heroCell)
        if (!e.repeat) {
            if (e.keyCode === 40) {
                // IF USER PRESSES DOWN
                if (this.canMove(this.hero.cell, 'south')) {
                    // IF PLAYER CAN MOVE DOWN
                    $('.userInfo').html("")
                    if (heroCell === '24') {
                        // IF HERO IS IN FINAL CELL
                        this.moveHero('south')
                        this.gameOver();
                    } else {
                        if (this.hero.checkBottomBorder(heroCell)) {
                            // IF HERO IS INSIDE GAME BORDER
                            this.moveHero('south')
                            $('.wealth span').html(this.hero.wealth);
                            this.hero.cell += 5
                            this.hero.moves += 1;
                            document.querySelector('.gameScore .moves span').innerHTML = this.hero.moves;
                        }
                    }
                } else {
                    $('.userInfo').html("You can't go that way!")
                }
            } else if (e.keyCode === 37) {
                // IF USER PRESSES LEFT
                if (this.canMove(this.hero.cell, 'west')) {
                    // IF USER CAN MOVE LEFT
                    $('.userInfo').html("")
                    if (this.hero.checkLeftBorder(heroCell)) {
                        // IF HERO IS INSIDE GAME BORDER
                        this.moveHero('west')
                        $('.wealth span').html(this.hero.wealth);
                        this.hero.cell -= 1;
                        this.hero.moves += 1;
                        document.querySelector('.gameScore .moves span').innerHTML = this.hero.moves;
                    }
                } else {
                    $('.userInfo').html("You can't go that way!")
                }
            } else if (e.keyCode === 38) {
                // IF USER PRESSES UP
                if (this.canMove(this.hero.cell, 'north')) {
                    // IF USER CAN MOVE UP 
                    $('.userInfo').html("")
                    if (this.hero.checkTopBorder(heroCell)) {
                        // IF HERO IS INSIDE GAME BORDER
                        this.moveHero('north')
                        $('.wealth span').html(this.hero.wealth);
                        this.hero.cell -= 5;
                        this.hero.moves += 1;
                        document.querySelector('.gameScore .moves span').innerHTML = this.hero.moves;
                    }
                } else {
                    $('.userInfo').html("You can't go that way!")
                } 
            } else if (e.keyCode === 39) {
                // IF USER PRESSES RIGHT
                if (this.canMove(this.hero.cell, 'east')) {
                    // IF HERO CAN MOVE RIGHT
                    $('.userInfo').html("")
                    if (heroCell === '24') {
                        // IF HERO IS IN FINAL CELL
                        console.log(this.hero.cell)
                        this.moveHero('east')
                        this.gameOver();
                    } else {
                        if (this.hero.checkRightBorder(heroCell)) {
                            // IF HERO IS IN GAME BORDER
                            this.moveHero('east')
                            $('.wealth span').html(this.hero.wealth);
                            this.hero.cell += 1
                            this.hero.moves += 1;
                            document.querySelector('.gameScore .moves span').innerHTML = this.hero.moves;
                        }
                    }
                } else {
                    $('.userInfo').html("You can't go that way!")
                }
            } else {}
        }
    }
    moveHero(direction) {
        // REMOVE HERO CLASS FROM CURRENT CELL
        // ADD HERO CLASS TO NEW CELL
        let currentCell = this.hero.cell
        currentCell = JSON.stringify(currentCell)
        currentCell = parseInt(currentCell)
        let downCell = currentCell + 5;
        let rightCell = currentCell + 1;
        let upCell = currentCell - 5
        let leftCell = currentCell - 1;
        if (direction === 'north') {
            // IF NORTH, REMOVE HERO AND REPAINT IN CELL ABOVE
            // REMOVING TREASURE AND ENEMIES.
            $(`.${currentCell}`).removeClass('hero');
            $(`.${upCell}`).addClass('hero')
            $(`.${upCell}`).removeClass('enemy')
            if ($(`.${upCell}`).hasClass('treasure')) {
                $(`.${upCell}`).removeClass('treasure')
                this.hero.wealth += 100;
            }
        } else if (direction === 'east') {
            // IF EAST REMOVE HERO AND REPAINT IN CELL RIGHT, REMOVING TREASURE AND ENEMIES
            $(`.${currentCell}`).removeClass('hero');
            $(`.${rightCell}`).addClass('hero')
            $(`.${rightCell}`).removeClass('enemy')
            if ($(`.${rightCell}`).hasClass('treasure')) {
                $(`.${rightCell}`).removeClass('treasure')
                this.hero.wealth += 100;
            }
        } else if (direction === 'south') {
            // IF EAST REMOVE HERO AND REPAINT IN CELL BELOW, REMOVING TREASURE AND ENEMIES
            $(`.${currentCell}`).removeClass('hero');
            $(`.${downCell}`).addClass('hero')
            $(`.${downCell}`).removeClass('enemy')
            if ($(`.${downCell}`).hasClass('treasure')) {
                $(`.${downCell}`).removeClass('treasure')
                this.hero.wealth += 100;
            }
        } else if (direction === 'west') {
            // IF EAST REMOVE HERO AND REPAINT IN CELL LEFT, REMOVING TREASURE AND ENEMIES
            $(`.${currentCell}`).removeClass('hero');
            $(`.${leftCell}`).addClass('hero')
            $(`.${leftCell}`).removeClass('enemy')
            if ($(`.${leftCell}`).hasClass('treasure')) {
                $(`.${leftCell}`).removeClass('treasure')
                this.hero.wealth += 100;
            }
        }
    }
}


