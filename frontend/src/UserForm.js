import React, { useEffect, useState } from 'react'
import {Button, Grid, Input, Typography} from "@mui/material";

export default function UserForm({addUser,updateUser,submited,data,isEdit}) {

  const [id,setId] = useState()
  const [name,setName] =useState('')

  useEffect(()=>{
    if (!submited){
      setId('');
      setName('');
    }
  },[submited])

  useEffect(()=>{
    if(data?.id && data.id !== 0){
      setId(data.id);
      setName(data.name)
    }
  })

  return (
    <Grid container spacing={2} 
    sx={{backgroundColor:"#ffffff",
         marginBottom:"30px",
         display:"block",   
  }}
    > 
   
    <Grid item xs={12} sm={6} sx={{display:'flex'}}>
         <Typography component={'h1'} sx={{color:"#000000"}}>User Form</Typography>
    </Grid>

    <Grid item xs={12}>
      <Typography component={'label'} htmlFor='id' sx={{color:"#000000",marginRight:"20px",fontSize:"16px",width:"100px",display:"block"}}>ID</Typography>
      <Input
        type='number'
        id='id'
        name='id'
        sx={{width:"400px"}}
        value={id}
        onChange={e=>setId(e.target.value)}
      />
    </Grid>

    <Grid item xs={12}>
      <Typography component={'label'} htmlFor='id' sx={{color:"#000000",marginRight:"20px",fontSize:"16px",width:"100px",display:"block"}}>Name</Typography>
      <Input
        type='text'
        id='name'
        name='name'
        sx={{width:"400px"}}
        value={name}
        onChange={e=>setName(e.target.value)}
      />
    </Grid>
    
    <Button sx={{margin:"auto", marginBottom:"20px",backgroundColor:"#00c6e6",marginLeft:"15px",'&:hover':{opacity : "0.7",backgroundColor:"#00c6e6"}}} variant=''
    onClick={()=> isEdit ? updateUser({id,name}) : addUser({id,name})}
    >{
      isEdit ? 'update' : 'Add'
    }
    
    </Button>

    </Grid>
  )
}
