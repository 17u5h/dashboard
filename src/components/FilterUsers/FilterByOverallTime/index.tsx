import React, { useState } from 'react'
import { FilteredUser, User, Users } from '../../../types/user'
import style from './style.module.css'
import UIButton from '../../UI/UIButton'
import OneFilteredUser from './OneFilteredUser'
import calcSummaryDuration from '../../../lib/calcSummaryDuration'
import { TimeType } from '../../../enum/TimeType'
import { initialTimeToFilter } from '../../../constants/constants'

const FilterByOverallTime = ({ users }: Users) => {
  const [filteredUsers, setFilteredUsers] = useState<FilteredUser[]>([])
  const [filterTimeMin, setFilterTimeMin] = useState(initialTimeToFilter)
  const [filterTimeSec, setFilterTimeSec] = useState('')
  const [showFiltered, setShowFiltered] = useState(false)
  const [noUsersFound, setNoUsersFound] = useState(false)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const name = event.target.name
    switch (name) {
      case TimeType.min: {
        setFilterTimeMin(value)
        break
      }
      case TimeType.sec: {
        setFilterTimeSec(value)
        break
      }
    }
  }

  const createUnfilteredUser = (user: User) => ({
    firstName: user.firstName,
    duration: calcSummaryDuration(user.intervals)
  })

  const showList = () => {
    const seconds = Math.abs(Number(filterTimeMin) * 60 + Number(filterTimeSec))
    const unfilteredUsers = users.map((el) => createUnfilteredUser(el))
    const filterUsers = unfilteredUsers.filter((el) => el.duration >= seconds)
    setFilteredUsers(filterUsers)

    if (!filterUsers?.length) {
      setShowFiltered(false)
      setNoUsersFound(true)
      return
    }
    setShowFiltered(true)
    setNoUsersFound(false)
  }
  const hideList = () => {
    setShowFiltered(false)
    setNoUsersFound(false)
  }

  return (
    <div className={style.container}>
      <p className={style.title}>Отфильтровать устастников по количеству проведенного времени</p>
      <div className={style.inputsButtons}>
        <label htmlFor="min">минут</label>
        <input
          className={style.input}
          name="min"
          value={filterTimeMin}
          onChange={(e) => inputHandler(e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') showList()
          }}
        />
        <label htmlFor="sec">секунд</label>
        <input
          className={style.input}
          name="sec"
          value={filterTimeSec}
          onChange={(e) => inputHandler(e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') showList()
          }}
        />
        <UIButton onClick={showList}>показать</UIButton>
        <UIButton onClick={hideList}>скрыть</UIButton>
      </div>
      {showFiltered && (
        <div className={style.list}>
          {'Общее количество: ' + filteredUsers?.length}
          {filteredUsers?.map((el: FilteredUser) => (
            <OneFilteredUser firstName={el.firstName} duration={el.duration} />
          ))}
        </div>
      )}
      {noUsersFound && <p className={style.list}>Участники не найдены</p>}
    </div>
  )
}

export default FilterByOverallTime
