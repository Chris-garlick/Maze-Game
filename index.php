<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maze Runner</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- <canvas width="500" height="500" id="canvas"></canvas> -->
    <!-- <div class="maze"></div> -->
    <script src="Maps.js"></script>
    <script src="Maze.js"></script>
    <script> 
        var maze = new Maze();
        maze.createRooms();
        console.log(maze.rooms);
        maze.drawRooms();
        console.log(maze.rooms.length)


    </script>
</body>
</html>