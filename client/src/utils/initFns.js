export const createBoard = () => {
	const arr = []

	for (let i = 0; i < 30; i++) {
		var tileval = ''
		var tilecol = ''
		if (sessionStorage.getItem("tiles[" + i + "].value") != null) {
			tileval = sessionStorage.getItem("tiles[" + i + "].value")
		}
		if (sessionStorage.getItem("tiles[" + i + "].color") != null) {
			tilecol = sessionStorage.getItem("tiles[" + i + "].color")
		}
		const tile = {
			id: i,
			value: tileval,
			color: tilecol,
		}
		arr.push(tile)
	}
	return arr
}

export const getFirstEmptyTile = (tiles) => {
	if (tiles) {
		const emptyTiles = tiles.filter((tile) => tile.value === '')
		return emptyTiles[0]
	}
	return
}

export const getAllUsedTiles = (tiles) => {
	if (tiles) {
		const usedTiles = tiles.filter((tile) => tile.value !== '')
		return usedTiles
	}
	return []
}
