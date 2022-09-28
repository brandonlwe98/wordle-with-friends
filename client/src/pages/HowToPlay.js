import { Box, Divider, Heading, Text, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import MiniTile from '../components/MiniTile'
import { Link, useNavigate } from 'react-router-dom'

const HowToPlay = () => {
    
	const navigate = useNavigate()

    const back = () => {
        navigate(-1);
    }
	return (
		<Box w='xl' className='flex flex-col justify-center mx-auto border-1 p-5'>
              <Flex>
                <Box w='55px' h='10' />
                <Spacer />
                <Heading as='h1' className='flex justify-center mb-5'>
                    How To Play
                </Heading>
                <Spacer />
                <Button className='float-right my-auto' w='55px' size='md' onClick={back}>
                    Back
                </Button>
            </Flex>
			<Divider className='mb-10' />
            <p>
                <Text fontSize='lg'>
                    Guess the WORDLE in six tries.
                    <br></br>
                    <br></br>
                    Each guess must be a valid five-letter word. Hit the enter button to submit.
                    <br></br><br></br>
                    After each guess, the color of the tiles will change to show how close your guess was to the word.
                </Text>
            </p>
            <Divider className='my-10' />
            <Text as='b' fontSize='xl' className='mb-5'>Example</Text>
            <Text>
                <Box className='flex gap-1'>
                    <Box>
                        <MiniTile letter='C' color='green' />
                    </Box>
                    <Box>
                        <MiniTile letter='S' color='lightgray' />
                    </Box>
                    <Box>
                        <MiniTile letter='3' color='lightgray' />
                    </Box>
                    <Box>
                        <MiniTile letter='1' color='lightgray' />
                    </Box>
                    <Box>
                        <MiniTile letter='9' color='yellow' />
                    </Box>
                </Box>
            </Text>
            <Text my='5'>
                The character <b className='text-green-600'>C</b> is in the word and in the correct spot.
                <br></br>
                The character <b className='text-yellow-500'>9</b> is in the word but in the wrong spot.
                <br></br>
                The other characters <b className='text-gray-400'>(S, 3, 1)</b> are not in the word in any spot.
            </Text>

		</Box>
	)
}

export default HowToPlay