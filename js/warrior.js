const HERO_MOVE_SPEED = 5;
let message = document.getElementById('message');

class Warrior {
    constructor(warriorPic, warriorName) {
        this.x = 50;
        this.y = 50;
        this.ang = 0;
        this.myWarPic = warriorPic; //which picture to use
        this.name = warriorName;

        this.keyHeld_North = false;
        this.keyHeld_South = false;
        this.keyHeld_West = false;
        this.keyHeld_East = false;

        this.keyHeld = 0;
    }

    setupInput(upKey,downKey, leftKey,rightKey) {
        this.controlKeyUp = upKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyRight = rightKey;
    }

    reset() {
        for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {

                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

                if(worldGrid[arrayIndex] === WORLD_PLAYERSTART) {
                    worldGrid[arrayIndex] = WORLD_ROAD;
                    this.x = eachCol * WORLD_W + WORLD_W/2;
                    this.y = eachRow * WORLD_H + WORLD_H/2;
                    return;
                }
            }
        }
    }

    move() {
        var nextX = this.x;
        var nextY = this.y;

        if(this.keyHeld_North) {
            nextY -= HERO_MOVE_SPEED;
        }
        if(this.keyHeld_South) {
            nextY += HERO_MOVE_SPEED;
        }
        if(this.keyHeld_East) {
            nextX += HERO_MOVE_SPEED;
        }
        if(this.keyHeld_West) {
            nextX -= HERO_MOVE_SPEED;
        }

        var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
        var walkIntoTileType = WORLD_WALL;

        if(walkIntoTileIndex !== undefined) {
            walkIntoTileType = worldGrid[walkIntoTileIndex];
        }

        switch (walkIntoTileType) {
            case WORLD_ROAD:
                this.x = nextX;
                this.y = nextY;
                break;
            case WORLD_TROPHY:
                message.innerText ='You won!';
                console.log(this.name);
                worldGrid[walkIntoTileIndex] = WORLD_ROAD;
                //this.reset();
                break;
            case WORLD_DOOR:
                if(this.keyHeld > 0) {
                    this.keyHeld--;
                    message.innerText = `Keys: ${this.keyHeld}`;
                    worldGrid[walkIntoTileIndex] = WORLD_ROAD;
                }
                break;
            case WORLD_KEY:
                this.keyHeld++;
                message.innerText = `Keys: ${this.keyHeld}`;
                worldGrid[walkIntoTileIndex] = WORLD_ROAD;
            case WORLD_WALL:
            default:
                break;
        }
    }

    draw() {
        drawBitmapCenteredWithRotation(this.myWarPic, this.x,this.y, this.ang);
    }

}