let turn = "white";
let moveDisplay = document.getElementById("move");
let moveCounter = -15;
let mouseSquare;
let currentPiece = 0;

const pieces = {
  Pawn_White1: {
    link: document.getElementById("Pawn_White1"),
    position: "a2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White2: {
    link: document.getElementById("Pawn_White2"),
    position: "b2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White3: {
    link: document.getElementById("Pawn_White3"),
    position: "c2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White4: {
    link: document.getElementById("Pawn_White4"),
    position: "d2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White5: {
    link: document.getElementById("Pawn_White5"),
    position: "e2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White6: {
    link: document.getElementById("Pawn_White6"),
    position: "f2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White7: {
    link: document.getElementById("Pawn_White7"),
    position: "g2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_White8: {
    link: document.getElementById("Pawn_White8"),
    position: "h2",
    color: "white",
    type: "Pawn",
    hasMoved: false,
  },
  Rook_White1: {
    link: document.getElementById("Rook_White1"),
    position: "a1",
    color: "white",
    type: "Rook",
    hasMoved: false,
  },
  Knight_White1: {
    link: document.getElementById("Knight_White1"),
    position: "b1",
    color: "white",
    type: "Knight",
  },
  Bishop_White1: {
    link: document.getElementById("Bishop_White1"),
    position: "c1",
    color: "white",
    type: "Bishop",
  },
  Queen_White: {
    link: document.getElementById("Queen_White"),
    position: "d1",
    color: "white",
    type: "Queen",
  },
  King_White: {
    link: document.getElementById("King_White"),
    position: "e1",
    color: "white",
    type: "King",
    hasMoved: false,
  },
  Bishop_White2: {
    link: document.getElementById("Bishop_White2"),
    position: "f1",
    color: "white",
    type: "Bishop",
  },
  Knight_White2: {
    link: document.getElementById("Knight_White2"),
    position: "g1",
    color: "white",
    type: "Knight",
  },
  Rook_White2: {
    link: document.getElementById("Rook_White2"),
    position: "h1",
    color: "white",
    type: "Rook",
    hasMoved: false,
  },
  Pawn_Black1: {
    link: document.getElementById("Pawn_Black1"),
    position: "a7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black2: {
    link: document.getElementById("Pawn_Black2"),
    position: "b7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black3: {
    link: document.getElementById("Pawn_Black3"),
    position: "c7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black4: {
    link: document.getElementById("Pawn_Black4"),
    position: "d7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black5: {
    link: document.getElementById("Pawn_Black5"),
    position: "e7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black6: {
    link: document.getElementById("Pawn_Black6"),
    position: "f7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black7: {
    link: document.getElementById("Pawn_Black7"),
    position: "g7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Pawn_Black8: {
    link: document.getElementById("Pawn_Black8"),
    position: "h7",
    color: "black",
    type: "Pawn",
    hasMoved: false,
  },
  Rook_Black1: {
    link: document.getElementById("Rook_Black1"),
    position: "a8",
    color: "black",
    type: "Rook",
    hasMoved: false,
  },
  Knight_Black1: {
    link: document.getElementById("Knight_Black1"),
    position: "b8",
    color: "black",
    type: "Knight",
  },
  Bishop_Black1: {
    link: document.getElementById("Bishop_Black1"),
    position: "c8",
    color: "black",
    type: "Bishop",
  },
  Queen_Black: {
    link: document.getElementById("Queen_Black"),
    position: "d8",
    color: "black",
    type: "Queen",
  },
  King_Black: {
    link: document.getElementById("King_Black"),
    position: "e8",
    color: "black",
    type: "King",
    hasMoved: false,
  },
  Bishop_Black2: {
    link: document.getElementById("Bishop_Black2"),
    position: "f8",
    color: "black",
    type: "Bishop",
  },
  Knight_Black2: {
    link: document.getElementById("Knight_Black2"),
    position: "g8",
    color: "black",
    type: "Knight",
  },
  Rook_Black2: {
    link: document.getElementById("Rook_Black2"),
    position: "h8",
    color: "black",
    type: "Rook",
    hasMoved: false,
  },
};

const squares = {
  a1: [1, 1],
  b1: [2, 1],
  c1: [3, 1],
  d1: [4, 1],
  e1: [5, 1],
  f1: [6, 1],
  g1: [7, 1],
  h1: [8, 1],
  a2: [1, 2],
  b2: [2, 2],
  c2: [3, 2],
  d2: [4, 2],
  e2: [5, 2],
  f2: [6, 2],
  g2: [7, 2],
  h2: [8, 2],
  a3: [1, 3],
  b3: [2, 3],
  c3: [3, 3],
  d3: [4, 3],
  e3: [5, 3],
  f3: [6, 3],
  g3: [7, 3],
  h3: [8, 3],
  a4: [1, 4],
  b4: [2, 4],
  c4: [3, 4],
  d4: [4, 4],
  e4: [5, 4],
  f4: [6, 4],
  g4: [7, 4],
  h4: [8, 4],
  a5: [1, 5],
  b5: [2, 5],
  c5: [3, 5],
  d5: [4, 5],
  e5: [5, 5],
  f5: [6, 5],
  g5: [7, 5],
  h5: [8, 5],
  a6: [1, 6],
  b6: [2, 6],
  c6: [3, 6],
  d6: [4, 6],
  e6: [5, 6],
  f6: [6, 6],
  g6: [7, 6],
  h6: [8, 6],
  a7: [1, 7],
  b7: [2, 7],
  c7: [3, 7],
  d7: [4, 7],
  e7: [5, 7],
  f7: [6, 7],
  g7: [7, 7],
  h7: [8, 7],
  a8: [1, 8],
  b8: [2, 8],
  c8: [3, 8],
  d8: [4, 8],
  e8: [5, 8],
  f8: [6, 8],
  g8: [7, 8],
  h8: [8, 8],
  gone: [8, 9],
};

function setup() {
  move("Pawn_White1", "a2");
  move("Pawn_White2", "b2");
  move("Pawn_White3", "c2");
  move("Pawn_White4", "d2");
  move("Pawn_White5", "e2");
  move("Pawn_White6", "f2");
  move("Pawn_White7", "g2");
  move("Pawn_White8", "h2");
  move("Rook_White1", "a1");
  move("Rook_White2", "h1");
  move("Knight_White1", "b1");
  move("Knight_White2", "g1");
  move("Bishop_White1", "c1");
  move("Bishop_White2", "f1");
  move("King_White", "e1");
  move("Queen_White", "d1");
  move("Pawn_Black1", "a7");
  move("Pawn_Black2", "b7");
  move("Pawn_Black3", "c7");
  move("Pawn_Black4", "d7");
  move("Pawn_Black5", "e7");
  move("Pawn_Black6", "f7");
  move("Pawn_Black7", "g7");
  move("Pawn_Black8", "h7");
  move("Rook_Black1", "a8");
  move("Rook_Black2", "h8");
  move("Knight_Black1", "b8");
  move("Knight_Black2", "g8");
  move("Bishop_Black1", "c8");
  move("Bishop_Black2", "f8");
  move("King_Black", "e8");
  move("Queen_Black", "d8");
}

setup();

function isLegalMove(piece, newLocation) {
  let oldLocation = pieces[piece].position;
  let result = [];
  result.push(squares[oldLocation][0] - squares[newLocation][0]);
  result.push(squares[oldLocation][1] - squares[newLocation][1]);
  console.log(result);
  if (pieces[piece].type === "Pawn") {
    if (pieces[piece].color === "white") {
      if (
        (result[0] === 0 && result[1] === -1) || // white pawn moves 1x
        //
        (result[0] === 0 &&
          result[1] === -2 &&
          pieces[piece].hasMoved === false) || // white pawn moves up 2x
        //
        (result[0] === -1 &&
          result[1] === -1 &&
          checkforpiece(newLocation[0], newLocation[1]) === true) || // White Pawn captures right
        (result[0] === 1 &&
          result[1] === -1 &&
          checkforpiece(newLocation[0], newLocation[1]) === true) // White Pawn captures left
      ) {
        return true;
      }
    } else if (pieces[piece].color === "black") {
      if (
        (result[0] === 0 && result[1] === 1) ||
        (result[0] === 0 && result[1] === 2 && pieces[piece].hasMoved === false)
      ) {
        return true;
      }
    }
  } else if (pieces[piece].type === "Rook") {
    if (result[0] === 0 || result[1] === 0) return true;
  } else if (pieces[piece].type === "Bishop") {
    if (result[0] === result[1] || result[0] === -result[1]) {
      return true;
    }
  } else if (pieces[piece].type === "Knight") {
    if (
      (result[0] === 2 && result[1] === 1) ||
      (result[0] === -2 && result[1] === 1) ||
      (result[0] === 2 && result[1] === -1) ||
      (result[0] === -2 && result[1] === -1) ||
      (result[0] === 1 && result[1] === 2) ||
      (result[0] === -1 && result[1] === 2) ||
      (result[0] === 1 && result[1] === -2) ||
      (result[0] === -1 && result[1] === -2)
    ) {
      return true;
    }
  } else if (pieces[piece].type === "Queen") {
    if (
      result[0] === 0 ||
      result[1] === 0 ||
      result[0] === result[1] ||
      result[0] === -result[1]
    ) {
      return true;
    }
  } else if (pieces[piece].type === "King") {
    if (
      (result[0] === 0 && result[1] === 1) ||
      (result[0] === 1 && result[1] === 1) ||
      (result[0] === -1 && result[1] === 1) ||
      (result[0] === 1 && result[1] === 0) ||
      (result[0] === -1 && result[1] === 0) ||
      (result[0] === 0 && result[1] === -1) ||
      (result[0] === 1 && result[1] === -1) ||
      (result[0] === -1 && result[1] === -1)
    ) {
      return true;
    }
  } else {
    return false;
  }
}
function highlight(piece) {
  pieces[piece].link.style.backgroundColor = "rgba(255,165,0,0.9)";
}
function clearHighlight(piece) {
  if (piece != 0) {
    pieces[piece].link.style.backgroundColor = "transparent";
  }
}
function clearOtherPieces(currentPiece, square) {
  let pieceToClear = 0;
  for (let key in pieces) {
    let piece = pieces[key];
    if (piece.position === square && piece != pieces[currentPiece]) {
      pieceToClear = key;
    }
  }
  move(pieceToClear, "gone", "no");

  // find all pieces on the square
  // clear all of them exept the current piece
}
function checkforpiece(x, y) {
  for (let key in pieces) {
    let piece = pieces[key];
    if (piece.position[0] === x && piece.position[1] === y) {
      return true;
    }
  }
  return false;
}
function move(piece, square, counts = "yes") {
  if (piece != 0) {
    pieces[piece].link.style.top = 100 * -squares[square][1] + 810 + "px";
    pieces[piece].link.style.left = 100 * squares[square][0] - 92 + "px";
    pieces[piece].position = square;
    if (counts === "yes") {
      if (turn === "white") {
        turn = "black";
      } else {
        turn = "white";
        moveCounter += 1;
      }
    }
    moveDisplay.innerHTML =
      "It is " + turn + "'s turn on move number " + moveCounter;
    console.log(turn);
  }
}
function checkPiecesInWay(fromSquare, toSquare) {
  let difference = [];
  difference.push(fromSquare[0] - toSquare[0]);
  difference.push(fromSquare[1] - toSquare[1]);
  let result = false;
  if (difference[0] === 0) {
    //rook from top to bottom or botton to top
    for (i = fromSquare[0] + 1; i++; i < toSquare[0]) {
      let result = checkforpiece(fromSquare[0], i);
    }
  } else if (difference[1] === 0) {
    for (i = fromSquare[1] + 1; i++; i < toSquare[1]) {
      result = checkforpiece(i, fromSquare[1]);
    }
  } else {
    return result;
  }
}

document.addEventListener("mousemove", function (event) {
  var mouseX = Math.round((event.clientX - 8) / 100 + 0.5);
  var mouseY = Math.round((805 - event.clientY) / 100 + 0.5);
  mouseSquare = findMouseSquare(mouseX, mouseY);

  function findMouseSquare(x, y) {
    for (let key in squares) {
      let square = squares[key];
      if (square[0] === x && square[1] === y) {
        return key;
      }
    }
  }
});

document.addEventListener("mousedown", function (event) {
  let legalMove = false;
  checkPieceOnSquare(mouseSquare);

  function checkPieceOnSquare(square) {
    for (let key in pieces) {
      let piece = pieces[key];
      if (piece.position === square && piece.color === turn) {
        clearHighlight(currentPiece);
        currentPiece = key;
        highlight(currentPiece);
        return;
      }
    }
    legalMove = isLegalMove(currentPiece, square);
    if (legalMove === true) {
      move(currentPiece, square);
      if (
        pieces[currentPiece].type === "Pawn" ||
        pieces[currentPiece].type === "Rook" ||
        pieces[currentPiece].type === "King"
      ) {
        if (pieces[currentPiece].hasMoved === false) {
          pieces[currentPiece].hasMoved = true;
        }
      }
      if (currentPiece != 0) {
        clearOtherPieces(currentPiece, square);
      }
    }

    clearHighlight(currentPiece);
    currentPiece = 0;
  }
});
