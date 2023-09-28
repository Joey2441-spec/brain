import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '@public/brain_info.json';

export default function TextDisplay({ text, placeholder }) {
	let info;
	let funFact;
	let link;
	if (text != placeholder) {
		info = data[text].info;
		funFact = data[text].funfact;
		link = data[text].link;
	}

	console.log(info, funFact, link);
	return (
		<>
			<Box sx={{ minWidth: 275 }}>
				<div className='w-96'>
					<Card variant='outlined'>
						<React.Fragment>
							<CardContent>
								<Typography variant='h5' component='div'>
									{text.length != 0 && text[0].toUpperCase() + text.slice(1)}
								</Typography>
								<Typography variant='body2'>{info}</Typography>
								<Typography variant='h6' component='div'>
									{text != placeholder ? 'Fun fact' : ''}
								</Typography>
								<Typography variant='body2'>{funFact}</Typography>
							</CardContent>
							<CardActions>
								<Button href={link} target='_blank' size='small'>
									Learn More
								</Button>
							</CardActions>
						</React.Fragment>
					</Card>
				</div>
			</Box>
		</>
	);
}
