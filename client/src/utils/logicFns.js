export const getColorArray = (target, guess) => {
	const map = new Map()
	const colors = ['gray', 'gray', 'gray', 'gray', 'gray']
	for (let i = 0; i < target.length; i++) {
		if (!map[target[i]]) {
			map[target[i]] = 0
		}
		map[target[i]] += 1
	}
	for (let i = 0; i < guess.length; i++) {
		if (map[guess[i]] > 0 && target[i] === guess[i]) {
			map[guess[i]] -= 1
			colors[i] = 'green'
		}
	}
	// console.log(colors)
	for (let i = 0; i < guess.length; i++) {
		if (map[guess[i]] && !(target[i] === guess[i]) && colors[i] !== 'green') {
			map[guess[i]] -= 1
			colors[i] = 'gold'
		}
	}
	return colors
}
