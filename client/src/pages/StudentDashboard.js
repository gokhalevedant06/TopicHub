import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'

const Studentdashboard = () => {
  const {user} = useSelector(selectUser);
  return (
    <div>
      This is Student Dashboard
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.phone}</h1>
      </div>
  )
}

export default Studentdashboard