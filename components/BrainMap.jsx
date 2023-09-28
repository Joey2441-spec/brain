function BrainMap({ handler }) {
	return (
		<>
			<svg
				className='w-full'
				version='1.1'
				viewBox='0 0 1600.1 1303.7'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<image width='1600.1' height='1303.7' alt='brain image' xlinkHref='images/brain.svg' />

				<g transform='matrix(2.0633 0 0 2.0633 -516.36 -527.81)'>
					<path
						d='m805.47 883.55-27.891-27.103-38.848-32.432-41.343-41.699-5.7024-13.543s-8.91 0-12.474-0.71281c-3.564-0.71282-17.464-10.336-17.464-10.336l-14.969-31.007-10.692-9.6228 52.035-30.65 7.8408 13.9 18.889 6.4152 4.2768 18.533 21.74 27.443 14.256 4.2768 8.1972-1.0692v13.187l0.71276 10.692s13.187 8.91 13.187 10.336c0 1.4256 7.4844 14.969 7.4844 14.969l11.761 12.83 22.453-1.4256 8.5536 0.35638s13.543 16.751 14.612 19.246c1.0692 2.4948 5.346 7.4844 5.346 7.4844z'
						fillOpacity='0'
						className='blur-stroke'
						id='spinal'
						onClick={handler}
					/>
				</g>

				<path
					d='m1437 320.32-38.356 42.394-18.169 10.094 5.0471 41.384-4.0377 38.356-21.197 27.253-45.422 37.347-37.347 34.319-47.441 24.225-5.047 25.234-20.188 30.281-28.262 20.187-5.0468 34.319v34.319l7.0237 32.566 2.8609 57.94 59.877-11.836 146.25-15.079 63.591-2.0188 83.778-21.197s41.384-25.234 47.441-93.872c6.0561-68.637-43.403-186.73-48.45-188.75-5.047-2.0188-96.9-157.46-96.9-157.46z'
					fillOpacity='0'
					className='blur-stroke'
					id='occipital'
					onClick={handler}
				/>

				<path
					d='m717.91 8.0915s13.289 96.177 11.196 103.15c-2.0929 6.9765-4.1859 39.068-4.1859 39.068l-33.487 36.975-45.347 55.811s-4.8835 59.997-4.8835 62.788c0 2.7906 28.603 25.115 28.603 25.115s4.8835 29.301 2.7906 33.487c-2.0929 4.1859-10.465 29.301-10.465 29.301l-32.789 17.441-19.534 53.719 16.743 44.649s16.743 4.8835 16.743 10.465v49.533l-31.394-14.65s-13.953-0.69766-18.139-0.69766-23.022 24.418-23.022 24.418-20.929 16.743-29.301 18.836c-8.3717 2.0929-48.137 18.139-48.137 18.139l-33.487 39.766-31.394 48.835s-24.418 34.184-25.813 37.673c-1.3953 3.4882-19.534 17.441-19.534 17.441l-15.348 49.533 2.7906 28.603s-4.1859 9.767-5.5812 13.255c-1.3953 3.4882-74.648 27.208-71.857 26.51 2.7906-0.69763-71.16-23.72-71.16-23.72l-64.183 4.8835-71.16-40.463-36.277-57.904s-26.51-51.626-26.51-54.416c0-2.7905-11.162-127.67-11.162-127.67l25.813-116.51 91.472-155.25 68.423-77.052 63.378-16.108 69.31-74.523 123.44-60.882 116.49-52.374z'
					fillOpacity='0'
					className='blur-stroke'
					id='frontal'
					onClick={handler}
				/>

				<path
					d='m725.71 5.4056 9.5673 91.409-0.7387 47.277s-51.709 66.483-56.141 70.177-30.287 23.638-31.025 50.232c-0.7387 26.593 8.1257 64.267 8.1257 64.267l19.945 14.035s2.2161 25.116 0 30.287c-2.2161 5.1709-5.9096 16.99-10.342 22.9-4.4322 5.9096-26.593 21.422-26.593 21.422l-31.025 62.79 25.855 50.97s32.503 15.513 41.367 14.774c8.8644-0.73871 55.403-33.242 55.403-33.242s31.764-18.468 38.412-18.468h23.638s22.9 4.4322 33.98 5.9096 61.312-16.251 61.312-16.251l22.161-14.035 38.412 9.6031 4.4322 47.277s6.6483 33.242 13.297 39.89c6.6483 6.6483 20.684 20.684 26.593 23.638 5.9096 2.9548 19.945 12.558 19.945 12.558l35.458 5.1709 59.835 9.6031s67.96 5.9096 72.393 5.9096c4.4323 0 39.89-14.035 39.89-14.035l58.357-41.367 65.744-52.448 37.674-49.493 0.7388-45.061v-41.367l62.051-36.935-41.596-75.69-32.582-43.175-34.412-26.659-20.862-43.88-73.999-49.559-91.528-35.115-70.141-24.133-37.61-20.11-117.58-10.243-90.846-8.2908z'
					fillOpacity='0'
					className='blur-stroke'
					id='parietal'
					onClick={handler}
				/>

				<path
					d='m1002.1 838.25s42.868-14.77 74.209-19.093c31.341-4.3228 100.51-7.2048 100.51-7.2048s84.296-10.807 96.184-16.211c11.888-5.4036 92.582-16.211 114.56-14.41s64.483 7.9253 64.483 7.9253l29.179 15.851 3.9626 26.297-9.7265 17.292s5.0434 12.248 5.0434 14.409c0 2.1615-5.7639 15.49-5.7639 15.49l19.813 27.738 6.4843 29.179-5.7638 24.857-13.329 22.695-6.124 27.738-14.05 12.969 1.4412 10.447-8.6458 18.732-33.502 19.453-8.2855 6.8445-10.447 27.738-30.26 26.298-55.117 25.577-53.316 9.7265-58.359-10.087-23.776-16.571-35.304 16.571-41.067-23.055-20.894-36.024-22.335-15.851-12.969-20.894 10.087-28.819-1.441-6.4843s-33.419 6.5716-37.022 6.5716c-3.6022 0-25.66-31.788-25.66-31.788l-32.422-43.949v-27.378l-10.087-7.2049-34.583-19.453-0.72028-20.894 45.39-21.614z'
					fillOpacity='0'
					className='blur-stroke'
					id='cerebellum'
					onClick={handler}
				/>

				<g transform='matrix(1 0 0 1 22.722 155.8)' fillOpacity='0'>
					<path
						d='m751.46 803.9-98.509 50.977-120.55 22.044-92.309-6.8888-59.932-38.577-25.488-35.133 0.68885-74.398 10.333-30.999-10.333-45.466 34.444-54.421 34.444-22.733 34.444-79.909s43.082-37.485 46.527-40.241c3.4444-2.7555 38.269-18.822 38.269-18.822l27.491-18.091 35.133-3.4444 17.222 6.8887c3.4444 1.3777 5.511-29.622 5.511-29.622l44.088-12.4s32.464-22.856 38.664-25.611c6.2-2.7555 48.897-18.034 48.897-18.034l32.19-0.21544 33.179-2.8786 30.31-10.437s57.932-6.6923 55.177-3.2479c-2.7555 3.4444 15.586 41.889 15.586 41.889l4.2249 40.457 22.753 24.234 43.352 9.9946 42.643 6.8887 37.366 8.7399c26.567-2.6182 25.356 7.7173 39.399 5.0991l52.615 16.342-6.9093 15.92c-32.375 44.713 12.65 115.25-15.714 176.52l-134.26 12.757-78.994 21.537-80.386 50.832-26.644 11.868'
						fillOpacity='0'
						className='blur-stroke'
						id='temporal'
						onClick={handler}
					/>
				</g>
			</svg>
		</>
	);
}

export default BrainMap;
