import React from 'react';
import style from './style.module.css'
import {User} from "../../../types/user";
import ShowOneUser from "./ShowOneUser";

type Props = {
	incomingUsersInMoment: User[]
}

const ShowIncomersInMoment = ({incomingUsersInMoment}: Props) => {
	return (
		<div className={style.usersTab} >
			{incomingUsersInMoment.map(el => (<ShowOneUser className={style.incomingUser} key={Math.random() * 100000} el={el}/>))}
		</div>
	);
};

export default ShowIncomersInMoment;