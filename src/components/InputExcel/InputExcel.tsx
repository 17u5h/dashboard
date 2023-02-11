import React from 'react'
import style from './style.module.css'
import readXlsxFile from 'read-excel-file'
import {parseExcelTableToObject} from "../../lib/parseExcelTableToObject";
import {useUsersStore, useVideoStore} from "../../store/store";

const InputExcel = () => {
	const dispatchUser = useUsersStore(state => state.dispatchUser)
	const dispatchVideoStartTime = useVideoStore(state => state.dispatchVideoStartTime)

	const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target
		if (target.files === null) throw new Error('файл не передан')
		const files = event.target.files
		if (files === null) throw new Error('файл не передан')
		const file = files[0]

		try {
			const excelTable = await readXlsxFile(file, {sheet: 'Зрители'})
			parseExcelTableToObject(excelTable, dispatchUser, dispatchVideoStartTime)
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
