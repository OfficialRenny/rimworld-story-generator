var rimworldThings = {
	storytellers: ['Randy', 'Cassandra', 'Pheobe', 'Modded'],
	scenarios: ['Crashlanded', 'Lost Tribe', 'The Rich Explorer', 'Naked Brutality', 'Make Your Own', 'Modded'],
	biomes: ['Temperate Forest', 'Temperate Swamp', 'Tropical Forest', 'Tropical Swamp', 'Arid Shrubland', 'Desert', 'Extreme Desert', 'Boreal Forest', 'Cold Bog', 'Tundra', 'Ice Sheet', 'Sea Ice', 'Random'],
	worldSizes: ['30%', '50%', '100%'],
	mapSize: ['Small', 'Medium', 'Large', 'Ludeonicrous'],
	startingQuadrum: ['Aprimay', 'Jugust', 'Septober', 'Decembary'],
	colonists: ['No re-rolls', 'Up to 1 re-roll per pawn', 'Up to 3 re-rolls per pawn', 'Up to 5 re-rolls per pawn', 'Plan your pawns however you like.'],
	strategy: ['Trap Focus', 'Defense Animals', 'Melee Focus', 'Ranged Focus', 'Mountain Bunker', 'No Perimeter Wall'],
	industry: ['Food', 'Textiles', 'Furniture/Art', 'Slaves/Organs', 'Livestock', 'Transhumanism', 'Drugs/Narcotics'],
	foreignRelations: ['Peace with all!', 'RAID EVERYONE!', 'Just go with the flow.'],
}

function randomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function GameSettings() {
	this.storyteller = rimworldThings.storytellers[randomInt(rimworldThings.storytellers.length)];
	this.scenario = rimworldThings.scenarios[randomInt(rimworldThings.scenarios.length)];
	this.biome = rimworldThings.biomes[randomInt(rimworldThings.biomes.length)];
	this.worldSize = rimworldThings.worldSizes[randomInt(rimworldThings.worldSizes.length)];
	this.mapSize = rimworldThings.mapSize[randomInt(rimworldThings.mapSize.length)];
	this.quadrum = rimworldThings.startingQuadrum[randomInt(rimworldThings.startingQuadrum.length)];
	this.colonists = rimworldThings.colonists[randomInt(rimworldThings.colonists.length)];
	this.strategy = rimworldThings.strategy[randomInt(rimworldThings.strategy.length)];
	this.industry = rimworldThings.industry[randomInt(rimworldThings.industry.length)];
	this.foreignRelations = rimworldThings.foreignRelations[randomInt(rimworldThings.foreignRelations.length)];
}

function gen() {
	let newGame = new GameSettings();
	document.getElementById("storyteller").innerHTML = newGame.storyteller;
	document.getElementById("scenario").innerHTML = newGame.scenario;
	document.getElementById("biome").innerHTML = newGame.biome;
	document.getElementById("worldSize").innerHTML = newGame.worldSize;
	document.getElementById("mapSize").innerHTML = newGame.mapSize;
	document.getElementById("quadrum").innerHTML = newGame.quadrum;
	document.getElementById("colonists").innerHTML = newGame.colonists;
	document.getElementById("strategy").innerHTML = newGame.strategy;
	document.getElementById("industry").innerHTML = newGame.industry;
	document.getElementById("foreignRelations").innerHTML = newGame.foreignRelations;
	console.log("Generated Game.");
}

$(function() {
	gen();
});