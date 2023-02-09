import React from 'react'
import style from './style.module.css'
import readXlsxFile from 'read-excel-file'
import {parseArrOfArrToObject} from "../../lib/parseArrOfArrToObject";
import useUsersStore from "../../store/store";

const InputExcel = () => {
	const dispatchUser = useUsersStore(state => state.dispatchUser)

	const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target
		if (target.files === null) throw new Error('файл не передан')
		const files = event.target.files
		if (files === null) throw new Error('файл не передан')
		const file = files[0]

		try {
			const arrOfArr = await readXlsxFile(file, {sheet: 'Зрители'})
			parseArrOfArrToObject(arrOfArr, dispatchUser)
		} catch (e) {
			console.error(e)
		}
	}


	return (
		<div className={style.inputContainer}>
			<label htmlFor="inputExcel" className={style.inputLabel}>
				Загрузить excel файл
			</label>
			<input
				id="inputExcel"
				type="file"
				className={style.input}
				onChange={(e) => handleUpload(e)}
			/>
		</div>
	)
}

export default InputExcel
