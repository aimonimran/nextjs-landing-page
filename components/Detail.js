import Image from 'next/image';
import Link from 'next/link';

function Detail({ details }) {
	return (
		<div className='grid px-8 py-24 mt-12 md:px-24 md:grid-col-2 md:flex'>
			<div className='col-span-1'>
				<Image
					src='/pink2.jpg'
					alt=''
					width={30}
					height={30}
					className='object-cover rounded-lg shadow-md mb-5'
				/>
				<h1 className='text-2xl sm:text-3xl font-bold 2xl:text-5xl'>{details.title}</h1>
				<h3 className='text-sm sm:text-md text-gray-500 mt-8 mb-8 leading-8 text-justify md:w-10/12 md:text-lg md:leading-loose xl:w-9/12 2xl:text-2xl 2xl:leading-10'>
					{details.desc}
				</h3>
				<Link
					href='/details'
					className='text-sm sm:text-md text-gray-800 font-semibold border-red-600 border-b-2 hover:text-gray-900 hover:font-bold hover:border-red-700 transition ease-out duration-300 2xl:text-2xl'
				>
					{details.btn}
				</Link>
			</div>
			<div className='hidden sm:block col-span-1'>
				<Image
					src='/pink3.jpeg'
					alt=''
					width={500}
					height={500}
					className='object-cover rounded-full w-72 h-72 shadow-lg ml-[33vw] md:ml-0 md:w-screen md:h-max lg:w-[100vh]'
				/>
			</div>
		</div>
	);
}

export default Detail;
