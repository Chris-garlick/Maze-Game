function TestNewPassageFalse() {
    var newPassage = new Passage();
    newPassage.setExit(false);
    var passage = newPassage.getExit();
    console.assert(passage === false)
}
function TestNewPassageTrue() {
    var newPassage = new Passage();
    newPassage.setExit(true);
    var passage = newPassage.getExit();
    console.assert(passage === true)
}

TestNewPassageFalse()
TestNewPassageTrue()