import {Row} from "read-excel-file";
import {User} from "../types/user";

export const parseArrOfArrToObject = (arrOfArr: Row[], dispatchUser: (user: User) => void) => {
	const necessaryFields = arrOfArr[1]
	if (!necessaryFields[1] && !necessaryFields[2] && !necessaryFields[7] ! && necessaryFields[8]) throw new Error('Рассчет невозможен. Выложенный эксель файл не соответствует документации')

	//здесь будет логика чтения массива массивов из эксель файла с добавлением юзеров в стор

}