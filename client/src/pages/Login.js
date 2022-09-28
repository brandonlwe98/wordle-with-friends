import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/user'

const Login = () => {
	const navigate = useNavigate()
	return (
		<Box className='w-96 mx-auto space-y-10'>
			<Heading as='h1'>Sign In</Heading>
			<FormControl>
				<Input
					id='username'
					name='username'
					placeholder='Enter username'
					type='text'
					mb='5'
				/>
				<Input
					id='password'
					name='password'
					placeholder='Enter password'
					type='password'
				/>
				<Button
					my={4}
					type='submit'
					colorScheme={'blue'}
					onClick={async () => {
						const login = await loginUser(
							document.getElementById('username').value,
							document.getElementById('password').value
						)
						if (login) {
							const username = document.getElementById('username').value
							sessionStorage.setItem('username', username)
							navigate('/account', { replace: true })
							navigate(0); //refresh to update navbar
						} else {
							alert('Invalid username or password')
							return
						}
					}}
				>
					Sign In
				</Button>
			</FormControl>
			Don&apos;t have an account yet?{' '}
			<Link to='/register'>
				<p className='underline'>Sign Up</p>
			</Link>
		</Box>
	)
}

export default Login
