import { Paper, TableBody,Table, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import React from 'react'

export default function UsersTable({rows}) {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                      {rows.map(row=>(
                        <TableRow key={row.id} sx={{"&:last-child td,&:last-child th":{border:0}}}>
                            <TableCell component='th' scope='row'>{row.id}</TableCell>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell  >
                                <Button onClick={()=>{}}>
                                   Update
                                </Button>
                                <Button onClick={()=>{}}>
                                   Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}
