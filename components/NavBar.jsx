import React from 'react';
import { AppBar, Typography, Toolbar, SvgIcon } from '@mui/material';

function NavBar() {
	return (
		<>
			<AppBar>
				<Toolbar>
					<img className='pb-1 text-green' src='images/brain_icon.svg' width='50' alt='brain logo' />
					<Typography component={'div'}>MindMapper</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavBar;
