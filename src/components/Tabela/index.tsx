import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IConsulta from "../../types/IConsultas";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(()=>({
    [`&.${tableCellClasses.head}`]:{
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-primary)"
    }
})
)

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
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
            {consultas?.map((linha)=> {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {new Date(linha.data).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{linha.horario}</TableCell>
                    <TableCell>{linha.profissional[0].nome}</TableCell>
                    <TableCell>{linha.profissional[0].especialidade}</TableCell>
                    <TableCell>{linha.paciente}</TableCell>
                    <TableCell>{linha.modalidade}</TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
