import { Box, Button, Center, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Keyboard from './Keyboard'
import Tile from './Tile'
import anime from 'animejs'
import Anime from 'react-animejs-wrapper'

const LetterGrid = ({ tiles, guessNo, gameOver }) => {
	const [animate, setAnimate] = useState(false)
	useEffect(() => {
		setAnimate(false)
	}, [tiles])

	useEffect(() => {
		setAnimate(true)
		setTimeout(() => setAnimate(false), 2000)
	}, [guessNo, gameOver])

	return (
		<Box
			className='flex justify-center mx-auto flex-col w-1/3'
			text-align='center'
		>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 2 && animate ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(0, 5).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(0, 5).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 3 && (animate || gameOver) ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(5, 10).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(5, 10).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 4 && animate ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(10, 15).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(10, 15).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 5 && animate ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(15, 20).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(15, 20).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 6 && animate ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(20, 25).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(20, 25).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
			<HStack className='flex justify-center mb-1'>
				{guessNo === 7 && (animate || gameOver) ? (
					<Anime
						config={{
							translateY: [-60, 0],
							loop: false,
							duration: 2000,
							delay: anime.stagger(100, { start: 100 }),
						}}
						className='flex gap-1'
					>
						{tiles.slice(25, 30).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Anime>
				) : (
					<Box className='flex gap-1'>
						{tiles.slice(25, 30).map((tile, i) => (
							<div key={i}>
								<Tile key={i} text={tile.value} color={tile.color} />
							</div>
						))}
					</Box>
				)}
			</HStack>
		</Box>
	)
}

export default LetterGrid
