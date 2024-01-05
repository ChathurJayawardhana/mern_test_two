import React from 'react'
import {Button, Grid, Input, Typography} from "@mui/material";

export default function UserForm() {
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
        value={''}
        onChange={e=>{}}
      />
    </Grid>

    <Grid item xs={12}>
      <Typography component={'label'} htmlFor='id' sx={{color:"#000000",marginRight:"20px",fontSize:"16px",width:"100px",display:"block"}}>Name</Typography>
      <Input
        type='text'
        id='name'
        name='name'
        sx={{width:"400px"}}
        value={''}
        onChange={e=>{}}
      />
    </Grid>
    
    <Button sx={{margin:"auto", marginBottom:"20px",backgroundColor:"#00c6e6",marginLeft:"15px",'&:hover':{opacity : "0.7",backgroundColor:"#00c6e6"}}} variant=''>Add</Button>

    </Grid>
  )
}
