const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


const sendMessage = (from, to, title, message) => {
  const msg = {
    to: to,
    from: from,
    subject: title,
    text: message, //find a way to parse mesasges
    //html: '<p>Hello HTML world!</p>',
  };
  sgMail.send(msg).then(() => {
      // Celebrate
    })
    .catch(error => {
      // Log friendly error
      console.error(error);

      if (error.response) {
        // Extract error msg
        const {message, code, response} = error;

        // Extract response msg
        const {headers, body} = response;

        console.error(body);
      }
    });
}


// Express middleware
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Feel free to change port
const port = 8000;

mongoose.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

db = mongoose.connection;
db.once('open', () => console.log("Connected to database."));
db.on('error', console.error.bind(console, 'connection error:'));

const Entry = mongoose.model('Entry', {
  state: String,
  days: Number
});


app.post("/send", (req, res) => {
  sendMessage('danialk1@berkeley.edu', 'danialk1@berkeley.edu', 'A new message from Danial', req.body.message);
  console.log(req.body.message)
  /*
  const entry = new Entry(req.body)
  entry.save()
    .then(entry => res.send(`Saved ${entry} to database`)); */
});

app.listen(port, () => console.log(`App running on port ${port}`));
