setInterval(callBack, 1000);

function callBack() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}