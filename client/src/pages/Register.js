import {
	Box,
	Button,
	FormControl,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { registerUser } from '../utils/user'

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [passwordsMatch, setPasswordsMatch] = useState(false)
	const navigate = useNavigate()
	return (
		<Box className='w-96 mx-auto space-y-10'>
			<Heading as='h1'>Sign Up</Heading>
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
					mb='5'
				/>
				<InputGroup>
					<Input
						id='confirm-password'
						name='confirm-password'
						placeholder='Confirm password'
						type={showPassword ? 'text' : 'password'}
					/>
					<InputRightElement width='3.5rem'>
						<Button
							h='2.5rem'
							size='sm'
							onClick={() => setShowPassword((s) => !s)}
						>
							{showPassword ? (
								<AiOutlineEye className='text-3xl' />
							) : (
								<AiOutlineEyeInvisible className='text-3xl' />
							)}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Button
					my={4}
					type='submit'
					colorScheme={'blue'}
					onClick={async () => {
						if (
							document.getElementById('password').value !==
							document.getElementById('confirm-password').value
						) {
							alert('Passwords do not match!')
							return
						}
						const register = await registerUser(
							document.getElementById('username').value,
							document.getElementById('password').value
						)
						if (register) {
							const username = document.getElementById('username').value
							sessionStorage.setItem('username', username)
							navigate('/account', { replace: true })
							navigate(0); //refresh to update navbar
						} else {
							alert('Username already exists!')
							return
						}
					}}
				>
					Sign Up
				</Button>
			</FormControl>
			Already have an account?{' '}
			<Link to='/login'>
				<p className='underline'>Sign In</p>
			</Link>
		</Box>
	)
}

export default Register
