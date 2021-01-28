// Events of JavaScript
// to trigger the js from the html 
// https://www.w3schools.com/JS/js_events_examples.asp
function message0() {
    console.log("Welcome..");
}
// Event Listener
document.getElementById('sample-btn').addEventListener('click', message2);
function message2(e) {//parameter name can be anything: e/event/val
    console.log(" e Button Clicked");
    let val = e;
    console.log(val);
    val = e.target;//call from target
    console.log(val);
    val = e.target.id;
    console.log(val);
    val = e.timeStamp;//the click time after page loaded
    console.log(val);
    val = e.type;
    console.log(val);
    val = e.clientY;//pixel in Y axis of page
    console.log(val);
    val = e.clientX;//pixel in  X axis of page
    console.log(val);
    val = e.offsetY;//pixel in  Y axis of button
    console.log(val);
    val = e.offsetX;//pixel in  X axis of button
    console.log(val);
    val = this;
    this.style.background = `#${e.offsetX}`;
}


document.querySelector(".container").addEventListener('mousemove', message);
document.querySelector('.container').style.background = "lightblue";
function message(e) {//parameter name can be anything: e/event/val
    console.log(" e Button Clicked");
    let val = e;
    console.log(val);
    val = e.target;//same as this
    console.log(val);
    val = e.target.id;
    console.log(val);
    val = e.timeStamp;
    console.log(val);
    val = e.type;
    console.log(val);
    val = e.clientY;
    console.log(val);
    val = e.clientX;
    console.log(val);
    val = e.offsetY;
    console.log(val);
    val = e.offsetX;
    console.log(val);
    val = this;
    console.log(val);
    this.style.background = `#${e.offsetX}`;// color changed for different positions as it takes the hexadecimal value of the position as color
}

document.querySelector("#name").addEventListener('focus', test);
document.querySelector("#name").addEventListener('focus', test1);
document.querySelector("#name").addEventListener('keyup', test2);
function test(e) {
    console.log("Focused");
}
function test1(e) {
    this.style.background = 'pink';
}

function test2(e) {
    console.log(this.value);//as type
    document.getElementById("demo").innerText = this.value;//replace the demo by typing input
}