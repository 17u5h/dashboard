import {Cell} from "read-excel-file/types";

export const converterDateCellToSec = (dateCell: Cell) => {
	if (!dateCell) return
	const dateObject = new Date(dateCell.toString())
	const hours = dateObject.getUTCHours()
	const minutes = dateObject.getUTCMinutes()
	const seconds = dateObject.getUTCSeconds()
	return hours * 3600 + minutes * 60 + seconds
}