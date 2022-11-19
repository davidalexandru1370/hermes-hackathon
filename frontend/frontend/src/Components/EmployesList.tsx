import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
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
  // var d1 = new Date(2018, 11, 23)
  const rows: IEmployee[] = [
    { id: "1", name: "david" },
    { id: "1", name: "david" },
    {
      id: "1",
      name: "david",
      
      documents: [{ id: "1", title: "analize medicale", date : new Date(2018,2,3) }],
    },
    {
      id: "1",
      name: "david",
      documents: [{ id: "1", title: "analize medicale", date: new Date(2022,6,3) }],
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
      <Table sx={{ minWidth: 650, maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Document name</TableCell>
            <TableCell align="right">Date</TableCell>
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
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.documents[0].title}</TableCell>
                  <TableCell align="right">{row.documents[0].date.toDateString()}</TableCell>
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
