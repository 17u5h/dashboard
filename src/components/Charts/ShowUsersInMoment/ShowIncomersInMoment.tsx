import React from 'react';
import style from './style.module.css'
import {User} from "../../../types/user";
import secToOutputTimeConverter from "../../../lib/secToOutputTimeConverter";

type Props = {
	incomingUsersInMoment: User[]
}

const ShowIncomersInMoment = ({incomingUsersInMoment}: Props) => {
	return (
		<div className={style.usersTab}>
			{incomingUsersInMoment.map(el => (<div className={style.incomingUser} key={Math.random() * 100000}>
				<div>{el.username},</div>
				<div>провел: {secToOutputTimeConverter(el.intervals[0].till - el.intervals[0].from)}</div>
			</div>))}
		</div>
	);
};

export default ShowIncomersInMoment;