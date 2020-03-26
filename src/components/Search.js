import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  input: {
    width: "80%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  search: {
    textAlign: "center"
  }
}));

function Search(props) {
  const classes = useStyles();

  const search = event => {
    const searchTerm = event.target.value;

    if (searchTerm.length > 3) {
      props.search(searchTerm);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Grid item sm={12} className={classes.search}>
            <TextField
              id="search"
              label="Search"
              type="search"
              variant="outlined"
              className={classes.input}
              onChange={e => search(e)}
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Search;
