import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Component
import Layout from './Components/Layout/Layout'

// Pages
import Home from 'Pages/Home/Home'

// 404
import NoMatch from './Pages/NoMatch/NoMatch'

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* Home */}
					<Route index element={<Home />} />

					{/* 404 */}
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
