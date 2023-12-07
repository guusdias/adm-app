import {
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Tabela() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell component="th" scope="row">11/56/2023
                </TableCell>
                <TableCell>08:30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
