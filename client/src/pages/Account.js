import { Box, Button, Divider, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCreatedAtDate } from '../utils/user'

const Account = () => {
	const username = sessionStorage.getItem('username')
	if (username == null) {
		window.location.href = "/login";
	}
	const [createdAt, setCreatedAt] = useState('')
	const [timeOfDay, setTimeOfDay] = useState('')
	const hour = new Date().getHours()
	useEffect(() => {
		if (hour < 12) setTimeOfDay('Morning')
		else if (hour >= 12 && hour < 17) setTimeOfDay('Afternoon')
		else setTimeOfDay('Evening')
	}, [hour])

	useEffect(() => {
		const getDate = async () => {
			if (username) {
				const date = await getCreatedAtDate(username)
				setCreatedAt(date.slice(0, 10))
			}
		}
		getDate()
	}, [username])

	return (
		<Box w='xl' className='flex flex-col justify-center mx-auto border-1 p-5'>
			<Heading as='h1' className='flex justify-center mb-10'>
				Account
			</Heading>
			<Divider className='mb-10' />
			<ul className='flex flex-col justify-center mx-auto gap-y-4 w-100'>
				<p className='mb-2 text-lg mx-auto'>
					Good {timeOfDay}, <strong>{username}</strong>.
				</p>
				<p className='mb-5'>
					Wordle+ member since{' '}
					{createdAt || new Date().toISOString().slice(0, 10)}
				</p>

				<Button id ="btnHistory" className='gap-2 p-5 mt-2 text-xl w-56 items-center'>
					<Link to='/history'>View My Wordle History</Link>
				</Button>

				<Button id="btnSignOut"
					className='p-5 mt-2 text-xl w-56 items-center text-red-500'
					onClick={() => {
						sessionStorage.clear()
						window.location.href = '/'
					}}
				>
					Sign Out
				</Button>
			</ul>
		</Box>
	)
}

export default Account
