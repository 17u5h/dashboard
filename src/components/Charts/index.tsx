import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import {useSettingsStore, useUsersStore, useVideoStore} from "../../store/store";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {CategoricalChartState} from "recharts/types/chart/generateCategoricalChart";
import secToOutputTimeConverter from "../../lib/secToOutputTimeConverter";
import {User} from "../../types/user";

type ChartData = {
	time: string
	"подключилось": number
	"отключилось": number
}

type Props = {
	setIncomingUsersInMoment: (users: User[]) => void
	setLeavingUsersInMoment: (users: User[]) => void
}

const Charts = ({setIncomingUsersInMoment, setLeavingUsersInMoment}: Props) => {
	const {incomingUsers, leavingUsers} = useUsersStore(({incomingUsers, leavingUsers}) => ({incomingUsers, leavingUsers}))
	const {videoStart, dispatchTimeToRewindLink} = useVideoStore(({videoStart, dispatchTimeToRewindLink}) => ({videoStart, dispatchTimeToRewindLink}))
	const {intervalForFiltering} = useSettingsStore(({intervalForFiltering}) => ({intervalForFiltering}))
	const [chartData, setChartData] = useState<ChartData[]>([])

	useEffect(() => {
		if (!videoStart) return
		const preparedData = incomingUsers.map((el, i) => ({
			time: secToOutputTimeConverter(videoStart + i * intervalForFiltering),
			"подключилось": el.length,
			"отключилось": leavingUsers[i].length
		}))
		setChartData(preparedData)
	}, [incomingUsers, leavingUsers])

	const handleClick = (event: CategoricalChartState) => {
		const payload = event.activePayload
		const index = event.activeTooltipIndex
		if (!payload || !index) throw new Error('что-то не так с графиком')
		const dataKeys = payload.map(el => el.dataKey)
		if (dataKeys.find(el => el === "подключилось")) setIncomingUsersInMoment(incomingUsers[index])
		if (dataKeys.find(el => el === "отключилось")) setLeavingUsersInMoment(leavingUsers[index])
		dispatchTimeToRewindLink((index * intervalForFiltering).toString())
		console.log((index * intervalForFiltering).toString())
	}

	return (
		<div className={style.size}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					onClick={handleClick}
					width={500}
					height={300}
					data={chartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="2 5"/>
					<XAxis dataKey="time"/>
					<YAxis/>
					<Tooltip/>
					<Line dataKey="подключилось" stroke="#5cd584" dot={{r: 0}} activeDot={{r: 8}} strokeWidth={2}
								className="clickable"/>
					<Line dataKey="отключилось" stroke="#d55c5c" dot={{r: 0}} activeDot={{r: 8}} strokeWidth={2}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Charts;