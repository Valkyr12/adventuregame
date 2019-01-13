function drawBitmapCenteredWithRotation(useBitmap, atX,atY, withAng) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
    canvasContext.restore();
}
function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}
function colorText(showWords, textX,textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX,textY);
}