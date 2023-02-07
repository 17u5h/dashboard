import style from './style.module.css'
import readXlsxFile from 'read-excel-file'

const InputExcel = () => {

	const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target
		if(target.files === null) throw new Error('файл не передан')
		const files = event.target.files
		if (files === null) throw new Error('файл не передан')
		const file = files[0]

		try{
			const workbook = await readXlsxFile(file, {sheet: 'Зрители'} )
			console.log(workbook)
		}
		catch (e) {
			console.error(e)
		}

	}

	return (
		<div className={style.inputContainer}>
			<label htmlFor='inputExcel' className={style.inputLabel}>Загрузить excel файл</label>
			<input id='inputExcel' type='file' className={style.input} onChange={(e) => handleUpload(e)}/>
		</div>
	);
};

export default InputExcel;