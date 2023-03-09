import Footer from '@/components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';

function DetailsPage() {
	return (
		<>
			<Navbar />
			<div className='flex justify-center items-center h-[40vh] font-bold text-3xl'>
				Details Page
			</div>
			<Footer />
		</>
	);
}

export default DetailsPage;
