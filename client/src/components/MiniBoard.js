import { Box } from '@chakra-ui/react'
import React from 'react'
import MiniTile from '../components/MiniTile'

const MiniBoard = ({ letters, colors }) => {
	const lettersArr = letters.split(',')
	const colorsArr = colors.split(',')
	let increment = []
	for (let i = 0; i < 30; i++) {
		increment.push(i)
	}
	return (
		<Box className='flex flex-col gap-1'>
			<Box className='flex gap-1'>
				{increment.slice(0, 5).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
			<Box className='flex gap-1'>
				{increment.slice(5, 10).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
			<Box className='flex gap-1'>
				{increment.slice(10, 15).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
			<Box className='flex gap-1'>
				{increment.slice(15, 20).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
			<Box className='flex gap-1'>
				{increment.slice(20, 25).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
			<Box className='flex gap-1'>
				{increment.slice(25, 30).map((i) => (
					<Box key={i}>
						<MiniTile letter={lettersArr[i]} color={colorsArr[i]} />
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default MiniBoard
