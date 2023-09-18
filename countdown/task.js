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