"use strict";
const enterNameFrm = document.getElementById("enterNameFrm");
const enterNameInpt = document.getElementById("enterNameInpt");

var name;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

const enterChoiceFrm = document.getElementById("enterChoiceFrm");
var decision = document.getElementById("decision");

let game;

class RockPaperScissors
{
	constructor()
	{
		this.randomNumber = Math.floor((Math.random() * 3) + 0)
		console.log(this.randomNumber);
	}
	
	whoWon(userVal)
	{
		if(userVal === 0)
		{
			if(this.randomNumber === 0)
			{
				console.log("TIE Rock V Rock");
			}
			else if(this.randomNumber === 1)
			{
				console.log("BOT WINS Rock V PAPER");
			}
			else if(this.randomNumber === 2)
			{
				console.log("PLAYER WINS Rock V SCISSORS");
			}
		}
		else if(userVal === 1)
		{
			if(this.randomNumber === 0)
			{
				console.log("PLAYER WINS PAPER V Rock");
			}
			else if(this.randomNumber === 1)
			{
				console.log("TIE PAPER V PAPER");
			}
			else if(this.randomNumber === 2)
			{
				console.log("BOT WINS PAPER V SCISSORS");
			}
		}
		else if(userVal === 2)
		{
			if(this.randomNumber === 0)
			{
				console.log("BOT WINS SCISSORS V Rock");
			}
			else if(this.randomNumber === 1)
			{
				console.log("PLAYER WINS SCISSORS V PAPER");
			}
			else if(this.randomNumber === 2)
			{
				console.log("TIE SCISSORS V SCISSORS");
			}
		}
	}
}

enterNameFrm.addEventListener("submit", function(ev)
{
	ev.preventDefault();
	if(enterNameInpt.value === "")
	{
		return alert("Please enter a valid name.")
	}
	else
	{
		name = enterNameInpt.value
		homeScreen.classList.add("hidden");
		gameScreen.classList.remove("hidden");
	}
});

enterChoiceFrm.addEventListener("submit", function(ev)
{
	ev.preventDefault();
	console.log("TEST");
	game = new RockPaperScissors();
	var rockPaperOrScissors = parseInt(decision.options[decision.selectedIndex].value);
	console.log(rockPaperOrScissors);
	game.whoWon(rockPaperOrScissors);
});