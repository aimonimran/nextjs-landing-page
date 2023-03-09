function Quotation() {
	return (
		<div className='px-8 my-20 pb-36 mt-48 md:px-24'>
			<div className='flex flex-col justify-center'>
				<h1 className='font-semibold text-3xl sm:text-4xl md:text-6xl py-8 text-center 2xl:text-6xl'>
					Quotation
				</h1>
				<h3 className='text-center text-sm sm:text-md md:text-xl text-gray-600 w-3/4 m-auto pb-8 leading-8 md:leading-loose md:tracking-wider 2xl:text-2xl 2xl:leading-10'>
					<span className='font-bold text-md sm:text-xl text-red-600'>&quot;</span>Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Ut blandit enim vitae maximus ornare. Aenean et
					euismod ante, sit amet lobortis mi. Maecenas dictum imperdiet efficitur. Integer sodales
					nunc sit amet elit placerat lobortis. Curabitur tristique pharetra enim ac vulputate.
					<span className='font-bold text-md sm:text-xl text-red-600'>&quot;</span>
				</h3>
				<button className='text-gray-800 text-sm sm:text-md md:text-xl m-auto font-semibold border-red-600 border-b-2 hover:font-bold hover:border-red-700 transition ease-out duration-300 2xl:text-2xl'>
					Lorem Ipsum
				</button>
			</div>
		</div>
	);
}

export default Quotation;
