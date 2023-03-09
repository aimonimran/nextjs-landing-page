import Image from 'next/image';
import { useState } from 'react';

function Features({ features }) {
	const [isShown, setIsShown] = useState([false, false, false, false]);

	const handleClick = (index) => {
		const show = [...isShown];
		show[index] = !show[index];
		setIsShown(show);
	};

	return (
		<div className='flex justify-between bg-red-300 px-8 py-24 mt-12 md:px-24'>
			<div className='w-full md:w-3/4'>
				<Image
					src='/pink2.jpg'
					alt=''
					width={30}
					height={30}
					className='object-cover rounded-lg shadow-md mb-5'
				/>
				<h1 className='text-2xl sm:text-3xl font-bold border-b-2 border-gray-100 pb-6 2xl:text-5xl'>
					Features Section
				</h1>
				{features.map((feature, i) => (
					<div
						key={feature.id}
						onClick={() => handleClick(i)}
						className='my-2 border-b-2 border-gray-100 pb-6 pt-4'
					>
						<div className='flex items-center'>
							<svg
								className={`
                ${isShown[i] ? 'bg-red-500' : 'bg-white text-black'}
                 text-white rounded-sm sm:rounded-md shadow-lg w-3 h-3 sm:p-1 sm:w-6 sm:h-6`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d={`${isShown[i] ? 'M6 18L18 6M6 6l12 12' : 'M12 4.5v15m7.5-7.5h-15'}`}
								/>
							</svg>
							<h1
								className={`${
									isShown[i] ? 'text-red-500' : 'text-white'
								} font-semibold text-md sm:text-xl ml-3 sm:ml-4 tracking-wider 2xl:text-2xl`}
							>
								{feature.title}
							</h1>
						</div>
						<h3
							className={`
              ${
								isShown[i] ? 'block' : 'hidden'
							} text-md sm:text-lg text-white ml-6 sm:ml-10 pt-2 2xl:text-xl`}
						>
							{feature.desc}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Features;
