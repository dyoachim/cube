var xAngle = 0, yAngle = 0;
var cHold = [0,0,0,0,0,0];

var RY = new cubePiece('.RY',0,  0,  0);
var RB = new cubePiece('.RB',0,  0, 90);
var RG = new cubePiece('.RG',0,  0,-90);
var RW = new cubePiece('.RW',0,  0,180);
var OY = new cubePiece('.OY',0,180,  0);
var BY = new cubePiece('.BY',0, 90,  0);
var GY = new cubePiece('.GY',0,-90,  0);
var GO = new cubePiece('.GO',0,180, 90);
var GW = new cubePiece('.GW',0,-90,180);
var BO = new cubePiece('.BO',0,180,-90);
var BW = new cubePiece('.BW',0, 90,180);
var OW = new cubePiece('.OW',0,180,180);

var redHold  =[ RY, RG, RW, RB];
var yelHold  =[ OY, GY, RY, BY];
var greHold  =[ GY, GO, GW, RG];
var blueHold =[ BY, RB, BW, BO];
var whiHold  =[ OW, BW, RW, GW];
var oraHold  =[ OY, BO, OW, GO];

function cubePiece(colorClass, xRotation, yRotation, zRotation ) {
  this.colorClass = colorClass;
  this.xDegree = xRotation;
  this.yDegree = yRotation;
  this.zDegree = zRotation;
  this.getAxis = function(face) {
    switch(face){
      case redHold:
      case oraHold: return 'Z';
      case yelHold:
      case whiHold: return 'Y';
      case greHold:
      case blueHold: return 'X';
    }
  };
}

document.addEventListener('keydown', function(e)
{
  switch(e.keyCode)
  {
    case 37: yAngle -= 90; break; //left
    case 38: xAngle += 90; break; //up
    case 39: yAngle += 90; break; //right
    case 40: xAngle -= 90; break; //down

    case 82: rotateFace(redHold); break; //r
    case 66: rotateFace(blueHold); break; //b
    case 79: rotateFace(oraHold); break; //o
    case 71: rotateFace(greHold); break; //g
    case 89: rotateFace(yelHold); break; //y
    case 87: rotateFace(whiHold); break; //w
  }
  $('.fullOrigin').css('webkitTransform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
}, false);

function rotateFace(array) {
  var face = "";
  var held = array[3];
  array[3] = array[2];
  array[2] = array[1];
  array[1] = array[0];
  array[0] = held;

  array.forEach(function(entry) {
    switch (entry.getAxis(array)) {
     case 'Z': entry.zDegree -= 90; break;
     case 'Y': entry.yDegree -= 90; break;
     case 'X': entry.xDegree -= 90; break;
    }
    $(entry.colorClass).css('webkitTransform', "rotateX(" + entry.xDegree + "deg) rotateY(" + entry.yDegree + "deg) rotateZ(" + entry.zDegree + "deg)");
  });

  switch(array) {
    case redHold:
      rotateAdjacentFaces(yelHold,2, greHold,3, whiHold,2, blueHold,1);
      centerAngle = cHold[0] += 90;
      face = '.redFace'; break;

    case blueHold:
      centerAngle = cHold[1] += 90;
      rotateAdjacentFaces(yelHold,3, redHold,3, whiHold,1, oraHold,1);
      face = '.blueFace'; break;

    case oraHold:
      centerAngle = cHold[5] -= 90;
      rotateAdjacentFaces(yelHold,0, blueHold,3, whiHold,0, greHold,1);
      face = '.orangeFace'; break;

    case greHold:
      centerAngle = cHold[3] -= 90;
      rotateAdjacentFaces(yelHold,1, oraHold,3, whiHold,3, redHold,1);
      face = '.greenFace'; break;

    case yelHold:
      centerAngle = cHold[2] += 90;
      rotateAdjacentFaces(oraHold,0, greHold,0, redHold,0, blueHold,0);
      face = '.yellowFace'; break;

    case whiHold:
      centerAngle = cHold[4] -= 90;
      rotateAdjacentFaces(oraHold,2, blueHold,2, redHold,2, greHold,2);
      face = '.whiteFace'; break;
  }
  $(face + ' .C2 .two').css('webkitTransform', "rotateZ(" + centerAngle +"deg)");
}


function rotateAdjacentFaces(face0,position0, face1,position1, face2,position2, face3,position3) {
  held  = face3[position3];
  face3[position3] = face2[position2];
  face2[position2] = face1[position1];
  face1[position1] = face0[position0];
  face0[position0] = held;
}












