import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
import container from '../styles/Container.module.css';

// Components
import Navbar from '../comps/Navbar/Navbar';

export default function Home() {
	return (
		<div className={container.container}>
			<Navbar />
			<h1>Smart To-do</h1>
		</div>
	);
}
