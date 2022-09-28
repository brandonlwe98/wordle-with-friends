import React from 'react'
import { Box, Button, ButtonGroup, Center, Divider, Grid, GridItem, Stack, Flex, Spacer, Text} from '@chakra-ui/react'
import { Heading, Input } from '@chakra-ui/react'
import { Outlet, Link } from "react-router-dom";

//Added by Justin
//will need to be modified to create multiplayer room with specific room code
function generateMultiplayerGame(){
    window.location.href="/roomcodePlaceholder";
}

const RoomLobby = () => {
	return(
		<div>
            <Heading as='h1' size="lg" className='flex justify-center mx-auto py-5'>
                Room Lobby
            </Heading>
            <div className="flex">
                <Grid
                    h='500px'
                    w='100%'
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    >
                    <GridItem w='80%' mx='auto' rowSpan={4} colSpan={3} border="2px solid black" borderRadius="10px">
                        <Text fontSize='lg' className="mx-5 my-2">Game Rules</Text>
                        <Box border="1px solid black" borderRadius="10px" w='98%' h='80%' mx='auto' my='auto'>

                        </Box>
                    </GridItem>
                    <GridItem w='80%' mx='auto' rowSpan={3} colSpan={3} border="2px solid black" borderRadius="10px">
                        <Text fontSize='lg' className="mx-5 my-2">Players (3/4)</Text>
                        <Grid w='100%' templateRows='repeat(3, 1fr)'>
                            <GridItem w='95%' rowSpan={1} mx='auto' my='2px' border='1px solid black' borderRadius='10px'>
                                <Text fontSize='lg' className="mx-5 my-2">Player 1</Text>
                            </GridItem>
                            <GridItem w='95%' rowSpan={1} mx='auto' my='2px' border='1px solid black' borderRadius='10px'>
                                <Text fontSize='lg' className="mx-5 my-2">Player 2</Text>
                            </GridItem>
                            <GridItem w='95%' rowSpan={1} mx='auto' my='2px' border='1px solid black' borderRadius='10px'>
                                <Text fontSize='lg' className="mx-5 my-2">Player 3</Text>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem w='80%' mx='auto' rowSpan={2} colSpan={3} border='2px solid black' borderRadius='10px'>
                        <Text fontSize={20} fontWeight='bold' className="mx-5 my-2">Join Link</Text>
                    </GridItem>
                    <GridItem w='80%' mx='auto' rowSpan={2} colSpan={3} border="2px solid black" borderRadius="10px">
                        <Text fontSize='lg' className="mx-5 my-2">Game Chat</Text>
                        <Box border="1px solid black" borderRadius="10px" w='98%' h='70%' mx='auto' my='auto'>
                            <Grid w='100%' templateRows='repeat(1, 1fr)'>
                                <GridItem w='95%' mx='auto' rowSpan={1}>
                                    Player 2 has joined the game.
                                </GridItem>
                                <GridItem w='95%' mx='auto' rowSpan={1}>
                                    Player 3 has joined the game.
                                </GridItem>
                                <GridItem w='95%' mx='auto' rowSpan={1}>
                                    Player 4 has joined the game.
                                </GridItem>
                                <GridItem w='95%' h='90%' mx='auto' rowSpan={1} border="2px solid black" borderRadius="10px">
                                    <Input placeholder='Type message here' className="" border='0px' size="sm"/>
                                </GridItem>
                            </Grid>
                        </Box>

                    </GridItem>
                    <GridItem w='80%' mx='auto' rowSpan={1} colSpan={1}>
                        <Button size='lg' onClick={generateMultiplayerGame}>
                            Start Game
                        </Button>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem w='80%' rowSpan={1} colSpan={1}>
                        <Link to="/">
                            <Button size='lg' float='right'>
                                Leave Room
                            </Button>
                        </Link>
                    </GridItem>
                </Grid>
            </div>
		</div>
	)
}

export default RoomLobby
