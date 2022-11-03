function TestNewPlayer() {
    var player = new Player();
    player = JSON.stringify(player)
    console.assert(player === '{"cell":0,"wealth":0,"moves":0}')
}
function TestBottomBorderPasses() {
    var player = new Player();
    var bool = player.checkBottomBorder(150);
    console.assert(bool === true)
}
function TestBottomBorderFails() {
    var player = new Player();
    var bool = player.checkBottomBorder(230);
    console.assert(bool === false)
}
function TestRightBorderPasses() {
    var player = new Player();
    var bool = player.checkRightBorder(150);
    console.assert(bool === true)
}
function TestRightBorderFails() {
    var player = new Player();
    var bool = player.checkRightBorder(230);
    console.assert(bool === false)
}
function TestTopBorderPasses() {
    var player = new Player();
    var bool = player.checkTopBorder(75);
    console.assert(bool === true)
}
function TestTopBorderFails() {
    var player = new Player();
    var bool = player.checkTopBorder(25);
    console.assert(bool === false)
}
function TestLeftBorderPasses() {
    var player = new Player();
    var bool = player.checkTopBorder(75);
    console.assert(bool === true)
}
function TestLeftBorderFails() {
    var player = new Player();
    var bool = player.checkTopBorder(25);
    console.assert(bool === false)
}
TestNewPlayer();
TestBottomBorderPasses()
TestBottomBorderFails()
TestRightBorderPasses()
TestRightBorderFails()
TestTopBorderPasses()
TestTopBorderFails()
TestLeftBorderPasses()
TestLeftBorderFails()
