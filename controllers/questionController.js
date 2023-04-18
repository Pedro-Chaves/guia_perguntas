const questionModel = require('../models/Question');
const responseModel = require('../models/Response');

exports.create = function (req, res) {
    res.render("create_question");
}

exports.details = function (req, res){
    let id = req.params.id;

    questionModel.findOne({
        where: {
            id
        }
    }).then(question => {
        if(question) {
            responseModel.findAll({
                where: {
                    questionId: question.id
                },
                order: [
                    ['id', 'DESC']
                ]
            }).then(responses => {
                res.render("question", {
                    question,
                    responses
                });
            })
        }
        else res.redirect("/");
    });
}

exports.insert = function (req, res) {
    let title = req.body.title;
    let desc = req.body.desc;
    
    questionModel.create({
        title,
        desc
    }).then(() => {
        res.redirect('/');
    });
}