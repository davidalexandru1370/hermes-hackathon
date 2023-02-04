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
import EnhancedTable from "./CustomTable"
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);

const EmployesList = (props:any) => { 
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

  // const getAllDocuments = async () => {
  //       let doc: string[] = ["1.pdf", "2.pdf","3.pdf","4.pdf"]
  //       let today: Date = new Date();
  //       setRows(
  //         doc.map((d: string) => {
  //           let dateCopy: Date = new Date(today.getTime());
  //           const mock: IEmployee = {
  //             id: "http://127.0.0.1:8080/" + d,
  //             name: "david",
  //             documents: [
  //               {
  //                 date: dateCopy,
  //                 id: "http://127.0.0.1:8080/" + d,
  //                 title: d,
  //               },
  //             ],
  //           };
  //           today.setMonth(today.getMonth() - 4);
  //           return mock;
          
      
  //     }));
  // };

  // useEffect(() => {
  //   getAllDocuments();
  //   props.getAllDataFromEmployes()
  // }, [reFetch]);

  return (
    <EnhancedTable rows = {rows} deleteDocument = {deleteDocument} setRefetch = {setRefetch} reFetch = {reFetch}></EnhancedTable>
  );
};

export default EmployesList;
