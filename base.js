var rimworldThings = {
	storytellers: ['Randy', 'Cassandra', 'Pheobe', 'Modded'],
	difficulties: ["Peaceful", "Builder", "Medium", "Rough", "Savage", "Merciless"],
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
    for (let [k, v] of Object.entries(rimworldThings)) {
        this[k] = v[randomInt(v.length)];
    }
}

function gen() {
    let newGame = new GameSettings();

    for (let [k, v] of Object.entries(rimworldThings)) {
		$(`#${k}`).fadeOut(100, () => {
			document.getElementById(k).innerHTML = newGame[k];
			$(`#${k}`).fadeIn();
		});
    }

    console.log("Generated Game.");
}

$(function() {
	gen();
});