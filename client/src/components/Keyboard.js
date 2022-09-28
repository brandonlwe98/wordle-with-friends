import React, { useState, useEffect } from 'react'
import { Button, Stack, HStack, IconButton, Icon } from '@chakra-ui/react'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { Outlet, Link } from 'react-router-dom'
import { click } from '@testing-library/user-event/dist/click'

const Keyboard = ({ addLetter, deleteLastLetter, submitGuess }) => {
	return (
		<div>
			<div className='flex justify-center mx-auto flex-col'>
				<HStack className='mt-5 mx-auto'>
					<Button h='55px' id='Q' onClick={() => addLetter('Q')}>
						Q
					</Button>
					<Button h='55px' id='W' onClick={() => addLetter('W')}>
						W
					</Button>
					<Button h='55px' id='E' onClick={() => addLetter('E')}>
						E
					</Button>
					<Button h='55px' id='R' onClick={() => addLetter('R')}>
						R
					</Button>
					<Button h='55px' id='T' onClick={() => addLetter('T')}>
						T
					</Button>
					<Button h='55px' id='Y' onClick={() => addLetter('Y')}>
						Y
					</Button>
					<Button h='55px' id='U' onClick={() => addLetter('U')}>
						U
					</Button>
					<Button h='55px' id='I' onClick={() => addLetter('I')}>
						I
					</Button>
					<Button h='55px' id='O' onClick={() => addLetter('O')}>
						O
					</Button>
					<Button h='55px' id='P' onClick={() => addLetter('P')}>
						P
					</Button>
				</HStack>
				<HStack className='mt-2 mx-auto'>
					<Button h='55px' id='A' onClick={() => addLetter('A')}>
						A
					</Button>
					<Button h='55px' id='S' onClick={() => addLetter('S')}>
						S
					</Button>
					<Button h='55px' id='D' onClick={() => addLetter('D')}>
						D
					</Button>
					<Button h='55px' id='F' onClick={() => addLetter('F')}>
						F
					</Button>
					<Button h='55px' id='G' onClick={() => addLetter('G')}>
						G
					</Button>
					<Button h='55px' id='H' onClick={() => addLetter('H')}>
						H
					</Button>
					<Button h='55px' id='J' onClick={() => addLetter('J')}>
						J
					</Button>
					<Button h='55px' id='K' onClick={() => addLetter('K')}>
						K
					</Button>
					<Button h='55px' id='L' onClick={() => addLetter('L')}>
						L
					</Button>
				</HStack>
				<HStack className='mt-2 mx-auto'>
					<Button h='55px' id='Enter' onClick={submitGuess}>
						ENTER
					</Button>
					<Button h='55px' id='Z' onClick={() => addLetter('Z')}>
						Z
					</Button>
					<Button h='55px' id='X' onClick={() => addLetter('X')}>
						X
					</Button>
					<Button h='55px' id='C' onClick={() => addLetter('C')}>
						C
					</Button>
					<Button h='55px' id='V' onClick={() => addLetter('V')}>
						V
					</Button>
					<Button h='55px' id='B' onClick={() => addLetter('B')}>
						B
					</Button>
					<Button h='55px' id='N' onClick={() => addLetter('N')}>
						N
					</Button>
					<Button h='55px' id='M' onClick={() => addLetter('M')}>
						M
					</Button>
					<IconButton
						h='55px'
						w='75px'
						id='Backspace'
						icon={<RiDeleteBack2Line />}
						fontSize='25px'
						aria-label='Delete character'
						size='lg'
						onClick={deleteLastLetter}
					/>
				</HStack>
			</div>
		</div>
	)
}

export default Keyboard
