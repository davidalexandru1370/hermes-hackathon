import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { myEmployeDocument } from '../Model/myEmployeDocument';
import { deleteFile, deleteFileDocument, downloadData, getEmployeDocuments, testUpload, uploadPDFToDatabase } from '../Firebase';
import { employeDocumentsContext } from '../Context/EmployeContext';
import SimpleDialog from './SimpleDialog';

function colorRow(documentDate: Date) {
  const currentDate = new Date();
  const dateDifference = new Date(
    currentDate.getTime() - documentDate.getTime()
  );
  if (dateDifference.getUTCFullYear() - 1970 >= 1) return "#ff0505";
  else if (dateDifference.getUTCMonth() > 11) return "#ffff14";
  else return "#47ed5a";
}


export default function BasicTable(props:any) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>(new File([""], "PlaceHolder"))

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleClick = async (id:any, file:any) => {
    await deleteFileDocument(id)
    await deleteFile(file)
    props.getDocumentsData()
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: "60vw"}}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{padding:0}}></TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell sx={{padding:0}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row:myEmployeDocument) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{
                  paddingRight: 0,
                }}>
                  <RemoveRedEyeIcon
                  onClick={() => {
                    downloadData(row.fileId);
                }}
                sx={{
                  "&:hover": {
                    color: 'blue',
                    cursor: 'pointer'
                  },
                }}></RemoveRedEyeIcon>
                </TableCell>

                <TableCell align="left">{row.fileId}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left"  sx={{
                  width: 'min-content',
                  color: colorRow(row.date)
                }}>{row.date.toLocaleDateString()}</TableCell>
                <TableCell component="th" scope="row" sx={{
                  width: '10px'
                }}>{<DoNotDisturbOnIcon onClick={() => handleClick(row.id, row.fileId)} sx={{
                  "&:hover": {
                    color: 'blue',
                    cursor: 'pointer'
                  },
                }}></DoNotDisturbOnIcon>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" component="label" onClick={handleClickOpen} sx  = {{
        marginTop: '1em'
      }}>
        Upload
      </Button>
        <SimpleDialog open = {open} handleClose= {handleClose} selectedFile = {selectedFile} setSelectedFile={setSelectedFile} employees= {props.employees} getDocumentsData= {props.getDocumentsData}></SimpleDialog>
    </>
  )
}
