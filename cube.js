var xAngle = 0, yAngle = 0;

var RY = new Piece('RY',0,  0,  0);
var RB = new Piece('RB',0,  0, 90);
var RG = new Piece('RG',0,  0,-90);
var RW = new Piece('RW',0,  0,180);
var OY = new Piece('OY',0,180,  0);
var BY = new Piece('BY',0, 90,  0);
var GY = new Piece('GY',0,-90,  0);
var GO = new Piece('GO',0,180, 90);
var GW = new Piece('GW',0,-90,180);
var BO = new Piece('BO',0,180,-90);
var BW = new Piece('BW',0, 90,180);
var OW = new Piece('OW',0,180,180);

var redHold  = new Face('redFace',    RY, RG, RW, RB);
var yelHold  = new Face('yellowFace', OY, GY, RY, BY);
var greHold  = new Face('greenFace',  GY, GO, GW, RG);
var blueHold = new Face('blueFace',   BY, RB, BW, BO);
var whiHold  = new Face('whiteFace',  OW, BW, RW, GW);
var oraHold  = new Face('orangeFace', OY, BO, OW, GO);

function Piece(colorClass, xRotation, yRotation, zRotation ) {
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

function Face(id, piece0, piece1, piece2, piece3) {
  this.pieces = [piece0, piece1, piece2, piece3];
  this.faceId = id;
  this.center = 0;
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
  document.getElementById('fullOrigin').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
  document.getElementById('fullOrigin').style.MozTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);

function rotateFace(face) {
  //var face.pieces = face.pieces;
  console.log(face.pieces);
  var held = face.pieces[3];
  face.pieces[3] = face.pieces[2];
  face.pieces[2] = face.pieces[1];
  face.pieces[1] = face.pieces[0];
  face.pieces[0] = held;

  face.center += 90;

  for (var i=0;i<=3;i++) {
    switch (face.pieces[i].getAxis(face)) {
     case 'Z': face.pieces[i].zDegree -= 90; break;
     case 'Y': face.pieces[i].yDegree -= 90; break;
     case 'X': face.pieces[i].xDegree -= 90; break;
    }
    document.getElementById(face.pieces[i].colorClass).style.webkitTransform = "rotateX(" + face.pieces[i].xDegree + "deg) rotateY(" + face.pieces[i].yDegree + "deg) rotateZ(" + face.pieces[i].zDegree + "deg)";
    document.getElementById(face.pieces[i].colorClass).style.MozTransform = "rotateX(" + face.pieces[i].xDegree + "deg) rotateY(" + face.pieces[i].yDegree + "deg) rotateZ(" + face.pieces[i].zDegree + "deg)";
  }

  switch(face) {
    case redHold:
      rotateAdjacentFaces(yelHold,2, greHold,3, whiHold,2, blueHold,1); break;

    case blueHold:
      rotateAdjacentFaces(yelHold,3, redHold,3, whiHold,1, oraHold,1); break;

    case oraHold:
      rotateAdjacentFaces(yelHold,0, blueHold,3, whiHold,0, greHold,1); break;

    case greHold:
      rotateAdjacentFaces(yelHold,1, oraHold,3, whiHold,3, redHold,1); break;

    case yelHold:
      rotateAdjacentFaces(oraHold,0, greHold,0, redHold,0, blueHold,0); break;

    case whiHold:
      rotateAdjacentFaces(oraHold,2, blueHold,2, redHold,2, greHold,2); break;
  }
  document.getElementById(face.faceId).style.webkitTransform = "rotateZ(" + face.center +"deg)";
  document.getElementById(face.faceId).style.MozTransform = "rotateZ(" + face.center +"deg)";
}

function rotateAdjacentFaces(face0,position0, face1,position1, face2,position2, face3,position3) {
  held  = face3.pieces[position3];
  face3.pieces[position3] = face2.pieces[position2];
  face2.pieces[position2] = face1.pieces[position1];
  face1.pieces[position1] = face0.pieces[position0];
  face0.pieces[position0] = held;
}