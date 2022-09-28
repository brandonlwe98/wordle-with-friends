import {
	Box,
	Button,
	Heading,
	useColorMode,
	Image,
	HStack,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { BsSun } from 'react-icons/bs'
import { MdAccountCircle, MdOutlineDarkMode } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaMedal, FaUser, FaQuestionCircle } from 'react-icons/fa'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box className='flex justify-center items-center' h={200}>
			<Box className='flex items-center mr-auto pl-10 hover:scale-110 duration-100'>
				<Link to='/'>
					<Box boxSize='255px'>
						<Image
							src={
								colorMode === 'light'
									? '/wwf-logo-black.png'
									: '/wwf-logo-white.png'
							}
							alt='Wordle With Friends'
						/>
					</Box>
				</Link>
			</Box>
			<Box className='pr-20 flex gap-8'>
				<Box
					rounded={'100'}
					onClick={toggleColorMode}
					className='hover:scale-110 hover:rotate-45 duration-100 cursor-pointer text-green-600'
				>
					{colorMode === 'light' ? (
						<BsSun className='text-5xl' />
					) : (
						<MdOutlineDarkMode className='text-5xl' />
					)}
				</Box>
				<Link to='/howtoplay'>
					<Box className='hover:scale-110 duration-100 text-green-600'>
						<FaQuestionCircle className='text-5xl' />
					</Box>
				</Link>
				<Link to='/leaderboard'>
					<Box className='hover:scale-110 duration-100 text-green-600'>
						<FaMedal className='text-5xl' />
					</Box>
				</Link>
				{sessionStorage.getItem('username') ? (
					<Link to='/account'>
						<Box className='hover:scale-110 duration-100 text-green-600'>
							<MdAccountCircle className='text-5xl' />
						</Box>
					</Link>
				) : (
					<Link to='/login'>
						<Box className='hover:scale-110 duration-100 text-green-600'>
							<MdAccountCircle className='text-5xl' />
						</Box>
					</Link>
				)}
			</Box>
		</Box>
	)
}

export default Navbar
