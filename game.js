/**
 * Created by mordrax on 29/04/14.
 */
var fs = require('fs');

var world = JSON.parse(fs.readFileSync('world'));

var run = function() {
    // world evolving
    world.time = (new Date()).toString();

    fs.writeFile('world', JSON.stringify(world), function() {console.log("file written")});
}

setInterval(run, 1000);