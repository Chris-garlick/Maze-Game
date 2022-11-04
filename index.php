<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maze Runner</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
</head>
<body>
    <!-- <canvas width="500" height="500" id="canvas"></canvas> -->
    <div class="leftSide">

        <div id="maze">
            <!-- <img class="hero" src="./img/hero.png" alt=""> -->
        </div>
        <div class="gameOver hide">
            <h1>Congratulations! You have beaten the maze</h1>
            <div class="wealth">Total Gold: <span>0</span></div>
            <div class="moves">Total Moves: <span>0</span></div>
            <div class="playAgain"><a href="">Play Again</a></div>
        </div>
    </div>
    <div class="rightSide">
        <div class="gameScore">
            <div class="wealth">Gold: <span></span></div>
            <div class="moves">Moves: <span>0</span></div>
            <div class="playAgain"><a href="">Play Again</a></div>
            <div class="userInfo"></div>
        </div>
    </div>
    <script src="Maze.js"></script>
    <script src="Passage.js"></script>
    <script src="Room.js"></script>
    <script src="Player.js"></script>

    <script src="PassageTest.js"></script>
    <script src="RoomTest.js"></script>
    <script src="PlayerTest.js"></script>
    <script src="MazeTest.js"></script>
    <script> 

    $(document).ready(function(){
        var maze = new Maze();
        maze.genRooms();
        maze.createRooms();
        maze.displayRooms();

        $(document).keydown(function(e) {
            maze.movePlayer(e)
        })
    }); 

    $.fn.extend({
    hasClasses: function (selectors) {
        // UTILITY FUNCTION FOR FINDING OUT HOW MANY CLASSES A HTML ELEMENT HAS
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
    


    </script>
</body>
</html>