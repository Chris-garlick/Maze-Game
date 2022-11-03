function TestCreateNewRoom() {
    var room = new Room();
    room = JSON.stringify(room);
    console.assert(room === '{"id":0,"passages":[],"enemy":false,"treasure":false}')
}

function TestCreateNewRoomWithoutExit() {
    var room = new Room(false);
    room = JSON.stringify(room)
    console.assert(room === '{"id":0,"passages":[],"bool":false,"enemy":false,"treasure":false}')
}
function TestCreateNewRoomWithExit() {
    var room = new Room(true);
    room = JSON.stringify(room)
    console.assert(room === '{"id":0,"passages":[],"bool":true,"enemy":false,"treasure":false}')
}
function TestRoomWithNorthPassage() {
    var room = new Room(false);
    room.getPassage(4);
    room = JSON.stringify(room);
    console.assert(room.includes('north'))
}
function TestRoomWithEastPassage() {
    var room = new Room(false);
    room.getPassage(4);
    room = JSON.stringify(room);
    console.assert(room.includes('east'))
}
function TestRoomWithSouthPassage() {
    var room = new Room(false);
    room.getPassage(4);
    room = JSON.stringify(room);
    console.assert(room.includes('south'))
}
function TestRoomWithWestPassage() {
    var room = new Room(false);
    room.getPassage(4);
    room = JSON.stringify(room);
    console.assert(room.includes('west'))
}
function TestRoomWithSettingTreasure() {
    var room = new Room(false);
    room.setTreasureOrEnemy();
    room = JSON.stringify(room)
    if (room.enemy === false) {
        console.assert(room.includes('treasure'))
    } else if (room.treasure === false) {
        console.assert(room.includes('enemy'))
    }
}

TestCreateNewRoom();
TestCreateNewRoomWithoutExit();
TestCreateNewRoomWithExit();
TestRoomWithNorthPassage();
TestRoomWithEastPassage()
TestRoomWithSouthPassage()
TestRoomWithWestPassage()
TestRoomWithSettingTreasure()