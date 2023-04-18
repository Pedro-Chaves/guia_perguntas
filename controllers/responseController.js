const questionModel = require('../models/Question');
const responseModel = require('../models/Response');

exports.respond = function (req, res) {
    let body = req.body.body;
    let questionId = req.body.questionId;

    responseModel.create({
        body,
        questionId
    }).then(() => {
        res.redirect(`/question/${questionId}`);
    });
}