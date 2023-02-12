import React, {useEffect} from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo'
import UIButton from '../../components/UI/UIButton'
import FilterByOverallTime from '../../components/FilterUsers/FilterByOverallTime'
import InputExcel from '../../components/InputExcel/InputExcel'
import {useUsersStore, useVideoStore} from '../../store/store'
import {distributeUsersInIntervals} from '../../lib/distributeUsersInIntervals'

const Main = () => {
	const users = useUsersStore((state) => state.users)
	const incomingUsers = useUsersStore((state) => state.incomingUsers)
	const leavingUsers = useUsersStore((state) => state.leavingUsers)
	const dispatchIncomers = useUsersStore((state) => state.dispatchIncomers)
	const dispatchLeavers = useUsersStore((state) => state.dispatchLeavers)
	const dispatchVideoEndTime = useVideoStore((state) => state.dispatchVideoEndTime)
	const videoStart = useVideoStore((state) => state.videoStart)

	useEffect(() => {
		console.log(incomingUsers)
		console.log(leavingUsers)
	}, [incomingUsers, leavingUsers])

	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo/>
				<UIButton
					onClick={() => {
						distributeUsersInIntervals(users, dispatchIncomers, dispatchLeavers, dispatchVideoEndTime, videoStart)
					}}
				>
					Какая-то нопка
				</UIButton>
			</header>
			<div className={style.container}>
				<FilterByOverallTime users={users}/>
			</div>
			<InputExcel/>
		</div>
	)
}

export default Main
