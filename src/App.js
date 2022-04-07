import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component
import Layout from './Components/Layout/Layout'

// Pages
import Home from 'Pages/Home/Home'

// 404
import NoMatch from './Pages/NoMatch/NoMatch'

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						{/* Home */}
						<Route index element={<Home />} />

						{/* 404 */}
						<Route path='*' element={<NoMatch />} />
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
