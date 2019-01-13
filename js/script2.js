var canvas, canvasContext;

var hero = new Warrior(warriorPic, 'Hero');

    window.onload = function () {
        canvas = document.getElementById('game');
        canvasContext = canvas.getContext('2d');

        colorRect(0,0, canvas.width,canvas.height, 'red');
        colorText("LOADING GAME", canvas.width/2,canvas.height/2, 'black');
        loadImages();
    };

    function imageLoadingDoneSoStartGame() {
        var framesPerSecond = 30;
        setInterval(updateAll, 1000/framesPerSecond);
        setupInput();

        loadLevel(levelOne);
    }
    
    function loadLevel(whichLevel) {
        worldGrid = whichLevel.slice();
        message.innerText = `Keys: ${hero.keyHeld}`;
        hero.reset();
    }

    function updateAll() {
        moveAll();
        drawAll();
    }

    function moveAll() {
        hero.move();
    }

    function drawAll() {
        drawWorld();
        hero.draw();
    }