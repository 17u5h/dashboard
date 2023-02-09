import React from 'react'
import style from './style.module.css'
import secToOutputTimeConverter from '../../../../lib/secToOutputTimeConverter'
import { FilteredUser } from '../../../../types/user'

const OneFilteredUser = ({ username, duration }: FilteredUser) => {
  const time = secToOutputTimeConverter(duration)

  return (
    <div className={style.container}>
      <p>{username}</p>
      <p>{'время: ' + time}</p>
    </div>
  )
}

export default OneFilteredUser
