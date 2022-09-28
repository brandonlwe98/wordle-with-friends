import { Box, Heading, Td, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const LeaderboardCard = ({ place, username, totalWins, avgGuesses }) => {
	const {colorMode} = useColorMode();
	console.log("COLOR MODE",colorMode)

	// var [backgroundColor, setBackgroundColor] = useState('white')
	
	// useEffect(() => {
	// 	if (place === 0) setBackgroundColor('gold')
	// 	else if (place === 1) setBackgroundColor('silver')
	// 	else if (place === 2) setBackgroundColor('tan')
	// }, [])

	var textLight = 'black'
	var textDark = 'white'
	
	if(place === 0) textLight = textDark = 'gold'
	else if(place === 1){
		textLight = 'grey'
		textDark = 'silver'
	}
	else if(place === 2){
		textLight = 'brown'
		textDark = 'tan'
	}

	var backgroundColor = useColorModeValue(textLight,textDark)
	// console.log(backgroundColor)
	return (
		<Tr color={backgroundColor} className='shadow-md'>
			<Td className='font-bold'>{place + 1}</Td>
			<Td className='font-bold'>{username.toUpperCase()}</Td>
			<Td className='font-bold'>{totalWins}</Td>
			<Td className='font-bold'>{avgGuesses}</Td>
		</Tr>
	)
}

export default LeaderboardCard
