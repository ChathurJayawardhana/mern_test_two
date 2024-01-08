import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'
import axios from 'axios'


export default function Users() {

  const [users,setUsers] = useState([]);
  
   useEffect(()=>{
      getUsers();
   },[])

  const getUsers = () => {
    axios.get('http://localhost:3001/api/users')
    .then(response => {
      setUsers(response.data.response);
    })
    .catch(error => {
      console.error(error);
    })
  }

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
