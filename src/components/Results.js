import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  }
}));

function Results(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="result table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Publish</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Popularity</TableCell>
            <TableCell>Maintenance</TableCell>
            <TableCell>Flags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.results &&
            props.results.objects &&
            props.results.objects.map(result => (
              <TableRow key={result.package.name}>
                <TableCell component="th" scope="row">
                  {result.package.name}
                </TableCell>
                <TableCell align="right">
                  {result.package.publisher.username}
                </TableCell>
                <TableCell align="right">
                  {result.score.detail.quality}
                </TableCell>

                <TableCell align="right">
                  {result.score.detail.popularity}
                </TableCell>

                <TableCell align="right">
                  {result.score.detail.maintenance}
                </TableCell>
                <TableCell align="right">To be defined</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Results;
