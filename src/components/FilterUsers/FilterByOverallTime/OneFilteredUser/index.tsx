import React from 'react';
import style from './style.module.css'
import secToMinConverter from "../../../../lib/secToMinConverter";
import {FilteredUser} from "../../../../types/user";

const OneFilteredUser = ({firstName, duration}:FilteredUser) => {

	const time = secToMinConverter(duration)

	return (
		<div className={style.container}>
			<p>{firstName}</p>
			<p>{'время: ' + time}</p>
		</div>
	);
};

export default OneFilteredUser;