import React, {useState} from 'react';
import style from './style.module.css'
import UIButton from "../UI/UIButton";
import {distributeUsersInIntervals} from "../../lib/distributeUsersInIntervals";
import {useChartStore, useSettingsStore, useUsersStore, useVideoStore} from "../../store/store";


const ChartControls = () => {
	const [step, setStep] = useState<string>('1')
	const [showHint, setShowHint] = useState<boolean>(false)
	const {users, dispatchIncomers, dispatchLeavers,} = useUsersStore(({users, dispatchIncomers, dispatchLeavers,}) => ({users, dispatchIncomers, dispatchLeavers,}))
	const {dispatchVideoEndTime, videoStart} = useVideoStore(({dispatchVideoEndTime, videoStart}) => ({dispatchVideoEndTime, videoStart}))
	const {intervalForFiltering, dispatchIntervalForFiltering} = useSettingsStore(({intervalForFiltering, dispatchIntervalForFiltering}) => ({intervalForFiltering, dispatchIntervalForFiltering}))
	const {chartTitle} = useChartStore(({chartTitle}) => ({chartTitle}))

	const handleRenderChart = () => {
		setShowHint(!users.length)
		distributeUsersInIntervals(users, dispatchIncomers, dispatchLeavers, dispatchVideoEndTime, videoStart, intervalForFiltering)
	}

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setStep(value)
		dispatchIntervalForFiltering(Number(value) * 60)
	}

	return (
		<div className={style.controlWrapper}>
			<p className={style.title}>График посещений марафона</p>
			<div className={style.controlContainer}>
				<label htmlFor="step" className={style.label}>Шаг на графике, минуты</label>
				<input
					className={style.input}
					name="step"
					value={step}
					onChange={inputHandler}
				/>
				<UIButton onClick={handleRenderChart} majorButton={true}>Показать график</UIButton>
				{chartTitle && <p className={style.chartTitle}>{chartTitle}</p>}
			</div>
			{showHint && <div className={style.hint}>Необходимо загрузить excel файл</div>}
		</div>
	);
};

export default ChartControls;