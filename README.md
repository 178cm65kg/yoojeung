# yoojeung
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tetris Game</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="game-container">
      <div id="game-board"></div>
      <div id="score">Score: 0</div>
      <button id="start-button">Start Game</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>

my-tetris-game/
├── index.html
├── style.css
└── script.js

#game-container {
  margin: 0 auto;
  text-align: center;
  width: 320px;
}

#game-board {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  height: 480px;
  margin: 0 auto;
  position: relative;
  width: 240px;
}

#game-board .cell {
  background-color: #fff;
  border: 1px solid #ccc;
  height: 24px;
  position: absolute;
  width: 24px;
}

#score {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

#start-button {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
}

#start-button:hover {
  background-color: #ccc;
  cursor: pointer;
}

