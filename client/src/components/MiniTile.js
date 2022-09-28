import { Box } from '@chakra-ui/react'
import React from 'react'

const MiniTile = ({ letter, color }) => {
	return (
		<Box
			backgroundColor={color !== ' ' ? color : 'black'}
			width={42}
			height={42}
			rounded='md'
			className='items-center text-center'
		>
			<p className='text-4xl items-center text-black'>{letter}</p>
		</Box>
	)
}

export default MiniTile
