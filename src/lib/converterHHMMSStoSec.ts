export const converterHHMMSStoSec = (time: string) => {
	const timeArr = time.split(':')

	if (timeArr.length !== 3) console.error('вводимый формат времени не соответствует шаблону HH:MM:SS')

	const hours = Number(timeArr[0])
	const minutes = Number(timeArr[1])
	const seconds = Number(timeArr[2])

	return hours * 3600 + minutes * 60 + seconds
}