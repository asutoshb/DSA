/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0;
    let y = 0;
    let max = 0;

    let set = new Set();
    for(let i = 0; i<obstacles.length; i++) {
        let obs = obstacles[i];
        let [x_, y_] = obs;
        let key = `${x_}_${y_}`;
        set.add(key);
    }
    let dir = [0,1]; // initially robot is in north facing
    for(let i = 0; i<commands.length; i++) {
        if(commands[i] == -2) {
            // left rotation
            dir = [-dir[1], dir[0]];
        } else if(commands[i] == -1) {
            dir = [dir[1], -dir[0]];
        } else {
            for(let j = 0; j<commands[i]; j++) {
                let newX = x + dir[0];
                let newY = y + dir[1];
                let key = `${newX}_${newY}`;
                if(set.has(key)) break;
                x = newX;
                y = newY;
            }
        }

        max = Math.max(max, (x*x) + (y*y));
    }

    return max;
};