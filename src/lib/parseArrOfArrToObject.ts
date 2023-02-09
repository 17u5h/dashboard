import {Row} from "read-excel-file";

export const parseArrOfArrToObject = (arrOfArr: Row[], dispatch) => {
	const necessaryFields = arrOfArr[1]
	if (!necessaryFields[1] && !necessaryFields[2] && !necessaryFields[7] ! && necessaryFields[8]) throw new Error('Рассчет невозможен. Выложенный эксель файл не соответствует документации')


}