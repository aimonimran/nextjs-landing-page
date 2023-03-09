import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import About from '@/components/About';
import Detail from '@/components/Detail';
import { detailsData } from './../data';
import Features from '@/components/Features';
import Quotation from '@/components/Quotation';
import GetStarted from '@/components/GetStarted';
import Layout from '@/components/Layout';
import { aboutCards, featuresData, getStartedCards, headerData } from '../data';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ headerContent, cards, details, features, startedCards }) {
	return (
		<>
			<Head>
				<title>Nextjs Landing Page</title>
				<meta name='description' content='Nextjs Landing Page' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Layout>
					<Header headerContent={headerContent} />
					<About cards={cards} />
					<Detail details={details} />
					<Features features={features} />
					<Quotation />
					<GetStarted startedCards={startedCards} />
				</Layout>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const headerContent = headerData;
	const cards = aboutCards;
	const details = detailsData;
	const features = featuresData;
	const startedCards = getStartedCards;

	return {
		props: {
			headerContent,
			cards,
			details,
			features,
			startedCards
		}
	};
}
