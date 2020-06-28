import React from "react";
import {
  Paper,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

export const fixtures = [
  {
    nome: "CodiceDocumentoFiscale",
    descrizione:
      "Lista dei codici in riferimento al tipo di documento fiscale, ovvero anche della fattura elettronica.",
  },
  {
    nome: "CondizionePagamento",
    descrizione:
      "Lista dei codici in riferimento alle condizioni di pagamento delle fatture elettroniche.",
  },
  {
    nome: "ModalitaPagamento",
    descrizione:
      "Lista dei codici in riferimento alle modalità di pagamento delle fatture elettroniche.",
  },
  {
    nome: "NaturaOperazione",
    descrizione:
      "Lista dei codici in riferimento alla natura dell'operazione iva.",
  },
  {
    nome: "docfisc",
    descrizione:
      "Installa tutte le fixtures dell'applicazione docfisc: CodiceDocumentoFiscale, CondizionePagamento, Modalità Pagamento, NaturaOperazione",
  },
  {
    nome: "InteressiLegali",
    descrizione: "Lista dei punti percentuali degli interessi legali.",
  },
  {
    nome: "RegimeFiscale",
    descrizione: "Lista dei codici dei regimi fiscali.",
  },
  {
    nome: "TassoUfficialeRiferimento",
    descrizione:
      "Lista dei punti percentuali del tasso ufficiale di riferimento (anche conosciuto come TUR).",
  },
  {
    nome: "fisco",
    descrizione:
      "Installa tutte le fixtures dell'applicazione fisco: InteressiLegali, RegimeFiscale TassoUfficialeRiferimento",
  },
  {
    nome: "IvaAliquota",
    descrizione:
      "Lista di tutte le aliquote IVA e delle sue variazioni, a partire dagli anni 70.",
  },
  {
    nome: "tributi",
    descrizione:
      "Installa tutte le fixtures dell'applicazoine tributi: IvaAliquota",
  },
];

export function FixturesTable(props) {
  return (
    <Paper>
      <Box style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fixture</TableCell>
              <TableCell>Descrizione</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fixtures.map((f, i) => {
              let len = fixtures.length;
              let noBorder = { borderBottom: 0 };
              let styles = len === i + 1 ? noBorder : {};
              return (
                <TableRow key={i}>
                  <TableCell style={styles}>{f.nome}</TableCell>
                  <TableCell style={styles}>{f.descrizione}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}
