import React from 'react';
import style from './style.module.css'
import {secToMinConverter} from "../../../../lib/secToMinConverter";

type Props={
	firstName: string
	duration: number
}
const FilteredUser = (props: Props) => {

	const time = secToMinConverter(props.duration)

	return (
		<div className={style.container}>
			<p>{props.firstName}</p>
			<p>{'время: ' + time}</p>
		</div>
	);
};

export default FilteredUser;