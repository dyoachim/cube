var xAngle = 0, yAngle = 0;
var rCenter = 0, yCenter = 0, gCenter = 0, bCenter = 0, wCenter = 0, oCenter = 0;

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

var redHold  =[ RY, RG, RW, RB, rCenter];
var yelHold  =[ OY, GY, RY, BY, yCenter];
var greHold  =[ GY, GO, GW, RG, gCenter];
var blueHold =[ BY, RB, BW, BO, bCenter];
var whiHold  =[ OW, BW, RW, GW, wCenter];
var oraHold  =[ OY, BO, OW, GO, oCenter];

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

  array[4] += 90;

  for (var i=0;i<=3;i++) {
    switch (array[i].getAxis(array)) {
     case 'Z': array[i].zDegree -= 90; break;
     case 'Y': array[i].yDegree -= 90; break;
     case 'X': array[i].xDegree -= 90; break;
    }
    $(array[i].colorClass).css('webkitTransform', "rotateX(" + array[i].xDegree + "deg) rotateY(" + array[i].yDegree + "deg) rotateZ(" + array[i].zDegree + "deg)");
  }

  switch(array) {
    case redHold:
      rotateAdjacentFaces(yelHold,2, greHold,3, whiHold,2, blueHold,1);
      face = '.redFace'; break;

    case blueHold:
      rotateAdjacentFaces(yelHold,3, redHold,3, whiHold,1, oraHold,1);
      face = '.blueFace'; break;

    case oraHold:
      rotateAdjacentFaces(yelHold,0, blueHold,3, whiHold,0, greHold,1);
      face = '.orangeFace'; break;

    case greHold:
      rotateAdjacentFaces(yelHold,1, oraHold,3, whiHold,3, redHold,1);
      face = '.greenFace'; break;

    case yelHold:
      rotateAdjacentFaces(oraHold,0, greHold,0, redHold,0, blueHold,0);
      face = '.yellowFace'; break;

    case whiHold:
      rotateAdjacentFaces(oraHold,2, blueHold,2, redHold,2, greHold,2);
      face = '.whiteFace'; break;
  }
  $(face + ' .C2 .two').css('webkitTransform', "rotateZ(" + array[4] +"deg)");
}

function rotateAdjacentFaces(face0,position0, face1,position1, face2,position2, face3,position3) {
  held  = face3[position3];
  face3[position3] = face2[position2];
  face2[position2] = face1[position1];
  face1[position1] = face0[position0];
  face0[position0] = held;
}