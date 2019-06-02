"use strict";
const enterNameFrm = document.getElementById("enterNameFrm");
const enterNameInpt = document.getElementById("enterNameInpt");

var name;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

let game;

class RockPaperScissors
{
	constructor()
	{
		
	}
	
}

enterNameFrm.addEventListener("submit", function(ev){
	ev.preventDefault();
	if(enterNameInpt.value === "")
	{
		return alert("Please enter a valid name.")
		console.log("BAD")
	}
	else
	{
		name = enterNameInpt.value
		console.log(name)
		homeScreen.classList.add("hidden");
		gameScreen.classList.remove("hidden");
	}
});