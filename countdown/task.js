/*let timer = 59;
let freeText = function () {
    let output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent <= 0) {
        alert("Вы победили в конкурсе");
        clearInterval(inervalTimer);
    }
}
let inervalTimer = setInterval(freeText, 1000);
*/



let timer = 59;

let myTimer = setInterval(() => {
	
	if(timer > 0) {
		timer = timer - 1;
		document.getElementById("timer").innerHTML = timer
	}

	if (timer <= 0) {
        alert("Вы победили в конкурсе");
		clearInterval(myTimer);	
	}

}, 1000);