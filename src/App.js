import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import 'typeface-roboto';
import Search from './components/Search';
import Results from './components/Results';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    fontFamily: 'Roboto'
  }
}));

function App() {
  const classes = useStyles();

  const [searchResults, setSearchResults] = useState([]);

  const uri = "https://registry.npmjs.org/-/v1/search?";
  const size = "50";
  const popularity = "1";
  const maintainers = "0";

  const search = (searchTerm) => {
    fetch(
      uri +
        "size=" +
        size +
        "&popularity=" +
        popularity +
        "&maintainers=" +
        maintainers +
        "&text=" +
        searchTerm
    )
      .then(res => res.json())
      .then(
        result => {
          setSearchResults(result);
        },
        error => {
          console.log(error);
        }
      );
  }

  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.menuButton}>
            Npm Grading
          </Typography>
        </Toolbar>
      </AppBar>
      <Search 
        search={search}/>
      <Divider />
      <Results 
        results={searchResults}/>
    </Container>
  );
}

export default App;
