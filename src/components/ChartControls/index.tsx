import React, {useState} from 'react';
import style from './style.module.css'
import UIButton from "../UI/UIButton";
import {distributeUsersInIntervals} from "../../lib/distributeUsersInIntervals";
import {useSettingsStore, useUsersStore, useVideoStore} from "../../store/store";


const ChartControls = () => {
	const [step, setStep] = useState<number>(1)
	const [showHint, setShowHint] = useState<boolean>(false)
	const {users, dispatchIncomers, dispatchLeavers,} = useUsersStore(({users, dispatchIncomers, dispatchLeavers,}) => ({users, dispatchIncomers, dispatchLeavers,}))
	const {dispatchVideoEndTime, videoStart} = useVideoStore(({dispatchVideoEndTime, videoStart}) => ({dispatchVideoEndTime, videoStart}))
	const {intervalForFiltering, dispatchIntervalForFiltering} = useSettingsStore(({intervalForFiltering, dispatchIntervalForFiltering}) => ({intervalForFiltering, dispatchIntervalForFiltering}))

	const handleRenderChart = () => {
		(users.length) ? setShowHint(false) : setShowHint(true)
		distributeUsersInIntervals(users, dispatchIncomers, dispatchLeavers, dispatchVideoEndTime, videoStart, intervalForFiltering)
	}
	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value)
		if (!value) throw new Error('введено не число')
		setStep(value)
		dispatchIntervalForFiltering(value * 60)
	}

	return (
		<div className={style.controlContainer}>
			<label htmlFor="step">шаг на графике, минуты</label>
			<input
				className={style.input}
				name="step"
				value={step}
				onChange={inputHandler}
			/>
			<UIButton onClick={handleRenderChart}>Показать график</UIButton>
			<UIButton onClick={() => location.reload()}>Убрать график</UIButton>
			{showHint && <div className={style.hint}>Необходимо загрузить excel файл</div>}
		</div>
	);
};

export default ChartControls;