import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import container from '../../styles/Container.module.css';

const Login = () => {
	return (
		<div className={container.container}>
			<Navbar />
			<h1>Login Component</h1>
		</div>
	);
};

export default Login;
