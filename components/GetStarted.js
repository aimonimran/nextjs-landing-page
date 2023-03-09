import Square from './Square';

function GetStarted({ startedCards }) {
	return (
		<div className='bg-gradient-to-b from-red-200 to-red-00 mx-4 sm:mx-10 lg:mx-24 rounded-t-3xl pt-4 pb-10 px-2 sm:py-10 sm:px-8 md:px-16'>
			<div className='bg-white rounded-xl shadow-lg shadow-pink-100 mx-auto mb-12 mt-4 sm:my-14 py-2 px-1 sm:px-2 w-full sm:w-9/12 md:my-10 lg:w-full lg:flex lg:justify-evenly'>
				{startedCards[0].map((card) => (
					<div
						key={card.id}
						className='flex items-center justify-center py-6 lg:px-6 my-4 mx-1 sm:mx-4 cursor-pointer hover:bg-red-50 hover:rounded-xl hover:shadow-sm lg:w-full  transition ease-out duration-300'
					>
						<svg
							className='w-5 h-5 sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 text-purple-800'
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
								d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
							/>
						</svg>
						<div className='ml-4 2xl:ml-6'>
							<h1 className='tracking-wide font-semibold text-md sm:text-lg pb-2 2xl:text-2xl'>
								{card.title}
							</h1>
							<h3 className='text-red-400 text-sm sm:text-md font-semibold 2xl:text-xl'>
								{card.desc}
							</h3>
						</div>
					</div>
				))}
			</div>
			<div>
				{startedCards[1].map((data, i) => (
					<div
						key={`${data.title}-${i}`}
						className='text-center flex flex-col items-center lg:mt-20'
					>
						<h1 className='font-bold text-2xl sm:text-3xl 2xl:text-5xl'>{data.title}</h1>
						<h3 className='text-gray-500 text-sm sm:text-md pt-4 pb-8 2xl:pt-6 2xl:pb-16 2xl:text-2xl'>
							{data.desc}
						</h3>
						<div className='flex justify-center w-full gap-4 md:gap-0 text-sm text-black font-semibold  sm:text-md md:text-lg'>
							<button className='border-2 border-red-500 px-4 sm:px-10 py-1 sm:py-3 rounded-lg md:ml-8 md:shadow-lg 2xl:text-2xl'>
								{data.btn1}
							</button>
							<button className='bg-red-500 px-4 sm:px-10 py-1 sm:py-3 rounded-lg text-white md:ml-8 md:shadow-lg 2xl:text-2xl'>
								{data.btn2}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GetStarted;
