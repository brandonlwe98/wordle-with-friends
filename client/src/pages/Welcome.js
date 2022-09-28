import { Button, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='flex flex-col w-96 mx-auto'>
			<Link className='flex justify-center' to='/single'>
				<Button id="btnSingle" className='my-5 py-7' colorScheme={'green'} w='100%' variant='solid'>
					<p className='text-xl'>Play Game</p>
				</Button>
			</Link>
		{sessionStorage.getItem('username') ? <></> : <Box>
			<Link className='flex justify-center' to='/login'>
				<Button id="btnCreate" className='my-5 py-7' colorScheme={'green'} variant='outline' w='100%'>
				<p className='text-xl'>Sign In</p>
				</Button>
			</Link>
			<Link className='flex justify-center' to='/register'>
				<Button id="btnJoin" className='my-5 py-7' colorScheme={'green'} variant='outline' w='100%'>
				<p className='text-xl'>Sign Up</p>
				</Button>
			</Link>
		</Box>}
		</div>
	)
}

export default Login
