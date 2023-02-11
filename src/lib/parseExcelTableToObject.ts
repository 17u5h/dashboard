import {Row} from "read-excel-file";
import {User} from "../types/user";
import {converterDateCellToSec} from "./converterDateCellToSec";
import {converterCellTimeToSec} from "./converterCellTimeToSec";

export const parseExcelTableToObject = (excelTable: Row[], dispatchUser: (user: User) => void, dispatchVideoStartTime: (time: number) => void) => {
	const necessaryFields = excelTable[1]
	const usernameHeader = necessaryFields[1]
	const emailHeader = necessaryFields[2]
	const timeIntervalFromHeader = necessaryFields[7]
	const timeIntervalTillHeader = necessaryFields[8]
	if (!usernameHeader && !emailHeader && !timeIntervalFromHeader && !timeIntervalTillHeader) throw new Error('Рассчет невозможен. Выложенный эксель файл не соответствует документации')

	const videoStartSeconds = converterCellTimeToSec(excelTable[2][0])
	dispatchVideoStartTime(videoStartSeconds)

	for (let i = 2; i < excelTable.length; i++) {
		const userArr = excelTable[i]
		let nextRow = excelTable[i + 1]
		const intervals = [{from: converterDateCellToSec(userArr[7]), till: converterDateCellToSec(userArr[8])}]

		const pushUser = () => {
			const userObj = {
				username: userArr[1]?.toString(),
				email: userArr[2]?.toString(),
				tel: userArr[3]?.toString(),
				IP: userArr[4]?.toString(),
				timeStart: userArr[5]?.toString(),
				timeEnd: userArr[6]?.toString(),
				intervals
			}
			dispatchUser(<User>userObj)
		}

		if (!nextRow) break

		if (!(nextRow[1])) {
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
				intervals.push({from: converterDateCellToSec(nextRow[7]), till: converterDateCellToSec(nextRow[8])})
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