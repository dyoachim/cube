
var xAngle = 0, yAngle = 0, angle =0, held ="";
var cHold = [0,0,0,0,0,0]
var redHold =[['.RY','Z',0,0,0],['.RB','Z',0,0,90],['.RG','Z',0,0,-90],['.RW','Z',0,0,180]],
        yelHold =[['.OY','Y',0,180,0],['.GY','Y',0,-90,0],['.BY','Y',0,90,0],['.RY','Y',0,0,0]], 
        greHold =[['.GY','X',0,-90,0],['.RG','X',0,0,-90],['.GO','X',0,180,90],['.GW','X',0,-90,180]],
        blueHold =[['.BY','X',0,90,0],['.BO','X',0,180,-90],['.RB','X',0,0,90],['.BW','X',0,90,180]], 
        whiHold =[['.RW','Y',0,0,180],['.BW','Y',0,90,180],['.GW','Y',0,-90,180],['.OW','Y',0,180,180]],
        oraHold =[['.OY','Z',0,180,0],['.GO','Z',0,180,90],['.BO','Z',0,180,-90],['.OW','Z',0,180,180]];

document.addEventListener('keydown', function(e)
{
    switch(e.keyCode)
    {
        case 83: // s
                setCube();
                break;
        
        case 37: // left
                yAngle -= 90;
                break;

        case 38: // up
                xAngle += 90;
                break;

        case 39: // right
                yAngle += 90;
                break;

        case 40: // down
                xAngle -= 90;
                break;

        case 82: //r
                angle =-90;
                cHold[0] +=90;
                
                updateAngles(redHold,angle);
                rotateEdgePieces(redHold);
                rotateFaceEdges(redHold);
                rotateCenter('.redFace', cHold[0]);

                yelHold[3] = redHold[0].slice(0);
                greHold[1] = redHold[2].slice(0);
                blueHold[2] = redHold[1].slice(0);
                whiHold[0] = redHold[3].slice(0);

                held = redHold[2][1].slice(0);
                if (held == 'Z') { greHold[1][1] = 'X';}
                held = redHold[1][1].slice(0);
                if (held == 'Z') { blueHold[2][1] = 'X';}
                held = redHold[0][1].slice(0);
                if (held == 'Z') { yelHold[3][1] = 'Y';}
                held = redHold[3][1].slice(0);
                if (held == 'Z') { whiHold[0][1] = 'Y';}
                break;

        case 66: //b
                angle =-90;
                cHold[1] +=90;

                updateAngles(blueHold,angle);
                rotateEdgePieces(blueHold);
                rotateFaceEdges(blueHold);
                rotateCenter('.blueFace', cHold[1]);

                redHold[1] = blueHold[2].slice(0);
                yelHold[2] = blueHold[0].slice(0);
                whiHold[1] = blueHold[3].slice(0);
                oraHold[2] = blueHold[1].slice(0);

                held = blueHold[2][1].slice(0);
                if (held == 'X') { redHold[1][1] = 'Z';}
                held = blueHold[1][1].slice(0);
                if (held == 'X') { oraHold[2][1] = 'Z';}
                held = blueHold[0][1].slice(0);
                if (held == 'X') { yelHold[2][1] = 'Y';}
                held = blueHold[3][1].slice(0);
                if (held == 'X') { whiHold[1][1] = 'Y';}
                break;
        case 89: //y
                angle =90;
                cHold[2] +=90;
               
                updateAngles(yelHold,angle);
                rotateEdgePieces(yelHold);
                rotateFaceEdges(yelHold);
                rotateCenter('.yellowFace', cHold[2]);

                redHold[0] = yelHold[3].slice(0);
                greHold[0] = yelHold[1].slice(0);
                blueHold[0] = yelHold[2].slice(0);
                oraHold[0] = yelHold[0].slice(0);

                held = yelHold[3][1].slice(0);
                if (held == 'Y') { redHold[0][1] = 'Z';}
                held = yelHold[0][1].slice(0);
                if (held == 'Y') { oraHold[0][1] = 'Z';}
                held = yelHold[2][1].slice(0);
                if (held == 'Y') { blueHold[0][1] = 'X';}
                held = yelHold[1][1].slice(0);
                if (held == 'Y') { greHold[0][1] = 'X';}
                break;
        case 71: //g
                angle =90;
                cHold[3] -=90;

                updateAngles(greHold,angle);
                rotateEdgePieces(greHold);
                rotateFaceEdges(greHold);
                rotateCenter('.greenFace', cHold[3]);

                redHold[2] = greHold[1].slice(0);
                yelHold[1] = greHold[0].slice(0);
                whiHold[2] = greHold[3].slice(0);
                oraHold[1] = greHold[2].slice(0);

                held = greHold[1][1].slice(0);
                if (held == 'X') { redHold[2][1] = 'Z';}
                held = greHold[2][1].slice(0);
                if (held == 'X') { oraHold[1][1] = 'Z';}
                held = greHold[0][1].slice(0);
                if (held == 'X') { yelHold[1][1] = 'Y';}
                held = greHold[3][1].slice(0);
                if (held == 'X') { whiHold[2][1] = 'Y';}
                break;
        case 87: //w
                angle =-90;
                cHold[4] -=90;

                updateAngles(whiHold,angle);
                rotateEdgePieces(whiHold);
                rotateFaceEdges(whiHold);
                rotateCenter('.whiteFace', cHold[4]);

                redHold[3] = whiHold[0].slice(0);
                blueHold[3] = whiHold[1].slice(0);
                greHold[3] = whiHold[2].slice(0);
                oraHold[3] = whiHold[3].slice(0);

                held = whiHold[0][1].slice(0);
                if (held == 'Y') { redHold[3][1] = 'Z';}
                held = whiHold[3][1].slice(0);
                if (held == 'Y') { oraHold[3][1] = 'Z';}
                held = whiHold[1][1].slice(0);
                if (held == 'Y') { blueHold[3][1] = 'X';}
                held = whiHold[2][1].slice(0);
                if (held == 'Y') { greHold[3][1] = 'X';}
                break;
        case 79: //o
                angle =-90;
                cHold[5] -=90;

                updateAngles(oraHold,angle)
                rotateEdgePieces(oraHold);
                rotateFaceEdges(oraHold);
                rotateCenter('.orangeFace',cHold[5]);

                yelHold[0] = oraHold[0].slice(0);
                greHold[2] = oraHold[1].slice(0);
                blueHold[1] = oraHold[2].slice(0);
                whiHold[3] = oraHold[3].slice(0);

                held = oraHold[2][1].slice(0);
                if (held == 'Z') { blueHold[1][1] = 'X';}
                held = oraHold[1][1].slice(0);
                if (held == 'Z') { greHold[2][1] = 'X';}
                held = oraHold[0][1].slice(0);
                if (held == 'Z') { yelHold[0][1] = 'Y';}
                held = oraHold[3][1].slice(0);
                if (held == 'Z') { whiHold[3][1] = 'Y';}
                break;
    };
    jQuery('.fullOrigin').css('webkitTransform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );
    jQuery('.fullOrigin').css('Transform', "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)" );

    console.log(greHold[3].slice(0))
    console.log(whiHold[2].slice(0))
}, false);

function rotateFaceEdges(array) {
        var held="";

        held = array[0].slice(0);
        array[0] = array[1].slice(0);
        array[1] = array[3].slice(0);
        array[3] = array[2].slice(0);
        array[2] = held;
}

function rotateEdgePieces(hold) {
        for (var n in hold) {
                jQuery( hold[n][0] ).css('webkitTransform',
                 "rotateX(" +hold[n][2]+"deg) rotateY(" + hold[n][3]+"deg) rotateZ(" +hold[n][4]+"deg)");
        }
}

function rotateCenter(face, angle) {
        jQuery(face+' .C2 .two').css('webkitTransform', "rotateZ(" + angle +"deg)");
}

 function updateAngles(hold, angle) {
        for (var n in hold) {
                if (hold[n][1] == 'Z') { hold[n][4] += angle; }
                if (hold[n][1] == 'Y') { hold[n][3] += angle; }
                if (hold[n][1] == 'X') { hold[n][2] += angle; }  
        }                      
 }

 function setCube() {
        jQuery('.RB').css('webkitTransform', "rotateZ(90deg)");
        jQuery('.RG').css('webkitTransform', "rotateZ(-90deg)");
        jQuery('.RW').css('webkitTransform', "rotateZ(180deg)");
        jQuery('.BO').css('webkitTransform', "rotateY(180deg) rotateZ(-90deg)");
        jQuery('.GO').css('webkitTransform', "rotateY(180deg) rotateZ(90deg");
        jQuery('.OW').css('webkitTransform', "rotateY(180deg) rotateZ(180deg)");
        jQuery('.OY').css('webkitTransform', "rotateY(180deg)");
        jQuery('.BY').css('webkitTransform', "rotateY(90deg");
        jQuery('.GY').css('webkitTransform', "rotateY(-90deg)");
        jQuery('.BW').css('webkitTransform', "rotateY(90deg) rotateZ(180deg)");
        jQuery('.GW').css('webkitTransform', "rotateY(-90deg) rotateZ(180deg)");
 }




