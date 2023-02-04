import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select';
import { uploadDocumentData, uploadPDFToDatabase } from '../Firebase';
import CheckIcon from '@mui/icons-material/Check';
import { timeStamp } from 'console';
import { Timestamp } from 'firebase/firestore/lite';

export default function SimpleDialog(props:any) {

  const [selectedName, setSelectedName] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>(new File([""], "PlaceHolder"))

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedName(event.target.value as string)
  }

  const changeHandler = (event:any) =>{
    props.setSelectedFile(event.target.files[0])
  }  

  const handleUpload = async () => {
    
    if(props.selectedFile.name !== "PlaceHolder") {
      await uploadPDFToDatabase(props.selectedFile, `${props.selectedFile.name}`)
      await uploadDocumentData({
        employeName: selectedName,
        fileId: props.selectedFile.name.replace(".pdf", ""),
        uploadDate: Timestamp.fromDate(new Date())
      })
    }
    props.getDocumentsData()
    props.handleClose()
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleUpload} >
        <DialogTitle>
          Hello
        </DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <DialogContentText>
            Select an employee
          </DialogContentText>
          <Select onChange={handleChange} sx = {{
            margin: "12px 0",
            height: "40px"
          }}>
            {props.employees.map((employee:any) => (
              <MenuItem value = {employee.data.employeName}>{employee.data.employeName}</MenuItem>
            ))}
          </Select>
          <DialogContentText>
            {props.selectedFile.name !== "PlaceHolder" ?  `Selected File is: ${props.selectedFile.name}` : "Select a File"}
          </DialogContentText>
          <Button variant = {props.selectedFile.name !=="PlaceHolder" ? "contained" : "outlined"} component = "label" sx={{
            width: props.selectedFile.name !== "PlaceHolder" ? "50px" : "inherit"
          }}>
            {
              props.selectedFile.name !== "PlaceHolder" ? (
                <Box sx ={{ 
                  display: "flex",
                }}>
                  <CheckIcon sx = {{
                    paddingLeft: "0",
                  }}></CheckIcon>
                </Box>
              ) : "Select File"
            }
            <input type="file" hidden accept="pdf/*" onChange={changeHandler}/>
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button variant = "contained" onClick={handleUpload}>Upload</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
