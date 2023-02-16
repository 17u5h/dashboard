import {Row} from 'read-excel-file'
import {User} from '../types/user'
import {converterDateCellToSec} from './converterDateCellToSec'
import {converterCellTimeToSec} from './converterCellTimeToSec'

export const parseExcelTableToObject = (
	excelTable: Row[],
	dispatchUser: (user: User) => void,
	dispatchVideoStartTime: (time: number) => void
) => {

	const necessaryFields = excelTable[1]
	const [, usernameHeader, emailHeader, , , , timeIntervalFromHeader, timeIntervalTillHeader] = necessaryFields

	if (!usernameHeader && !emailHeader && !timeIntervalFromHeader && !timeIntervalTillHeader)
		throw new Error('Рассчет невозможен. Выложенный эксель файл не соответствует документации')

	const videoStartSeconds = converterCellTimeToSec(excelTable[2][0])
	dispatchVideoStartTime(videoStartSeconds)

	for (let i = 2; i < excelTable.length; i++) {
		const userArr = excelTable[i]
		let nextRow = excelTable[i + 1]
		const intervals = [
			{from: converterDateCellToSec(userArr[7]), till: converterDateCellToSec(userArr[8])}
		]

		const pushUser = () => {
			const [, username, email, tel, IP, timeStart, timeEnd] = userArr
			const userObj = {
				username,
				email,
				tel,
				IP,
				timeStart,
				timeEnd,
				intervals
			}
			dispatchUser(<User>userObj)
		}

		if (!nextRow) break

		if (!nextRow[1]) {
			let isContinue = true
			for (let j = i + 1; isContinue; j++) {
				if (nextRow[1] || nextRow[2]) {
					isContinue = false
					break
				}
				if (nextRow[7] === null || nextRow[8] === null) {
					isContinue = false
					break
				}
				intervals.push({
					from: converterDateCellToSec(nextRow[7]),
					till: converterDateCellToSec(nextRow[8])
				})
				if (!excelTable[j + 1]) {
					isContinue = false
					break
				}
				nextRow = excelTable[j + 1]
			}
		}
		if (userArr[1]) pushUser()
	}
}
