import { Cell } from 'read-excel-file/types'

export const converterCellTimeToSec = (stringCell: Cell) => {
  if (!stringCell) throw new Error('Не получилось определить время начала видео. ячейка А3 пуста')
  const videoStartedDate = stringCell.toString().split(' ')
  const videoStartedTime = videoStartedDate[1]
  const timeArr = videoStartedTime.split(':')
  const hours = timeArr[0]
  const minutes = timeArr[1]
  return Number(hours) * 3600 + Number(minutes) * 60
}
