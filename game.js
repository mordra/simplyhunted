/**
 * Created by mordrax on 29/04/14.
 */
var fs = require('fs');

var world = JSON.parse(fs.readFileSync('world'));

// the x and y dimension of the world
world.dimension = world.dimension || {x:100, y:100};

// the array that contains the ground layer of the world
world.data = world.data || new Array(world.dimension.x);
for (var i in world.data) {
    world.data[i] = new Array(world.dimension.y);
}


var run = function() {
    // world evolving
    world.time = (new Date()).toString();

    fs.writeFile('world', JSON.stringify(world), function() {console.log("file written")});
}

setInterval(run, 1000);