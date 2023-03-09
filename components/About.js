import Image from 'next/image';

const About = ({ cards }) => {
	return (
		<div className='bg-red-300 relative overflow-hidden flex flex-col justify-between px-8 py-24 mt-12 md:px-24'>
			<div>
				<Image
					src='/pink2.jpg'
					alt=''
					width={30}
					height={30}
					className='object-cover rounded-lg shadow-md mb-5'
				/>
				<h3 className='w-full text-white leading-7 sm:leading-10 text-justify text-sm sm:text-md md:text-lg md:leading-loose lg:text-xl lg:leading-loose 2xl:w-[40vw] 2xl:text-2xl 2xl:leading-10'>
					<span className='font-bold text-gray-500'>About</span> Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Quisque condimentum in nunc eget ullamcorper. Ut vulputate
					tincidunt ante, vel rutrum arcu varius a. Mauris vel lobortis dui. Consectetur adipiscing
					elit. Quisque condimentum in.
				</h3>
				<div className='mt-10 flex flex-col justify-center md:flex-row md:flex-wrap lg:gap-4 2xl:justify-between'>
					{cards.map((card) => (
						<div
							key={card.id}
							className='my-3 sm:my-10 p-4 sm:p-8 sm:w-max bg-white shadow-md hover:shadow-lg rounded-3xl transition ease-out duration-200'
						>
							<Image
								src={`/${card.img}`}
								alt=''
								width={30}
								height={30}
								className='object-cover rounded-lg shadow-md mb-3'
							/>
							<h1 className='font-semibold text-md sm:text-lg tracking-wider pb-3 md:text-xl 2xl:text-xl'>
								{card.title}
							</h1>
							<h3 className='text-gray-500 text-md sm:text-lg 2xl:text-xl'>{card.desc}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
