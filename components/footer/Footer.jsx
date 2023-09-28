import FooterIcons from './FooterIcons';
import '@app/globals.css';
import BrainLogo from './BrainLogo';

function Footer() {
	console.log('hello', BrainLogo);
	return (
		<>
			<div className='flex flex-col rounded-t-lg bg-footer-bg w-screen h-max'>
				<div className='flex flex-row justify-center py-32 items-center gap-x-48'>
					<div className='flex flex-col gap-3'>
						<BrainLogo className='text-footer-text' altText={'brain logo'} />
						<h2 className='text-footer-text'>Mind your Decision</h2>
						<div className='flex gap-4'>
							<FooterIcons />
						</div>
					</div>
					<div className='flex'>
						<div className='flex flex-col w-44 h-36'>
							<h3 className='font-semibold text-white'>Solution</h3>
							<ul className='text-sm text-footer-text space-y-4 mt-6'>
								<li>Marketing</li>
								<li>Analytics</li>
								<li>Commerce</li>
								<li>Insights</li>
							</ul>
						</div>
						<div className='flex flex-col w-44 h-36'>
							<h3 className='font-semibold text-white'>Support</h3>
							<ul className='text-sm text-footer-text space-y-4 mt-6'>
								<li>Pricing</li>
								<li>Documentation</li>
								<li>Guides</li>
								<li>API Status</li>
							</ul>
						</div>
						<div className='flex flex-col w-44 h-36'>
							<h3 className='font-semibold text-white'>Company</h3>
							<ul className='text-sm text-footer-text space-y-4 mt-6'>
								<li>About</li>
								<li>Blog</li>
								<li>Jobs</li>
								<li>Press</li>
								<li>Partners</li>
							</ul>
						</div>
						<div className='flex flex-col w-44 h-36'>
							<h3 className='font-semibold text-white'>Legal</h3>
							<ul className='text-sm text-footer-text space-y-4 mt-6'>
								<li>Claim</li>
								<li>Privacy</li>
								<li>Terms</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='bg-gray-600 w-screen mb-10' />
			</div>
		</>
	);
}

export default Footer;
