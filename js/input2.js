const KEY_LEFT_ARROW = 'ArrowLeft';
const KEY_RIGHT_ARROW = 'ArrowRight';
const KEY_UP_ARROW = 'ArrowUp';
const KEY_DOWN_ARROW = 'ArrowDown';

function setupInput() {
    // canvas.addEventListener('mousemove', updateMousePos);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    hero.setupInput(KEY_UP_ARROW,KEY_DOWN_ARROW, KEY_LEFT_ARROW,KEY_RIGHT_ARROW);
}

function keySet(keyEvent, whichWarrior, setTo) {
    if(keyEvent.key === whichWarrior.controlKeyLeft) {
        whichWarrior.keyHeld_West = setTo;
    }
    if(keyEvent.key === whichWarrior.controlKeyRight) {
        whichWarrior.keyHeld_East = setTo;
    }
    if(keyEvent.key === whichWarrior.controlKeyUp) {
        whichWarrior.keyHeld_North = setTo;
    }
    if(keyEvent.key === whichWarrior.controlKeyDown) {
        whichWarrior.keyHeld_South = setTo;
    }
}

function keyPressed(event) {
    keySet(event, hero, true);
}

function keyReleased(event) {
    keySet(event, hero, false);
}
