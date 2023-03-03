import React, {useState} from 'react'
import style from './style.module.css'
import readXlsxFile from 'read-excel-file'
import { parseExcelTableToObject } from '../../lib/parseExcelTableToObject'
import {useChartStore, useUsersStore, useVideoStore} from '../../store/store'
import Icon from "./Icon";

const InputExcel = () => {
  const [fileLoaded, setFileLoaded] = useState<boolean>(false)
  const {dispatchUser} = useUsersStore(({dispatchUser}) => ({dispatchUser}))
  const dispatchVideoStartTime = useVideoStore((state) => state.dispatchVideoStartTime)
  const {dispatchChartTitle} = useChartStore(({dispatchChartTitle}) => ({dispatchChartTitle}))

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    if (!target.files) throw new Error('файл не передан')
    const files = event.target.files
    if (!files) throw new Error('файл не передан')
    const file = files[0]
    setFileLoaded(false)
    try {
      const excelTable = await readXlsxFile(file, { sheet: 'Зрители' })
      setFileLoaded(true)
      parseExcelTableToObject(excelTable, dispatchUser, dispatchVideoStartTime, dispatchChartTitle)
       } catch (e) {
      console.error(e)
    }
  }

  const backgroundColor = () => {
    if (fileLoaded) return {backgroundColor: '#dcffd1'}
    else return {backgroundColor: '#EDECFF'}
  }

  return (
    <div className={style.inputContainer}>
      <label htmlFor="inputExcel" className={style.inputLabel} style={backgroundColor()}>
        <Icon/>{fileLoaded ? 'Файл загружен' : 'Загрузить excel-файл от Bizon'}
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
