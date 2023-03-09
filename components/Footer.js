function Footer() {
	return (
		<div className='bg-gradient-to-t from-gray-200 to-pink-00 flex flex-col pt-20 pb-10 px-8 mt-12 md:px-24 '>
			<div className='border-gray-200 border-t-2 pt-10 lg:flex'>
				<div className='flex justify-between lg:w-full lg:justify-start'>
					<div className='mb-8 text-sm sm:text-md 2xl:text-xl'>
						<h1 className='font-bold'>About</h1>
						<h3 className='text-gray-500 cursor-pointer'>Who We Are</h3>
						<h3 className='text-gray-500 cursor-pointer'>Terms and Conditions</h3>
						<h3 className='text-gray-500 cursor-pointer'>Privacy Policy</h3>
					</div>
					<div className='lg:ml-10 text-sm sm:text-md 2xl:text-xl'>
						<h1 className='font-bold'>Contact</h1>
						<h3 className='text-gray-500 cursor-pointer'>Who We Are</h3>
						<h3 className='text-gray-500 cursor-pointer'>Terms and Conditions</h3>
						<h3 className='text-gray-500 cursor-pointer'>Privacy Policy</h3>
					</div>
				</div>
				<div className='lg:w-full text-sm sm:text-md 2xl:text-xl'>
					<div className='flex items-center'>
						<svg
							className='text-red-400 w-5 h-5 sm:w-6 sm:h-6 2xl:w-9 2xl:h-9'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
							/>
						</svg>
						<h1 className='text-gray-500 ml-1 sm:ml-2'>XYZ, Pakistan</h1>
					</div>
					<h1 className='font-semibold text-md 2xl:text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h1>
					<div className='flex items-center mt-3'>
						<input
							type='text'
							placeholder='Your Message...'
							className='bg-red-400 w-full sm:w-1/2 text-white rounded-xl py-2 placeholder:text-white pl-4'
						/>
						<button className=''>
							<svg
								className='bg-red-400 ml-3 text-white rounded-md shadow-lg p-2 w-8 h-8 sm:w-10 sm:h-10 2xl:w-9 2xl:h-9'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className='mt-8'>
				<h3 className='text-lg sm:text-xl text-gray-400 2xl:text-2xl'>+92 312 3456789</h3>
				<h3 className='text-sm sm:text-md text-red-400 font-semibold 2xl:text-xl'>
					www.landingpage.com
				</h3>
			</div>
		</div>
	);
}

export default Footer;
