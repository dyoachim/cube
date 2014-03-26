
var xAngle = 0, yAngle = 0, angle =0, held ="", face="";
var cHold = [0,0,0,0,0,0];
var redHold =[['.RY','Z',0,0,0],['.RB','Z',0,0,90],['.RG','Z',0,0,-90],['.RW','Z',0,0,180]];
var yelHold =[['.OY','Y',0,180,0],['.BY','Y',0,90,0],['.GY','Y',0,-90,0],['.RY','Y',0,0,0]];
var greHold =[['.GY','X',0,-90,0],['.RG','X',0,0,-90],['.GO','X',0,180,90],['.GW','X',0,-90,180]];
var blueHold =[['.BY','X',0,90,0],['.BO','X',0,180,-90],['.RB','X',0,0,90],['.BW','X',0,90,180]];
var whiHold =[['.RW','Y',0,0,180],['.BW','Y',0,90,180],['.GW','Y',0,-90,180],['.OW','Y',0,180,180]];
var oraHold =[['.OY','Z',0,180,0],['.GO','Z',0,180,90],['.BO','Z',0,180,-90],['.OW','Z',0,180,180]];

document.addEventListener('keydown', function(e)
{
  switch(e.keyCode)
  {
    case 37: yAngle -= 90; break; //left
    case 38: xAngle += 90; break; //up
    case 39: yAngle += 90; break; //right
    case 40: xAngle -= 90; break; //down

    case 82: //r
      rotateFace(redHold,-90, cHold[0]+=90);

      held = yelHold[3][1].slice(0);
      yelHold[3] = redHold[0].slice(0);
      yelHold[3][1] = blueHold[2][1].slice(0);

      blueHold[2] = redHold[1].slice(0);
      blueHold[2][1] = whiHold[0][1].slice(0);

      whiHold[0] = redHold[3].slice(0);
      whiHold[0][1] = greHold[1][1].slice(0);

      greHold[1] = redHold[2].slice(0);
      greHold[1][1] = held;
      break;

    case 66: //b
      rotateFace(blueHold,-90, cHold[1]+=90);

      held = redHold[1][1].slice(0);
      redHold[1] = blueHold[2].slice(0);
      redHold[1][1] = yelHold[1][1].slice(0);

      yelHold[1] = blueHold[0].slice(0);
      yelHold[1][1] = oraHold[2][1].slice(0);

      oraHold[2] = blueHold[1].slice(0);
      oraHold[2][1] = whiHold[1][1].slice(0);

      whiHold[1] = blueHold[3].slice(0);
      whiHold[1][1] = held;
      break;

    case 89: //y
      rotateFace(yelHold,90, cHold[2]+=90);

      held  = redHold[0][1].slice(0);
      redHold[0] = yelHold[3].slice(0);
      redHold[0][1] = greHold[0][1].slice(0);

      greHold[0] = yelHold[2].slice(0);
      greHold[0][1] = oraHold[0][1].slice(0);

      oraHold[0] = yelHold[0].slice(0);
      oraHold[0][1] = blueHold[0][1].slice(0);

      blueHold[0] = yelHold[1].slice(0);
      blueHold[0][1] = held;
      break;
      
    case 71: //g
      rotateFace(greHold,90, cHold[3]-=90);

      held = redHold[2][1].slice(0);
      redHold[2] = greHold[1].slice(0);
      redHold[2][1] = whiHold[2][1].slice(0);

      whiHold[2] = greHold[3].slice(0);
      whiHold[2][1] = oraHold[1][1].slice(0);

      oraHold[1] = greHold[2].slice(0);
      oraHold[1][1] = yelHold[2][1].slice(0);

      yelHold[2] = greHold[0].slice(0);
      yelHold[2][1] = held;
      break;

    case 87: //w
      rotateFace(whiHold,-90, cHold[4] -=90);

      held = redHold[3][1].slice(0);
      redHold[3] = whiHold[0].slice(0);
      redHold[3][1] = blueHold[3][1].slice(0);

      blueHold[3] = whiHold[1].slice(0);
      blueHold[3][1] = oraHold[3][1].slice(0);

      oraHold[3] = whiHold[3].slice(0);
      oraHold[3][1] = greHold[3][1].slice(0);

      greHold[3] = whiHold[2].slice(0);
      greHold[3][1] = held;
      break;

    case 79: //o
      rotateFace(oraHold,-90,cHold[5] -= 90);

      held = yelHold[0][1].slice(0);
      yelHold[0] = oraHold[0].slice(0);
      yelHold[0][1] = greHold[2][1].slice(0);

      greHold[2] = oraHold[1].slice(0);
      greHold[2][1] = whiHold[3][1].slice(0);

      whiHold[3] = oraHold[3].slice(0);
      whiHold[3][1] = blueHold[1][1].slice(0);

      blueHold[1] = oraHold[2].slice(0);
      blueHold[1][1] = held;
      break;
  }
  jQuery('.fullOrigin').css('webkitTransform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
  jQuery('.fullOrigin').css('Transform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
}, false);

function rotateFace(array,angle,centerAngle) {
  held = array[0].slice(0);
  array[0] = array[1].slice(0);
  array[1] = array[3].slice(0);
  array[3] = array[2].slice(0);
  array[2] = held;

  for (var k in array) {
    switch (array[k][1]) {
     case 'Z': array[k][4] += angle; break;
     case 'Y': array[k][3] += angle; break;
     case 'X': array[k][2] += angle; break;
    }
    jQuery(array[k][0]).css('webkitTransform', "rotateX(" + array[k][2] + "deg) rotateY(" + array[k][3] + "deg) rotateZ(" + array[k][4] + "deg)");
  }
  switch (array) {
    case redHold: face = '.redFace'; break;
    case blueHold: face = '.blueFace'; break;
    case yelHold: face = '.yellowFace'; break;
    case greHold: face = '.greenFace'; break;
    case whiHold: face = '.whiteFace'; break;
    case oraHold: face = '.orangeFace'; break;
  }
  jQuery(face + ' .C2 .two').css('webkitTransform', "rotateZ(" + centerAngle +"deg)");
}