import Footer from '@/components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';

function CreatePage() {
	return (
		<>
			<Navbar />
			<div className='flex justify-center items-center h-[40vh] font-bold text-3xl'>
				Create Page
			</div>
			<Footer />
		</>
	);
}

export default CreatePage;
