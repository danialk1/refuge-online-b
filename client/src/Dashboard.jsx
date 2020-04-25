import React, { useState, useEffect } from "react";
import Visualization from "./Visualization";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AppBar,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Toolbar,
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  MenuItem,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";
import axios from "axios";
import states from "./us_states";

const styles = {
  card: {
    maxWidth: 500,
    margin: "50px auto",
  },
  divider: {
    margin: "10px 0",
  },
  cardActions: {
    justifyContent: "center",
  },
};

function InputCard(props) {
  const { classes } = props;
  const [entry, setEntry] = useState({ state: "", days: 0 });
  const [pastEntries, setPastEntries] = useState([]);
  const [state, setState] = useState("");
  const [days, setDays] = useState("");

  useEffect(() => {
    axios
      .get("/entries")
      .then((res) => {
        setPastEntries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [entry]);

  const addEntry = () => {
    const entry = {
      state: state,
      days: days,
    };
    setEntry(entry);
    axios.post("/save", entry);
  };

  const displayEntry = () => {
    return <Visualization state={entry.state} days={entry.days} />;
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Visualizations</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Card className={classes.card}>
          <CardHeader title="Your favorite fake news website!" />
          <CardContent>
            <TextField
            id="standard-basic"
            label="Search for news here"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            >
            </TextField>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={addEntry} color="primary">
              Search
            </Button>
          </CardActions>
        </Card>
        <div>{displayEntry()}</div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Past Visualizations
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Container>
    </div>
  );
}

export default withStyles(styles)(InputCard);
