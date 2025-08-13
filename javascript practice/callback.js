
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('  callback function activated');
}
 debugger

 greet('chanakya', callMe);