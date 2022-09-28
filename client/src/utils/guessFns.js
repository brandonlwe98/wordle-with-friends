const axios = require('axios')

export const sendGuess = async (username, word, colors, letters, guessNum) => {
	try {
		const res = await axios.get(
			`http://coms-319-g11.class.las.iastate.edu:8080/uploadguess?username=${username}&word=${word}&colors=${colors}&letters=${letters}&guessNum=${guessNum}&createdAt=${new Date()
				.toISOString()
				.slice(0, 10)}`
		)
		return res.data
	} catch (err) {
		return
	}
}

export const getGuesses = async (username) => {
	try {
		const res = await axios.get(
			`http://coms-319-g11.class.las.iastate.edu:8080/getguesses?username=${username}`
		)
		return res.data
	} catch (err) {
		return
	}
}

export const getLeaderboard = async () => {
	try {
		const res = await axios.get('http://coms-319-g11.class.las.iastate.edu:8080/getleaderboard')
		return res.data
	}
	catch (err) {
		return
	}
}
