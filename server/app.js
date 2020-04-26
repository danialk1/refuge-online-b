const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const Schema = mongoose.Schema;
const ConvoSchema = new Schema({
  helper: String,
  helpee: String,
  ListoConvos: [{
    from: String,
    to: String,
    contents: String
  }]
})
const MessageSchema = new Schema({
  contents: String,
  from: String
})

const Conversation = mongoose.model('Conversation', ConvoSchema);
const Message = mongoose.model('message', MessageSchema);
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
const saveMessage = (helperBool, message) => {
  Conversation.find({}).exec((err, convos) => {
    if (err) {
      return console.log(err)
    }
    const _from = helperBool?"helper":'helpee';
    const _to = (!helperBool)?"helper":'helpee';
    if (convos.length === 0) {
      convo = new Conversation({
        helper: helperBool,
        ListoConvos: [{
          from: _from,
          to: _to,
          contents: message
        }]
      })
    } else {
      messageObj = {
        from: _from,
        to: _to,
        contents: message
      };
      convos[0].ListoConvos.push(messageObj);
      convos[0].save()
      .then(item => console.log(item)).catch(err => "AN ERROR IS HERE")
      console.log(convos[0].ListoConvos);
      //save?
    }
  })
}


// Express middleware
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Feel free to change port
const port = 8000;

mongoose.connect('mongodb://localhost:27017/example', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
mess = new Message({
  contents: "THis is a message",
  from: "Someone"
})
//mess.save()
//.then(item => console.log(item)).catch(err => "AN ERROR IS HERE")
db = mongoose.connection;
db.once('open', () => console.log("Connected to database."));
db.on('error', console.error.bind(console, 'connection error:'));


//app.post("/")

app.post("/send", (req, res) => {
  //sendMessage('danialk1@berkeley.edu', 'danialk1@berkeley.edu', 'A new message from Danial', req.body.message);
  console.log(req.body.message);
  saveMessage(false, req.body.message);
  /*
  const entry = new Entry(req.body)
  entry.save()
    .then(entry => res.send(`Saved ${entry} to database`)); */
});
app.get("/messages", (req, res) => {
  Conversation.find({}).exec((err, convos) => {
    if (err) {
      return console.log(err);
    }
    arrOfMessages = convos[0].ListoConvos
    arrOfMessages.reverse();
    logs = "";
    arrOfMessages.forEach((item) => {
      logs += "from:" + item.from;
      logs += "<br>" + item.contents;
      logs += "<br><br>"
    });
    res.send(logs);
  })
})

app.listen(port, () => console.log(`App running on port ${port}`));
