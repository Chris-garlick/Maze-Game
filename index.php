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
    <div id="maze">
        <img class="hero" src="./img/hero.png" alt="">
    </div>
    <script src="Maps.js"></script>
    <!-- <script src="Maze.js"></script> -->
    <script src="Passage.js"></script>
    <script src="Room.js"></script>
    <script src="MazeNew.js"></script>
    <script src="Player.js"></script>
    <script> 

    $(document).ready(function(){
        var maze = new Maze();
        maze.genRooms();
        maze.createRooms();
        maze.displayRooms();
        // maze.sortLayout();
        var hero = new Player();
        hero.setPlayer();
        $(document).keydown(function(e) {
            hero.movePlayer(e)
        })

        // var img = document.getElementsByClassName('hero');
        // console.log(img)
        // console.log(img.style)
        // img.style.top -= "50px";
    }); 
    
        // var maze = new Maze();
        // maze.drawRoomsNew();
        // maze.createRooms();
        // console.log(maze.rooms);
        // maze.drawRooms();
        // console.log(maze.rooms.length)
        // maze.insertHTML();


    </script>
</body>
</html>