import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import MiniBoard from '../components/MiniBoard'

const PastWordleCard = ({ guess }) => {
	const word = guess.word.toUpperCase()
	const letters = guess.letters
	const colors = guess.colors
	const numGuesses = guess.guessNum
	const createdAt = guess.createdAt
	const [showBoard, toggleShowBoard] = useState(false)
	return (
		<Box
			backgroundColor='lightgray'
			className='flex flex-col p-4 my-2 space-around'
			rounded='md'
		>
			<Box className='flex flex-row justify-between'>
				<Box className='flex flex-col gap-4 justify-start'>
					<p className='text-2xl font-bold text-black'>{word}</p>
					<p className='text-lg text-black'>{createdAt.slice(0, 10)}</p>
				</Box>
				<Box className='flex flex-col gap-4'>
					<p className='text-lg ml-auto mr-2 text-black'>
						guesses: <strong>{numGuesses}</strong>
					</p>
					<Button
						className='mx-auto'
						colorScheme={'green'}
						onClick={() => toggleShowBoard((state) => !state)}
					>
						{showBoard ? 'Hide Board' : 'Show Board'}
					</Button>
				</Box>
			</Box>
			<Box className='flex justify-center'>
				{showBoard ? <MiniBoard letters={letters} colors={colors} /> : null}
			</Box>
		</Box>
	)
}

export default PastWordleCard
