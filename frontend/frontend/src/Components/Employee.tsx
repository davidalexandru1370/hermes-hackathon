import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { IEmployee } from '../Model/IEmployee'


function ContentOfHeader (props:any) {

  return (
  <Box sx = {{
    display: 'flex',
  }}>
            <Chip sx = {{
              backgroundColor: props.employesInNeedOfNewDocuments.some((employee:IEmployee) => employee.data.employeId == props.employee.data.employeId) ? 'red' : 'green',
              color: "#fff",
              marginLeft: "auto",
            }} label= {props.employesInNeedOfNewDocuments.some((employee:IEmployee) => employee.data.employeId == props.employee.data.employeId) ? 'Out of Date' : 'Up to Date'}></Chip>  
</Box>  
  )
}

export default function Employee(props:any) {
  return (
    <div>
      <Card sx = {{
        width: "240px",
        margin: "32px 16px",
      }} variant="outlined">

        <CardHeader title = {<ContentOfHeader employesInNeedOfNewDocuments = {props.employesInNeedOfNewDocuments} employee = {props.employee}/>} >
          
        </CardHeader>

        <CardMedia component="img"
        image= {props.avatar}
        height = "120px"
        sx = {{
          width: "120px",
          borderRadius: "50%",
          margin: "12px auto"
        }}
        >
        </CardMedia>
        <CardContent>
          <Box>
            <Typography align="center" sx={{
              fontWeight: "bold"
            }}>{props.employee.data.employeName}</Typography>
            <Typography align="center" variant="body2" sx = {{ 
              opacity: "0.7"
            }}>{props.employee.data.employeDepartment}</Typography>
          </Box>
          <Box mt="12px" sx = {{
            backgroundColor: "#C7CED7",
            margin: "8px -10px",
            padding: "8px 0",
            borderRadius: "6px"
          }}>
            <Box sx = {{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Typography variant="subtitle1" sx={{
              paddingRight: "12px",
            }}>Date Hired</Typography>
              <Typography variant="subtitle1">{props.employee.data.employeStartDate.toDate().toLocaleDateString('en-UK')}</Typography>
            </Box>

            
          </Box>

          
        </CardContent>
      </Card>
    </div>
  )
}
