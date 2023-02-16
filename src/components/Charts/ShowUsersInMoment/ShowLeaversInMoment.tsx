import React from 'react';
import style from './style.module.css'
import secToOutputTimeConverter from "../../../lib/secToOutputTimeConverter";
import {User} from "../../../types/user";

type Props = {
	leavingUsersInMoment: User[]
}

const ShowLeaversInMoment = ({leavingUsersInMoment}: Props) => {
	return (
		<div className={style.usersTab}>
			{leavingUsersInMoment.map(el => (<div className={style.leavingUser} key={Math.random() * 100000}>
				<div>{el.username},</div>
				<div>провел: {secToOutputTimeConverter(el.intervals[0].till - el.intervals[0].from)}</div>
			</div>))}
		</div>
	);
};

export default ShowLeaversInMoment;