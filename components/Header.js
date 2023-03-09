import Image from 'next/image';
import Link from 'next/link';
import Circle from './Circle';

function Header({ headerContent }) {
	return (
		<div className='grid md:grid-cols-3 items-center mb-14 md:mb-44 h-[80vh] relative px-8 md:px-24'>
			<div className='flex flex-col sm:col-span-2'>
				<h1 className='text-2xl tracking-wide sm:text-3xl md::text-4xl lg:text-4xl font-bold 2xl:text-5xl'>
					{headerContent.title}
				</h1>
				<h3 className='text-sm sm:text-md text-gray-400 mt-8 mb-8 w-full text-justify lg:w-8/12 md:text-xl 2xl:text-2xl 2xl:leading-10'>
					{headerContent.desc}
				</h3>
				<div className='flex w-max rounded-3xl py-4 md:mt-10 gap-5 md:px-14 md:drop-shadow-xl md:bg-white lg:px-8 xl:px-14 2xl:px-24 2xl:py-6'>
					{headerContent.images.map((img, i) => (
						<Image
							key={i}
							src={`/${img}`}
							alt=''
							width={50}
							height={50}
							className='hidden md:block object-cover rounded-xl shadow-lg'
						/>
					))}
					<Link
						href='/create'
						className='bg-red-500 hover:bg-red-400 text-sm px-8 sm:px-10 2xl:px-14 py-2 sm:py-3 rounded-lg text-white md:ml-8 md:shadow-lg md:text-lg transition ease-out duration-200 2xl:text-xl'
					>
						Create
					</Link>
				</div>
			</div>
			<div className=' sm:col-span-1'>
				<Circle
					style={`bg-[url('/pink1.jpeg')] bg-cover opacity-30 h-[70vh] w-[70vh] md:h-[90vh] md:w-[90vh] top-[-170px] right-[-140px] sm:top-[-150px] sm:right-[-100px] z-[-999] md:top-[-190px] md:right-[-70px] lg:right-[-150px] xl:top-[-210px] xl:right-[-100px] 2xl:h-[100vh] 2xl:w-[100vh] 2xl:top-[-450px] 2xl:right-[-130px]`}
				/>
				<div
					className={`absolute top-2/4 bg-[url('/hoodie.PNG')] no-repeat bg-cover object-cover right-28 2xl:right-[300px] rounded-3xl w-64 h-72 2xl:w-1/6 2xl:h-3/6 hidden lg:block`}
				/>
			</div>
		</div>
	);
}

export default Header;
