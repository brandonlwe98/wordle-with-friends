import { Box, Divider, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PastWordleCard from '../components/PastWordleCard'
import { getGuesses } from '../utils/guessFns'

const History = () => {
	const [guesses, setGuesses] = useState([])
	useEffect(() => {
		const get_guesses = async () => {
			const data = await getGuesses(sessionStorage.getItem('username'))
			// console.log(data)
			setGuesses(data)
		}
		get_guesses()
	}, [])
	return (
		<Box w='xl' className='flex flex-col justify-center mx-auto border-1 p-5'>
			<Heading as='h1' className='flex justify-center mb-10'>
				My Past Wordles
			</Heading>
			<Divider className='mb-10' />
			{guesses
				? guesses.map((guess, i) => <PastWordleCard key={i} guess={guess} />)
				: null}
		</Box>
	)
}

export default History
