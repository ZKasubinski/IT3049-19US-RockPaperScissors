"use strict";
const enterNameFrm = document.getElementById("enterNameFrm");
const enterNameInpt = document.getElementById("enterNameInpt");

var name;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

const enterChoiceFrm = document.getElementById("enterChoiceFrm");
var decision = document.getElementById("decision");

let game;

var round = 0;

class RockPaperScissors
{
	constructor()
	{
		this.randomNumber = Math.floor((Math.random() * 3) + 0)
	}
	
	whoWon(userVal)
	{
		const winnerPar = document.createElement("p");
		if(userVal === 0)
		{
			if(this.randomNumber === 0)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Tie game, ' + name + ' selected: rock, Computer selected: rock</span>'
				document.body.appendChild(winnerPar);
			}
			else if(this.randomNumber === 1)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Computer wins, ' + name + ' selected: rock, Computer selected: paper</span>'
				document.body.appendChild(winnerPar);
			}
			else if(this.randomNumber === 2)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': ' + name + ' wins, ' + name + ' selected: rock, Computer selected: scissors</span>'
				document.body.appendChild(winnerPar);
			}
		}
		else if(userVal === 1)
		{
			if(this.randomNumber === 0)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': ' + name + ' wins, ' + name + ' selected: paper, Computer selected: rock</span>'
				document.body.appendChild(winnerPar);
			}
			else if(this.randomNumber === 1)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Tie game, ' + name + ' selected: paper, Computer selected: paper</span>'
				document.body.appendChild(winnerPar);
			}
			else if(this.randomNumber === 2)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Computer wins, ' + name + ' selected: paper, Computer selected: scissors</span>'
				document.body.appendChild(winnerPar);
			}
		}
		else if(userVal === 2)
		{
			if(this.randomNumber === 0)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Computer wins, ' + name + ' selected: scissors, Computer selected: rock</span>'
				document.body.appendChild(winnerPar);
				
			}
			else if(this.randomNumber === 1)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': ' + name + ' wins, ' + name + ' selected: scissors, Computer selected: paper</span>'
				document.body.appendChild(winnerPar);
			}
			else if(this.randomNumber === 2)
			{
				round += 1;
				winnerPar.innerHTML = '<span>Round ' + round + ': Tie game, ' + name + ' selected: scissors, Computer selected: scissors</span>'
				document.body.appendChild(winnerPar);
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
	game = new RockPaperScissors();
	var rockPaperOrScissors = parseInt(decision.options[decision.selectedIndex].value);
	game.whoWon(rockPaperOrScissors);
});