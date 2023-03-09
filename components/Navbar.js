import Image from 'next/image';
import Link from 'next/link';
import { authBtn, navData } from './../data';

function Navbar() {
	return (
		<nav className='flex justify-between py-8 items-center px-8 md:px-20 lg:px-24'>
			<Link href='/' className='flex font-bold text-lg md:text-2xl 2xl:text-3xl cursor-pointer'>
				<Image
					src='/logo.png'
					alt=''
					width={30}
					height={30}
					className='mr-2 2xl:mr-4 object-cover'
				/>
				LoremIp
			</Link>
			<ul className='hidden sm:flex 2xl:text-xl'>
				{navData.map((_d, i) => (
					<li key={i} className='sm:ml-3 lg:ml-6 flex items-center cursor-pointer'>
						<span className='font-semibold'>{_d}</span>
						<svg
							className='w-4 ml-2 h-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
						</svg>
					</li>
				))}
				{authBtn.map((_a, i) => (
					<Link href={`/${_a.title}`} key={i} className='sm:ml-2 lg:ml-6'>
						<span
							className={`font-semibold border-red-300 border-2 px-5 py-2 rounded-md transition ease-out duration-200 hover:opacity-75 ${_a.style}`}
						>
							{_a.value}
						</span>
					</Link>
				))}
			</ul>
			<svg
				className='w-6 h-6 flex sm:hidden'
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
					d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
				/>
			</svg>
		</nav>
	);
}

export default Navbar;
