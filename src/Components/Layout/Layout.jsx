import React from 'react'

import { Outlet } from 'react-router-dom'

// components
// import Navbar from 'Components/Navbar/Navbar'

// Style
import { Wrapper } from './Style'

const Layout = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	)
}

export default Layout
