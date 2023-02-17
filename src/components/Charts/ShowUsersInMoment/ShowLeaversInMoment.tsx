import React from 'react';
import style from './style.module.css'
import {User} from "../../../types/user";
import ShowOneUser from "./ShowOneUser";

type Props = {
	leavingUsersInMoment: User[]
}

const ShowLeaversInMoment = ({leavingUsersInMoment}: Props) => {
	return (
		<div className={style.usersTab} >
			{leavingUsersInMoment.map(el => (<ShowOneUser className={style.leavingUser} key={Math.random() * 100000} el={el}/>))}
		</div>
	);
};

export default ShowLeaversInMoment;