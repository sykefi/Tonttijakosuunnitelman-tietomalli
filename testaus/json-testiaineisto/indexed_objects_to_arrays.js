fs = require('fs')
function findAndConvertRecursive(node, test, converter) {
    if (typeof(test) === "function" && typeof(converter) === "function") {
        if (node !== null && typeof(node) === "object") {
            for (const [key, value] of Object.entries(node)) {
                if (test(key, value)) {
                    node[key] = converter(value);
                }
                if (node[key] !== null && typeof(node[key]) === "object") {
                    findAndConvertRecursive(node[key], test, converter);
                }
            }
        }
    }
    return node;
}

var finder = (key, value) => {
    if (value !== null && !Array.isArray(value) && typeof(value) === "object") {
        var keys = Object.keys(value);
        if (keys.length > 0) {
            if (keys[0] === "0") {
                return true;
            }
        } else if (key.substr(-1) === "s") {
            return true;
        }
    }
}

var converter = (input) => {
    if (input !== null && typeof(input) === "object") {
        if (Object.keys(input).length === 0) {
            return new Array();
        } else {
            return Object.values(input);
        }
    }
}

var myArgs = process.argv.slice(2);
var inputFName = myArgs[0];
fs.readFile(inputFName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var k = JSON.parse(data);
  var result = findAndConvertRecursive(k, finder, converter);
  console.log(JSON.stringify(result, null, 4));
});