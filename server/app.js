const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

const msg = {
  to: 'ulfzswtfckbmveuida@ttirv.org',
  from: 'eecseecs@berkeley.edu',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
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

app.get("/entries", (req, res) => {
  Entry.find()
    .then(entries => res.send(entries))
});

app.post("/save", (req, res) => {
  const entry = new Entry(req.body)
  entry.save()
    .then(entry => res.send(`Saved ${entry} to database`));
});

app.listen(port, () => console.log(`App running on port ${port}`));
