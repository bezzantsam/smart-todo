import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import container from '../../styles/Container.module.css';

const SignUp = () => {
	return (
		<div className={container.container}>
			<Navbar />
			<h1>SignUp Component</h1>
		</div>
	);
};

export default SignUp;
