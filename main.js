
document.addEventListener("DOMContentLoaded",function() {

	let espaceJeux = document.getElementById('espaceJeux');
	// let largPage = (document.body.clientWidth);
	// let hautPage = (document.body.clientHeight);
	let pac = document.getElementById("pacman");
	let posX = pac.offsetLeft;
	let posY = pac.offsetTop;
	var mc = new Hammer(espaceJeux);
	let audio = new Audio("audio/0477.wav");

	function pacman() {
		
		document.addEventListener("keydown",function(event) {
			switch(event.keyCode) {
				case 39:
					if (posX >= 900) {
						audio.play();
					}else {
						console.log("gauche");
						posX = posX + 50;
						// posX += 10;  la mm chose que au dessu
						pac.style.left = posX + "px";
						pac.style.transition = "0.2s";
						break;
					}
			}
			switch(event.keyCode) {
				case 37:
					if (posX === 0){
						audio.play();
					}else {
						console.log("droite");
						posX = posX - 50;
						pac.style.left = posX + "px";
						pac.style.transition = "0.2s";
						break;
					}
			}
			switch(event.keyCode) {
				case 38:
					if (posY === 0) {
						audio.play();						
					}else {
						console.log("haut");
						posY = posY - 50;
						pac.style.top = posY + "px";
						pac.style.transition = "0.2s";
						break;
					}
			}			
			switch(event.keyCode) {
				case 40:
					if (posY >= 500) {
						audio.play();						
					}else {
						console.log("bas");
						posY = posY + 50;
						pac.style.top = posY + "px";
						pac.style.transition = "0.2s";
						break;
					}													
			}
			console.log(event);
		})
	}
	pacman();


	function pacmanTactile() {



		mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

		mc.on("panleft panright panup pandown", function(event) {
			console.log("tac");
			switch (event.type) {
				case "panright":
					console.log("right");
					if (posX >= 900) {
					}else{
						posX = posX + 10;
						pac.style.left = posX + "px";
					}
					break;
			}
			switch (event.type) {
				case "panleft":
					if (posX === 0) {
					}else{
						posX = posX - 10;
						pac.style.left = posX + "px";
					}
					break;
			}
			switch (event.type) {
				case "panup":
					if (posY === 0) {
					}else{
					posY = posY - 10;
					pac.style.top = posY + "px";
					}
					break;
			}
			switch (event.type) {
				case "pandown":
					if (posY >= 500) {
					}else{
						posY = posY + 10;
						pac.style.top = posY + "px";
					}
					break;
			}
		});
		
	}
	pacmanTactile();
	
});
