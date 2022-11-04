function TestNewMazeCreation() {
    // CREATES A NEW BASIC MAZE
    let maze = new Maze();
    maze = JSON.stringify(maze)
    console.assert(maze === '{"rooms":[],"mazeDivs":[],"hero":{"cell":0,"wealth":0,"moves":0}}')
}
function TestGenRoomsMakes25() {
    // GENERATES A LIST OF 25 ROOMS
    let maze = new Maze();
    maze.genRooms();
    console.assert(maze.rooms.length === 25)
}
function TestCreateRooms() {
    // CREATES THE HTML ELEMENTS FOR EACH ROOM
    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    console.assert(maze.mazeDivs.length === 25)
}
function TestCreateHTMLElement() {
    // TESTS THE CREATION OF A HTML ELEMENT
    let maze = new Maze();
    maze.genRooms();
    maze.createHTMLEle(maze.rooms[0], north={"isExit":false}, east={"isExit":false}, enemy=false, treasure=false, hero=true)
    console.assert(maze.mazeDivs.length === 1)
}
function TestMoveHero() {
    // TESTS THE MOVING OF THE CLASSES TO REDRAW HERO
    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    maze.moveHero('south');
    let h = $('.0').hasClass('hero')
    let newH = $('.5').hasClass('hero')
    let e = $('.5').hasClass('enemy')
    let t = $('.5').hasClass('treasure')
    console.assert(h === false)
    console.assert(newH === true)
    console.assert(e === false)
    console.assert(t === false)
}
function TestCanMoveTop() {
    // TESTS IF HERO CAN MOVE UP FROM 0 ROOM
    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    let bool = maze.canMove(0, 'north')
    console.assert(bool === false)
}
function TestCanMoveRight() {
    // TESTS IF HERO CAN MOVE RIGHT FROM 0 ROOM
    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    let bool = maze.canMove(0, 'east')
    console.assert(bool === true)
}
function TestCanMoveBottom() {
    // TESTS IF HERO CAN MOVE DOWN FROM 0 ROOM
    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    let bool = maze.canMove(0, 'south')
    console.assert(bool === true)
}
function TestCanMoveLeft() {
    // TESTS IF HERO CAN MOVE LEFT FROM 0 ROOM

    let maze = new Maze();
    maze.genRooms();
    maze.createRooms();
    let bool = maze.canMove(0, 'west')
    console.assert(bool === false)
}
// TestNewMazeCreation()
// TestGenRoomsMakes25()
// TestCreateHTMLElement()
// TestMoveHero()
// TestCanMoveTop()
// TestCanMoveRight()
// TestCanMoveBottom()
// TestCanMoveLeft()
// TestCreateRooms()

