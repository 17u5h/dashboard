import React from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo'
import UIButton from '../../components/UI/UIButton'
import FilterByOverallTime from '../../components/FilterUsers/FilterByOverallTime'
import InputExcel from '../../components/InputExcel/InputExcel'
import useUsersStore from "../../store/store";

const Main = () => {
	const users = useUsersStore(state => state.users)

	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo/>
				<UIButton
					onClick={() => {
						console.log('клик')
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
