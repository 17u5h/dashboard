const secToOutputTimeConverter = (seconds: number) => {
	if (!seconds) return '0:00'
	const minutes = Math.floor(seconds / 60)
	const additionalSeconds = Math.floor(seconds % 60)
	if (minutes >= 60) {
		const hours = Math.floor(minutes / 60)
		const additionalMinutes = Math.floor(minutes % 60)
		if (additionalMinutes === 0 && additionalSeconds === 0) return `${hours}:00:00`
		if (additionalMinutes < 10 && additionalSeconds < 10) return `${hours}:0${additionalMinutes}:0${additionalSeconds}`
		if (additionalSeconds === 0) return `${hours}:${additionalMinutes}:00`
		if (additionalMinutes < 10) return `${hours}:0${additionalMinutes}:${additionalSeconds}`
		return `${hours}:${additionalMinutes}:${additionalSeconds}`
	}
	if (additionalSeconds === 0) return `${minutes}:00`
	if (additionalSeconds < 10) return `${minutes}:0${additionalSeconds}`
	else return `${minutes}:${additionalSeconds}`
}

export default secToOutputTimeConverter
