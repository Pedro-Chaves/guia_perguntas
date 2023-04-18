const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./db');
const questionModel = require('./models/Question');
const question = require('./routes/question');
const response = require('./routes/response');

db.authenticate()
.then(() => {
    console.log('DB connection success');
}).catch(err => {
    console.log(err);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/question', question);
app.use('/response', response);
app.get("/", (req, res) => {
    questionModel.findAll({ raw: true, order: [
        ['id', 'DESC']
    ]}).then(questions => {
        res.render("index", {
            questions: questions
        });
    })
})

app.listen(8080, () => {
    console.log('Aplication running');
})