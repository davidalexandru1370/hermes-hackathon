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
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);

const EmployesList = () => {

    const rows: IEmployee[] = [
    { id: "1", name: "david" },
    { id: "1", name: "david" },
    {
      id: "1",
      name: "David",
      documents: [{ id: "1", title: "Analize medicale", date : new Date(2018,2,3) }],
    },
    {
      id: "1",
      name: "David",
      documents: [{ id: "1", title: "Analize medicale", date: new Date(2022,1,3) }],
    },
    {
      id: "1",
      name: "David",
      documents: [{ id: "1", title: "Analize medicale", date: new Date(2022,7,23) }],
    },
  ];

  function colorRow(documentDate: Date) {
    const currentDate = new Date();
    const dateDifference = new Date(currentDate.getTime() - documentDate.getTime());
    if (dateDifference.getUTCFullYear() - 1970 >= 1)
      return "#b30000"
    else if (dateDifference.getUTCMonth() > 11)
      return "#e67300"
    else
      return "#90EE90"

  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
      <Table sx={{ minWidth: 650, maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell></TableCell>
            <TableCell align="right"><Typography>Name</Typography></TableCell>
            <TableCell align="right"><Typography>Document name</Typography></TableCell>
            <TableCell align="right"><Typography>Date</Typography></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (row) =>
              row.documents !== undefined && (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 
                >
                  <TableCell component="th" scope="row">
                    <RemoveRedEyeIcon
                      onClick={() => {}}
                      sx={{
                        "&:hover": {
                          backgroundColor: "gray",
                          borderRadius: "20px",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">{<Typography>{row.name}</Typography>}</TableCell>
                  <TableCell align="right">{<Typography>{row.documents[0].title}</Typography>}</TableCell>
                  <TableCell align="right">{<Typography sx = {{color: colorRow(row.documents[0].date)}}>{row.documents[0].date.toLocaleDateString('en-UK')}</Typography>}</TableCell>
                  <TableCell align="right">
                    <DoNotDisturbOnIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: "gray",
                          borderRadius: "50px",
                        },
                      }}
                    />
                  </TableCell>

                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployesList;
