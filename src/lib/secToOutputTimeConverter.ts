const secToOutputTimeConverter = (seconds: number) => {
	if (!seconds) return '0:00'
	const minutes = Math.floor(seconds / 60)
	const additionalSeconds = Math.floor(seconds % 60)
	if (minutes >= 60) {
		const hours = Math.floor(minutes / 60)
		const additionalMinutes = Math.floor(minutes % 60)
		return `${hours}:${additionalMinutes}:${additionalSeconds}`
	}
	if (additionalSeconds < 10) return `${minutes}:0${additionalSeconds}`
	else return `${minutes}:${additionalSeconds}`
}

export default secToOutputTimeConverter
