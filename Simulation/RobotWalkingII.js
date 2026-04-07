/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.idx = 0;
    this.arr = [];
    this.changed = false;
    // bottom row, Left to right ( E -> 0 )
    for(let x = 0; x<width; x++) {
        this.arr.push([x, 0, 0]);
    }
    // right most column, Bottom to top ( N -> 1 )
    for(let y = 1; y<height; y++) {
        this.arr.push([width-1, y, 1]);
    }

    // top row, right to left ( W -> 2 ) 
    for(let x = width-2; x>=0; x--) {
        this.arr.push([x, height-1, 2]);
    }

    // left most column, top to bottom ( S -> 3 )
    for(let y = height-2; y>0; y--) {
        this.arr.push([0, y, 3]);
    }

    this.arr[0][2] = 3;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    this.changed = true;
    this.idx = (this.idx+num) % this.arr.length;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    let val = this.arr[this.idx];
    let x = val[0];
    let y = val[1];
    return [x,y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    if(!this.changed) return "East";
    let dir = this.arr[this.idx][2];
    if(dir == 0) return "East";
    if(dir == 1) return "North";
    if(dir == 2) return "West";
    if(dir == 3) return "South";
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */