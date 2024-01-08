import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'
import axios from 'axios'


export default function Users() {

  const [users,setUsers] = useState([]);
  const [submited,setSubmited] = useState(false);
  const [selectedUser,setSelectedUser] = useState({});
  const [isEdit,setIsEdit] = useState(false);
  
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
   
  const addUser = (data) => {
    setSubmited(true);
    const payload = {
      id:data.id,
      name : data.name,
    }
    axios.post('http://localhost:3001/api/createuser',payload)
    .then(() => {
      getUsers();
      setSubmited(false);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const updateUser = (data) => {
    setSubmited(true);
    
    const payload = {
      id:data.id,
      name:data.name,
    }
    axios.post('http://localhost:3001/api/updateuser',payload)
    .then(() => {
      getUsers();
      setSubmited(false);
      isEdit(false);
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
      <UserForm addUser={addUser} updateUser={updateUser} submited={submited} data={selectedUser} isEdit={isEdit}/>
      <UsersTable 
      rows={users}
      selectedUser={data => {
        setSelectedUser(data);
        setIsEdit(true);
      }}

      />
    </Box>
  )
}
