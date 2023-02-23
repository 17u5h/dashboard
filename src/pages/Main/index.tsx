import React, {useState} from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo'
import FilterByOverallTime from '../../components/FilterUsers/FilterByOverallTime'
import InputExcel from '../../components/InputExcel'
import {useUsersStore} from '../../store/store'
import Charts from "../../components/Charts";
import {User} from "../../types/user";
import ShowIncomersInMoment from "../../components/Charts/ShowUsersInMoment/ShowIncomersInMoment";
import ShowLeaversInMoment from "../../components/Charts/ShowUsersInMoment/ShowLeaversInMoment";
import ChartControls from "../../components/ChartControls";

const Main = () => {
	const {users} = useUsersStore(({users}) => ({users}))

	const [incomingUsersInMoment, setIncomingUsersInMoment] = useState<User[]>([])
	const [leavingUsersInMoment, setLeavingUsersInMoment] = useState<User[]>([])

	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo/>
			</header>
			<div className={style.container}>
				<FilterByOverallTime users={users}/>
			</div>
			<InputExcel/>
			<ChartControls/>
			<Charts setIncomingUsersInMoment={setIncomingUsersInMoment} setLeavingUsersInMoment={setLeavingUsersInMoment}/>
			<div className={style.showUsersBlock}>
				{incomingUsersInMoment && <ShowIncomersInMoment incomingUsersInMoment={incomingUsersInMoment}/>}
				{leavingUsersInMoment && <ShowLeaversInMoment leavingUsersInMoment={leavingUsersInMoment}/>}
			</div>
		</div>
	)
}

export default Main
