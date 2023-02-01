import React from 'react';
import style from './style.module.css'

const Logo = () => {

	return (
		<div className={style.logo} onClick={() => document.location.reload()}/>
	);
};

export default Logo;