import React from 'react'
import style from './style.module.css'
import readXlsxFile from 'read-excel-file'
import { parseExcelTableToObject } from '../../lib/parseExcelTableToObject'
import { useUsersStore, useVideoStore } from '../../store/store'
import Icon from "./Icon";

const InputExcel = () => {
  const {dispatchUser} = useUsersStore(({dispatchUser}) => ({dispatchUser}))
  const dispatchVideoStartTime = useVideoStore((state) => state.dispatchVideoStartTime)

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    if (!target.files) throw new Error('файл не передан')
    const files = event.target.files
    if (!files) throw new Error('файл не передан')
    const file = files[0]

    try {
      const excelTable = await readXlsxFile(file, { sheet: 'Зрители' })
      parseExcelTableToObject(excelTable, dispatchUser, dispatchVideoStartTime)
       } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={style.inputContainer}>
      <label htmlFor="inputExcel" className={style.inputLabel}>
        <Icon/>Загрузить excel-файл от Bizon
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
