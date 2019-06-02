"use strict";
const enterNameFrm = document.getElementById("enterNameFrm");

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

enterNameFrm.addEventListener("submit", function(ev){
	ev.preventDefault();
	homeScreen.classList.add("hidden");
	gameScreen.classList.remove("hidden");
});