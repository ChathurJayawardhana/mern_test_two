import React from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'
import axios from 'axios'

const users = [
  {
    id:1,
    name:"chathura"
  },
  {
    id:2,
    name:"kalani"
  }
]
export default function Users() {
  return (
    <Box
    sx={{
      width:'calc(100% - 100px)',
      margin:'auto'
    }}
    >
      <UserForm/>
      <UsersTable rows={users}/>
    </Box>
  )
}
