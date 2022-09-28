import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import NoPage from './pages/NoPage'
import SinglePlayer from './pages/SinglePlayer'
import { Box, Button } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Account from './pages/Account'
import History from './pages/History'
import Leaderboard from './pages/Leaderboard'
import HowToPlay from './pages/HowToPlay'

function App() {
	return (
		<Box className='flex justify-center flex-col'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Welcome />} />
					<Route path='single' element={<SinglePlayer />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='account' element={<Account />} />
					<Route path='history' element={<History />} />
					<Route path='leaderboard' element={<Leaderboard />} />
					<Route path='howtoplay' element={<HowToPlay />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</Box>
	)
}

export default App
