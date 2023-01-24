import React, {useState} from 'react';
import {filteredUser, interval, user} from "../../../types/user";
import style from './style.module.css'
import UIButton from "../../UI/UIButton/UIButton";
import FilteredUser from "./FilteredUser/FilteredUser";

type Props = {
	users: user[]
}

const FilterByOverallTime = (props: Props) => {

	const [filteredUsers, setFilteredUsers] = useState<filteredUser[]>()
	const [filterTimeMin, setFilterTimeMin] = useState('3')
	const [filterTimeSec, setFilterTimeSec] = useState('')
	const [showFiltered, setShowFiltered] = useState(false)
	const [noUsersFound, setNoUsersFound] = useState(false)

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const name = event.target.name
		switch (name) {
			case 'min': {
				setFilterTimeMin(value)
				break
			}
			case 'sec': {
				setFilterTimeSec(value)
				break
			}
		}
	}

	const calcSummaryDuration = (intervals: interval[]) => {
		const durations = intervals.map(el => Number(el.duration))
		return durations.reduce((acc, el) => acc + el, 0)
	}

	const createUnfilteredUser = (user: user) => ({
		firstName: user.firstName,
		duration: calcSummaryDuration(user.intervals)
	})

	const showList = () => {

		const seconds = Math.abs(Number(filterTimeMin) * 60 + Number(filterTimeSec))
		const unfilteredUsers = props.users.map(el => createUnfilteredUser(el))
		const filterUsers = unfilteredUsers.filter(el => el.duration >= seconds)
		setFilteredUsers(filterUsers)
		if (!filterUsers?.length) {
			setShowFiltered(false)
			setNoUsersFound(true)
			return
		}
		setShowFiltered(true)
	}
	const hideList = () => {
		setShowFiltered(false)
		setNoUsersFound(false)
	}

	return (
		<div className={style.container}>
			<p className={style.title}>Отфильтровать устастников по количеству проведенного времени</p>
			<div className={style.inputsButtons}>
				<label htmlFor='min'>минут</label>
				<input className={style.input}
							 name='min'
							 value={filterTimeMin}
							 onChange={e => inputHandler(e)}
							 onKeyDown={e => {
								 if (e.key === 'Enter') showList()
							 }}/>
				<label htmlFor='sec'>секунд</label>
				<input className={style.input}
							 name='sec'
							 value={filterTimeSec}
							 onChange={e => inputHandler(e)}
							 onKeyDown={e => {
								 if (e.key === 'Enter') showList()
							 }}/>
				<UIButton onClick={showList}>показать</UIButton>
				<UIButton onClick={hideList}>скрыть</UIButton>
			</div>
			{showFiltered &&
				<div className={style.list}>
					{'Общее количество: ' + filteredUsers?.length}
					{filteredUsers?.map((el: filteredUser) => (<FilteredUser firstName={el.firstName} duration={el.duration}/>))}
				</div>
			}
			{noUsersFound && <p className={style.list}>Участники не найдены</p>}
		</div>
	);
};

export default FilterByOverallTime;