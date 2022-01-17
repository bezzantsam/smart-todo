import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
import styles from '../styles/General.module.css';

// Components
import Navbar from '../comps/Navbar/Navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Navbar />
			<h1>Smart To-do</h1>
		</div>
	);
}
