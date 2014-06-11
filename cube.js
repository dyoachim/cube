var xAngle = 0, yAngle = 0, angle =0;
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

var redHold  =[ RY, RB, RG, RW];
var yelHold  =[ OY, BY, GY, RY];
var greHold  =[ GY, RG, GO, GW];
var blueHold =[ BY, BO, RB, BW];
var whiHold  =[ RW, BW, GW, OW];
var oraHold  =[ OY, GO, BO, OW];

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

    case 82: rotateFace(redHold,-90, cHold[0]+= 90); break; //r
    case 66: rotateFace(blueHold,-90,cHold[1]+= 90); break; //b
    case 79: rotateFace(oraHold,-90, cHold[5]-= 90); break; //o
    case 71: rotateFace(greHold, 90, cHold[3]-= 90); break; //g
    case 89: rotateFace(yelHold, 90, cHold[2]+= 90); break; //y
    case 87: rotateFace(whiHold,-90, cHold[4] -=90); break; //w
  }
  $('.fullOrigin').css('webkitTransform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
  $('.fullOrigin').css('Transform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
}, false);

function rotateFace(array,angle,centerAngle) {
  var face = "";
  var held = array[0];
  array[0] = array[1];
  array[1] = array[3];
  array[3] = array[2];
  array[2] = held;


  array.forEach(function(entry) {
    switch (entry.getAxis(array)) {
     case 'Z': entry.zDegree += angle; break;
     case 'Y': entry.yDegree += angle; break;
     case 'X': entry.xDegree += angle; break;
    }
    $(entry.colorClass).css('webkitTransform', "rotateX(" + entry.xDegree + "deg) rotateY(" + entry.yDegree + "deg) rotateZ(" + entry.zDegree + "deg)");
  });

  switch(array) {
    case redHold:
      rotateAdjacentFaces(yelHold,3, blueHold,2, whiHold,0, greHold,1);
      face = '.redFace'; break;

    case blueHold:
      rotateAdjacentFaces(yelHold,1, oraHold,2, whiHold,1, redHold,1);
      face = '.blueFace'; break;

    case oraHold:
      rotateAdjacentFaces(yelHold,0, greHold,2, whiHold,3, blueHold,1);
      face = '.orangeFace'; break;

    case greHold:
      rotateAdjacentFaces(yelHold,2, redHold,2, whiHold,2, oraHold,1);
      face = '.greenFace'; break;

    case yelHold:
      rotateAdjacentFaces(oraHold,0, blueHold,0, redHold,0, greHold,0);
      face = '.yellowFace'; break;

    case whiHold:
      rotateAdjacentFaces(redHold,3, blueHold,3, oraHold,3, greHold,3);
      face = '.whiteFace'; break;
  }
  $(face + ' .C2 .two').css('webkitTransform', "rotateZ(" + centerAngle +"deg)");
}


function rotateAdjacentFaces(face0,position0, face1,position1, face2,position2, face3,position3) {
  held  = face0[position0];
  face0[position0] = face1[position1];
  face1[position1] = face2[position2];
  face2[position2] = face3[position3];
  face3[position3] = held;
}












