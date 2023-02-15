import React, {useEffect} from 'react';
import style from './style.module.css'
import {useUsersStore} from "../../store/store";
import {calcDashHeights} from "../../lib/calcDashHeights";
import Dash from "./Dash";

const Dashboard = () => {
	const {
		incomingUsers,
		leavingUsers,
		incomingUsersCount,
		leavingUsersCount,
		dispatchIncomingUsersCount,
		dispatchLeavingUsersCount
	} = useUsersStore(({
											 incomingUsers,
											 leavingUsers,
											 incomingUsersCount,
											 leavingUsersCount,
											 dispatchIncomingUsersCount,
											 dispatchLeavingUsersCount
										 }) => ({

		incomingUsers,
		incomingUsersCount,
		leavingUsers,
		leavingUsersCount,
		dispatchIncomingUsersCount,
		dispatchLeavingUsersCount,
	}))

	useEffect(() => {
		dispatchIncomingUsersCount(calcDashHeights(incomingUsers))
		dispatchLeavingUsersCount(calcDashHeights(leavingUsers))
	}, [incomingUsers, leavingUsers])

	return (
		<div className={style.container}>
			{incomingUsersCount.map(el => (<Dash key={Math.random() * 10000} height={el} isIncoming={true}/>))}
			{leavingUsersCount.map(el => (<Dash key={Math.random() * 10000} height={el} isIncoming={false}/>))}
		</div>
	);
};

export default Dashboard;