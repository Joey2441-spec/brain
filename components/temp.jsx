import React from 'react';

function Temp({ handler }) {
	return (
		<path
			d='m705.99 402.49-119.5 17.5-99.998 17.5s-35.499 20.5-35.499 23.5c0 3 18.5 25.5 18.5 25.5l22.5 44.999 12 7.4999 14.5-1.5-3.9999 27 16.5 3 8.9999 25s30 7.4999 33 4.9999c3-2.5 18 4.4999 18 4.4999s46.499 4.4999 50.999 4.4999c4.4999 0 27.5-9.4999 32.5-14.5 4.9999-4.9999 11.5-25 12-28.5 0.5-3.5 17-13 23-19.5s12-44.999 12-44.999 20.5-9.9998 16.5-28.5-8.4999-30-8.4999-30l-2-18.5z'
			fillOpacity='2'
			strokeWidth='0.99998'
			onClick={handler}
		/>
	);
}

export default Temp;
