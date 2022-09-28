import {
	Box,
	Divider,
	Heading,
	Table,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LeaderboardCard from '../components/LeaderboardCard'
import { getLeaderboard } from '../utils/guessFns'

const Leaderboard = () => {
	const [leaderboard, setLeaderboard] = useState([])
	useEffect(() => {
		const getleaderboard = async () => {
			const data = await getLeaderboard()
			setLeaderboard(data)
		}
		getleaderboard()
	}, [])
	return (
		<Box w='xl' className='flex flex-col justify-center mx-auto border-1 p-5'>
			<Heading as='h1' className='flex justify-center mb-10'>
				Leaderboard
			</Heading>
			<Divider className='mb-10' />
			<TableContainer>
				<Table type='simple'>
					<Thead>
						<Tr>
							<Th>Place</Th>
							<Th>Username</Th>
							<Th>Wins</Th>
							<Th>Avg Guesses</Th>
						</Tr>
					</Thead>
					<Tbody>
						{leaderboard.map((data, i) => (
							<LeaderboardCard
								key={i}
								place={i}
								username={data.username}
								totalWins={data.totalWins}
								avgGuesses={data.avgGuesses}
							/>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default Leaderboard
