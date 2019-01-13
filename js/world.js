const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;
var levelOne = [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 5, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0, 1,
                1, 0, 1, 0, 0, 1, 1, 1, 5, 0, 5, 1, 0, 0, 2, 1,
                1, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 4, 1, 1, 1,
                1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1,
                1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 4, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 0, 3, 1, 1, 1, 0, 1, 1, 1, 0, 1,
                1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1,
                1, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

var worldGrid = [];

const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_TROPHY = 3;
const WORLD_DOOR = 4;
const WORLD_KEY = 5;

function returnTileIndexAtColRow(col,row) {
    if(col >= 0 && col < WORLD_COLS &&
        row >= 0 && row < WORLD_ROWS) {
        var worldIndexUnderCoord1 = rowColToArrayIndex(col, row);
        return worldIndexUnderCoord1;
    } else {
        return null;
    }
}

function tileTypeHasTransparency(checkTileType) {
    return (
        checkTileType === WORLD_DOOR ||
        checkTileType === WORLD_KEY ||
        checkTileType === WORLD_TROPHY
    );
}


function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}

function getTileIndexAtPixelCoord(pixelX,pixelY)	{
    var	tileCol	= pixelX / WORLD_W;
    var	tileRow	= pixelY / WORLD_H;
    tileCol	= Math.floor(tileCol);
    tileRow	= Math.floor(tileRow);

    if(tileCol < 0 || tileCol >= WORLD_COLS ||
        tileRow	< 0 || tileRow >= WORLD_ROWS)	{
        return WORLD_WALL;
    }
    var	tileIndex =	returnTileIndexAtColRow(tileCol, tileRow);
    return tileIndex;
}

function drawWorld() {
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;

    for(let eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
        drawTileX = 0;
        for(let eachCol=0;eachCol<WORLD_COLS;eachCol++) {


            let tileKindHere = worldGrid[arrayIndex];
            if(tileTypeHasTransparency(tileKindHere)) {
                canvasContext.drawImage(worldPics[WORLD_ROAD], drawTileX, drawTileY);
            }
            let useImg = worldPics[tileKindHere];

            canvasContext.drawImage(useImg, drawTileX,drawTileY);

            drawTileX += WORLD_W;
            arrayIndex++;
        }
        drawTileY += WORLD_H;
    }
}