const players = [
    {
        name: 'Patlu',
        numCanRemove: 1,
    },
    {
        name: 'Motu',
        numCanRemove: 2,
    }
];

let bricks = 13;
let round = 1;
let currentPlayer = null;

const removeBricks = (bricks, numToRemove) => {
    if (bricks < numToRemove) {
        return 0;
    }
    return bricks - numToRemove;
}

while(bricks > 0) {
    for (let i = 0; i < players.length; i++) {
        currentPlayer = players[i];
        bricks = removeBricks(bricks, currentPlayer.numCanRemove * round);
        console.log(`${currentPlayer.name} removed ${currentPlayer.numCanRemove} with ${bricks} remain`);
        if (bricks === 0) {
            break;
        }
    }
    round ++;
}

const h1 = document.getElementById('winner');
h1.innerText = currentPlayer.name;