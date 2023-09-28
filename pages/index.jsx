import { React, useState } from 'react';
import '@app/globals.css';
import TextDisplay from '@component/DisplayText.jsx';
import NavBar from '@component/NavBar.jsx';
import Footer from '@component/footer/Footer.jsx';
import BrainMap from '@component/BrainMap';

function Index() {
	const placeholder = 'Click the Brain';
	const [text, setText] = useState(placeholder);
	const handler = (e) => {
		setText(e.target.id);
	};
	return (
		<>
			<div
				style={{ overflow: 'auto' }}
				className='flex flex-col justify-between center items-center w-screen h-screen bg-gray-600'
			>
				<NavBar />
				<div className='flex-grow mt-20 mb-4'>
					<BrainMap handler={handler} />
					<TextDisplay text={text} placeholder={placeholder} />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Index;
