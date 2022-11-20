import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IEmployee } from "../Model/IEmployee";
import { useState, useEffect, Children } from "react";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
import EnhancedTable from "./CustomTable";
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);

const EmployesList = () => {
  const [rows, setRows] = useState<IEmployee[]>([]);

  const [reFetch, setRefetch] = useState<number>(0);

  const deleteDocument = async (id: string) => {
    let file = { Id: id };
    await fetch(`https://localhost:7203/api/document/delete/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  function getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getAllDocuments = async () => {
    await fetch("https://localhost:7203/api/document/getall")
      .then(async (resp) => {
        return resp.json();
      })
      .then((doc: string[]) => {
        let today: Date = new Date();
        setRows(
          doc.map((d: string) => {
            let dateCopy: Date = new Date(today.getTime());
            const mock: IEmployee = {
              id: "http://127.0.0.1:8080/" + d,
              name: "david",
              documents: [
                {
                  date: dateCopy,
                  id: "http://127.0.0.1:8080/" + d,
                  title: d,
                },
              ],
            };
            today.setMonth(today.getMonth() - 4);
            return mock;
          })
        );
      });
  };

  useEffect(() => {
    getAllDocuments();
  }, [reFetch]);

  function colorRow(documentDate: Date) {
    const currentDate = new Date();
    const dateDifference = new Date(
      currentDate.getTime() - documentDate.getTime()
    );
    if (dateDifference.getUTCFullYear() - 1970 >= 1) return "#b30000";
    else if (dateDifference.getUTCMonth() > 11) return "#e67300";
    else return "#90EE90";
  }

  return (
    <EnhancedTable
      rows={rows}
      deleteDocument={deleteDocument}
      setRefetch={setRefetch}
      reFetch={reFetch}
    ></EnhancedTable>
    // <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
    //   <Table sx={{ minWidth: 650, maxWidth: "100%" }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow style={{ backgroundColor: "gray" }}>
    //         <TableCell></TableCell>
    //         <TableCell align="right">
    //           <Typography>Name</Typography>
    //         </TableCell>
    //         <TableCell align="right">
    //           <Typography>Document name</Typography>
    //         </TableCell>
    //         <TableCell align="right">
    //           <Typography>Date</Typography>
    //         </TableCell>
    //         <TableCell></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map(
    //         (row) =>
    //           row.documents !== undefined && (
    //             <TableRow
    //               key={row.name}
    //               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //               style={{
    //                 backgroundColor: `${colorRow(row.documents[0].date)}`,
    //               }}
    //             >
    //               <TableCell component="th" scope="row">
    //                 <RemoveRedEyeIcon
    //                   onClick={() => {
    //                     console.log("aici");
    //                     window.open(
    //                       `${row.documents![0].id}`,
    //                       "_blank",
    //                       "fullscreen=yes"
    //                     );
    //                   }}
    //                   sx={{
    //                     "&:hover": {
    //                       backgroundColor: "gray",
    //                       borderRadius: "20px",
    //                       cursor: "pointer",
    //                     },
    //                   }}
    //                 />
    //               </TableCell>
    //               <TableCell align="right">{row.name}</TableCell>
    //               <TableCell align="right">{row.documents[0].title}</TableCell>
    //               <TableCell align="right">
    //                 {row.documents[0].date.toLocaleDateString("en-UK")}
    //               </TableCell>
    //               <TableCell align="right">
    //                 <DoNotDisturbOnIcon
    //                   sx={{
    //                     "&:hover": {
    //                       backgroundColor: "gray",
    //                       borderRadius: "50px",
    //                       cursor: "pointer",
    //                     },
    //                   }}
    //                   onClick={async () => {
    //                     const name: string = row
    //                       .documents![0].id.split("/")
    //                       .slice(-1)[0];
    //                     await deleteDocument(name);
    //                     setRefetch(reFetch + 1);
    //                   }}
    //                 />
    //               </TableCell>
    //             </TableRow>
    //           )
    //       )}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default EmployesList;
