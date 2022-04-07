import React from 'react'

import { Outlet } from 'react-router-dom'

// Style
import { Wrapper } from './Style'

const Layout = () => {
	return (
		<>
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	)
}

export default Layout
