import { Center, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

const Tile = ({ text, color }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [oldColor, setColor] = useState('gray')
	useEffect(() => {
		if (!color || oldColor === color) return
		// console.log(color)
		setColor(color)
	}, [color])
	return (
		<Center
			id='0'
			w='60px'
			h='60px'
			className='text-4xl font-bold'
			color='black'
			backgroundColor={color ? color : 'lightgray'}
			borderRadius='md'
		>
			{text}
		</Center>
	)
}

export default Tile
