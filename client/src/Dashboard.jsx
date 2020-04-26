import React, { useState, useEffect } from "react";
import Visualization from "./Visualization";
import Textbox from "./Textbox";
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
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    axios
      .post("/send", {
        isHelper: false,
        message: message
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const displayVisualization = () => {
    return <Visualization/>; //keywords = {keywords}, if we ever get there
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">The American Advocate</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Card className={classes.card}>
          <CardHeader title="Your go to news website for everything." />
          <CardContent>
            <TextField
            id="standard-basic"
            label="Search for news here"
            onChange={(e) => setMessage(e.target.value)}
            >
            </TextField>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={sendMessage} color="primary">
              Search
            </Button>
          </CardActions>
        </Card>
        <Visualization/>
        <Textbox/>
      </Container>
    </div>
  );
}

export default withStyles(styles)(InputCard);
