import React, {useState} from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo'
import UIButton from '../../components/UI/UIButton'
import FilterByOverallTime from '../../components/FilterUsers/FilterByOverallTime'
import InputExcel from '../../components/InputExcel'
import {useUsersStore, useVideoStore} from '../../store/store'
import {distributeUsersInIntervals} from '../../lib/distributeUsersInIntervals'
import Charts from "../../components/Charts";
import {User} from "../../types/user";
import ShowIncomersInMoment from "../../components/Charts/ShowUsersInMoment/ShowIncomersInMoment";
import ShowLeaversInMoment from "../../components/Charts/ShowUsersInMoment/ShowLeaversInMoment";

const Main = () => {
	const {users, dispatchIncomers, dispatchLeavers,} = useUsersStore(({
																																			 users,
																																			 dispatchIncomers,
																																			 dispatchLeavers,
																																		 }) => ({
		users,
		dispatchIncomers,
		dispatchLeavers,
	}))
	const {dispatchVideoEndTime, videoStart} = useVideoStore(({
																															dispatchVideoEndTime,
																															videoStart
																														}) => ({dispatchVideoEndTime, videoStart}))

	const [incomingUsersInMoment, setIncomingUsersInMoment] = useState<User[]>([])
	const [leavingUsersInMoment, setLeavingUsersInMoment] = useState<User[]>([])

	const handleRenderChart = () => {
		distributeUsersInIntervals(users, dispatchIncomers, dispatchLeavers, dispatchVideoEndTime, videoStart)
	}

	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo/>
				<UIButton
					onClick={handleRenderChart}
				>
					Какая-то нопка
				</UIButton>
			</header>
			<div className={style.container}>
				<FilterByOverallTime users={users}/>
			</div>
			<InputExcel/>
			<Charts setIncomingUsersInMoment={setIncomingUsersInMoment} setLeavingUsersInMoment={setLeavingUsersInMoment}/>
			<div className={style.showUsersBlock}>
				{incomingUsersInMoment && <ShowIncomersInMoment incomingUsersInMoment={incomingUsersInMoment}/>}
				{leavingUsersInMoment && <ShowLeaversInMoment leavingUsersInMoment={leavingUsersInMoment}/>}
			</div>
		</div>
	)
}

export default Main
