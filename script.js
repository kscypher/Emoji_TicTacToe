let w
let h

function setup() {
  createCanvas(500, 500);
  
  w = width/4
  h = height/4
  
  startGame()
}

let board
let turn
let empty
let winner

function startGame() {
  board = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
  ]
// X = 🎅
// Y = 👳

turn = '🎅'
empty = 16
winner = ' '

}


function mouseIsOffCanvas() {
  if (mouseX < 0 || mouseX >= width ||mouseY < 0 || mouseY >= height) {
    return true
  }
  else {
    return false
  }
}
function mousePressed() {
  if (mouseIsOffCanvas()) {
    return
  }
    
 // console.log(mouseX, mouseY)
    
  let row = floor(mouseY / h)
  let col = floor(mouseX / w)
  
  if (board[row][col] == ' ') {
    board[row][col] = turn
    empty = empty - 1
    checkForWinner()
    changeTurn()
  }
    
    else if (winner == '🎅' || winner == '👳' || empty == 0 ) {
      startGame()
      
    }
  }
    
    function checkForWinner() {
      // First Row
      
      if (board[0][0] == turn && board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][2] == board[0][3] ) {
        winner = turn          
  } // Second Row
      
      if (board[1][0] == turn && board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][2] == board[1][3] ) {
        winner = turn
    }// Third Row
      
      if (board[2][0] == turn && board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] == board[2][3] ) {
winner = turn        
      } // Fourth Row
    
    if (board[3][0] == turn && board[3][0] == board[3][1] && board[3][1] == board[3][2] && board[3][2] == board[3][3] ) 
      { 
        winner = turn
          } // First column
      
   if (board[0][0] == turn && board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] == board[3][0]) {
      winner = turn
   } // Second column
      
      if (board[0][1] == turn && board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] == board[3][1] ) {
        winner = turn
        
      } //Third column
      
  if (board[0][2] == turn && board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] == board[3][2] ) {      winner = turn
                                                          
      } // Fourth column
    
    if (board[0][3] == turn && board[0][3] == board[1][3] && board[1][3] == board[2][3] && board[2][3] == board[3][3] ) {
      winner = turn
    } // Top left to bottom right diagonal
      
      if (board[0][0] == turn && board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] == board[3][3] ) {
   winner = turn
  } // Top right to bottom left diagonal
      
       if (board[0][3] == turn && board[0][3] == board[1][2] && board[1][2] == board[2][1] && board[2][1] == board[3][0] ) {
   winner = turn
       }
  }
    
    function changeTurn() {
  if (turn == '🎅') {
    turn = '👳'
  }
  else {
    turn = '🎅'
  }
}

    
   function drawRect(row, col) {
  noFill()
  stroke(231)
  strokeWeight(5) 
     
     rect(w*col, h*row, w, h)
}


function drawSymbol(row, col) {
  textAlign(CENTER, CENTER)
  textSize(h/2)
  
  fill(150)
  strokeWeight(1)
  text(board[row][col], w*col + w/2, h*row + h/2)
}
    
    function showWinner() {
  textAlign(CENTER, CENTER)
  textSize(h/4)
  
  fill(250)
  strokeWeight(1)
  text(winner + " Wins", width/2, height/2)
    }
      
function showDraw() {
  textAlign(CENTER, CENTER)
  textSize(h/4)
  
  fill(250)
  strokeWeight(1)
  text("Bad Luck", width/2, height/2)
}

      function showBoard() {
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      drawRect(row, col)
      drawSymbol(row, col)
    }
  }
  
  if (mouseIsOffCanvas()) {
    return
  }

function keyPressed() {
  if (key == 'r') {
    startGame()
  }   
}
  }

    function draw() {
      background(51)
    
  if (winner == '🎅' || winner == '👳') {
    showWinner()
  }
  else if (empty == 0) {
    showDraw() 
  } 
  else if (draw) {
    showBoard()
  }
    }
