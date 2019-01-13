var warriorPic = document.createElement('img');
var worldPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement('img');
    beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    var imageList = [
        {varName: warriorPic, theFile:"hero.png"},

        {worldType: WORLD_ROAD, theFile:"world_road.png"},
        {worldType: WORLD_WALL, theFile:"world_wall.png"},
        {worldType: WORLD_TROPHY, theFile:"world_trophy.png"},
        {worldType: WORLD_DOOR, theFile:"world_door.png"},
        {worldType: WORLD_KEY, theFile:"world_key.png"}
    ];

    picsToLoad = imageList.length;

    for(var i=0; i<imageList.length; i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
        }
    }
}