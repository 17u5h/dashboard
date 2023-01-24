import React, {useEffect} from 'react';
import style from './style.module.css'
import Logo from "../components/Logo/Logo";
import UIButton from "../components/UI/UIButton/UIButton";
import {stub} from "../stubs/stub";
import FilterByOverallTime from "../components/FilterUsers/FilterByOverallTime/FilterByOverallTime";

const Main = () => {
	
	

	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo/>
				<UIButton onClick={() => {}}>Какая-то нопка</UIButton>
			</header>
			<div className={style.container}>
				<FilterByOverallTime users={stub}/>
			</div>
		</div>
	);
};

export default Main;