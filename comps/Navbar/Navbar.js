import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// styles
import styles from './Navbar.module.css';
import container from '../../styles/Container.module.css';

const Navbar = () => {
	return (
		<div className={container.container}>
			<Head>
				<title>Smart To-Do</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className={styles.something}>
				<Link href="/">Home</Link>
				<Link href="/login">Login</Link>
				<Link href="/signup">Signup</Link>
			</nav>
		</div>
	);
};

export default Navbar;
