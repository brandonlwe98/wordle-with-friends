import React, { useEffect, useState } from 'react'
import Keyboard from '../components/Keyboard'
import { Button, Box, toast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { GiExitDoor } from 'react-icons/gi'
import * as Toastr from 'toastr'
import '../styles/toastr.css'
import LetterGrid from '../components/LetterGrid'
import {
	createBoard,
	getAllUsedTiles,
} from '../utils/initFns'
import words from '../utils/words'
import validGuesses from '../utils/validGuesses'
import { getColorArray } from '../utils/logicFns'
import Anime from 'react-animejs-wrapper'
import { sendGuess } from '../utils/guessFns'

const SinglePlayer = () => {
	const [gameOver, setGameOver] = useState(
		sessionStorage.getItem('gameOver') || false
	)
	const [guessNo, setGuessNo] = useState(
		Number(sessionStorage.getItem('guessNo')) || 1
	)
	const [target, setTarget] = useState(sessionStorage.getItem('target') || '')
	const [tiles, setTiles] = useState(createBoard())
	const [filledTiles, setFilledTiles] = useState([])

	const [animate, setAnimate] = useState(true)
	useEffect(() => {
		setTimeout(() => setAnimate(false), 1500)
	}, [])

	useEffect(() => {
		for (let i = 0; i < 26; i++) {
			document.getElementById(
				String.fromCharCode(65 + i)
			).style.backgroundColor = sessionStorage.getItem(
				String.fromCharCode(65 + i) + '.color'
			)
		}
	}, [])

	const resetGame = () => {
		const word = words[Math.floor(Math.random() * words.length)]
		// console.log(word.toUpperCase())
		setGuessNo(sessionStorage.getItem('guessNo') || 1)
		setTarget(sessionStorage.getItem('target') || word.toUpperCase())
		setTiles(createBoard())
		setFilledTiles([])
	}
	useEffect(() => {
		// run this side effect on component mount (only once)
		resetGame()
	}, [])

	useEffect(() => {
		// run this side effect on component mount (only once)
		sessionStorage.setItem('target', target)
	}, [guessNo])

	useEffect(() => {
		// run this side effect whenever tiles array changes
		setFilledTiles(getAllUsedTiles(tiles))
	}, [tiles])
	useEffect(() => {
		// run this side effect whenever tiles array changes
		for (let i = 0; i < 30; i++) {
			sessionStorage.setItem('tiles[' + i + '].color', tiles[i].color)
			sessionStorage.setItem('tiles[' + i + '].value', tiles[i].value)
		}
	}, [guessNo, gameOver])

	useEffect(() => {
		sessionStorage.setItem('guessNo', guessNo)
		if (guessNo > 6) {
			setGameOver(true)
			Toastr.error(`You lost! The word was ${target}`)
		}
	}, [guessNo])

	useEffect(() => {
		// storing input name
		if (gameOver == true) {
			const username = sessionStorage.getItem('username')
			sessionStorage.setItem('gameOver', gameOver)
			sessionStorage.clear()
			if(username)
				sessionStorage.setItem('username', username)
		}
		else {
			sessionStorage.setItem('gameOver', gameOver)
		}
	}, [gameOver])

	const handleKeys = (e) => {
		if (e.keyCode === 13) submitGuess()
		else if (e.keyCode === 8 || e.keyCode === 46) deleteLastLetter()
		else if (e.keyCode >= 65 && e.keyCode <= 90) addLetter(e.key.toUpperCase())
		else Toastr.error('Not a valid character!')
	}

	const submitGuess = () => {
		const tileRow = filledTiles.slice(guessNo * 5 - 5, guessNo * 5)
		const guess = tileRow.map((tile) => tile.value).join('')

		// check if guess is 5 characters long
		if (guess.length < 5) {
			Toastr.error('Not enough letters!')
			return
		}
		// check if guess is valid
		if (!validGuesses.find((word) => word.toUpperCase() === guess)) {
			Toastr.error('not a valid word!')
			return
		}

		// check if guess is in target word
		const colors = getColorArray(target, guess)
		for (let i = 0; i < colors.length; i++) {
			tileRow[i].color = colors[i]
			if (
				document.getElementById(tileRow[i].value).style.backgroundColor !==
				'green'
			) {
				document.getElementById(tileRow[i].value).style.backgroundColor =
					colors[i]
			}
		}

		for (let i = 0; i < 26; i++) {
			sessionStorage.setItem(
				String.fromCharCode(65 + i) + '.color',
				document.getElementById(String.fromCharCode(65 + i)).style
					.backgroundColor
			)
		}

		if (target === guess) {
			Toastr.success('You win!', 'Congratulations!')
			setGuessNo((n) => +n)
			setGameOver(true)
			const username = sessionStorage.getItem('username')
			const colors = tiles.map((tile) => (tile.color ? tile.color : ' '))
			const letters = tiles.map((tile) => (tile.value ? tile.value : ' '))
			// console.log(colors.join(','))
			sendGuess(username, guess, colors.join(','), letters.join(','), guessNo)
		}
		setGuessNo((n) => +n + 1)
	}

	const deleteLastLetter = () => {
		if (filledTiles.length === guessNo * 5 - 5) return // prevents deleting last guess
		setTiles((prevTiles) =>
			prevTiles.map((tile) =>
				tile.id === filledTiles.length - 1 ? { ...tile, value: '' } : tile
			)
		)
	}

	const addLetter = (letter) => {
		const tileRow = filledTiles.slice(guessNo * 5 - 5, guessNo * 5)
		const guess = tileRow.map((tile) => tile.value).join('')
		if (guess.length !== 5) {
			setTiles((prevTiles) =>
				prevTiles.map((tile) =>
					tile.id === filledTiles.length ? { ...tile, value: letter } : tile
				)
			)
		}
	}

	return (
		<Box
			id='gameWindow'
			tabIndex={0}
			onKeyDown={(e) => handleKeys(e)}
			style={{ border: 'none' }}
			className='focus:outline-none hover:cursor-pointer'
		>
			{animate ? (
				<Anime config={{ scale: [0, 1], duration: 1500 }}>
					<Box>
						<LetterGrid tiles={tiles} guessNo={guessNo} gameOver={gameOver} />
					</Box>
				</Anime>
			) : (
				<Box>
					<LetterGrid tiles={tiles} guessNo={guessNo} gameOver={gameOver} />
				</Box>
			)}
			<Keyboard
				addLetter={addLetter}
				deleteLastLetter={deleteLastLetter}
				submitGuess={submitGuess}
			/>
			<Link to='/' className='flex justify-center'>
				<Button size='lg' id='btnLeave' className='my-10 gap-2'>
					<GiExitDoor /> Leave Room
				</Button>
			</Link>
		</Box>
	)
}

export default SinglePlayer
