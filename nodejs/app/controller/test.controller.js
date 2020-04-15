const db = require('../config/db.config.js');
const Test = db.tests;

exports.create = (req, res) => {
    Test.create({
        filetitle: req.body.filetitle,
        filetype: req.body.filetype,
        location: req.body.location,
        uploader: req.body.uploader,
        remark: req.body.remark
    }).then(test => {
        res.send(test);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.findAll = (req, res) => {
    Test.findAll().then(tests => {
        res.send(tests);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.findId = (req, res) => {
    Test.findId(req.params.testId).then(test => {
        res,send(test);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.findTitle = (req, res) => {
    Test.findAll({
        where: {
           filetitle: req.params.filetitle
        }
    }).then(
        tests => {
            res.send(tests)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

exports.findType = (req, res) => {
    Test.findAll({
        where: {
            filetype: req.params.filetype
        }
    }).then(
        tests => {
            res.send(tests)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

exports.findLoca = (req, res) => {
    Test.findAll({
        where: {
            location: req.params.location
        }
    }).then(
        tests => {
            res.send(tests)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

exports.findLoader = (req, res) => {
    Test.findAll({
        where: {
            uploader: req.params.uploader
        }
    }).then(
        tests => {
            res.send(tests)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

exports.findRemark = (req, res) => {
    Test.findAll({
        where: {
            remark: req.params.remark
        }
    }).then(
        tests => {
            res.send(tests)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

exports.update = (req, res) => {
    var test = req.body;
    const id = req.params.testId;
    Test.update( {
        filetitle: req.body.filetitle,
        filetype: req.body.filetype,
        location: req.body.location,
        uploader: req.body.uploader,
        remark: req.body.remark
    }, { where: { id: req.params.test }
    }).then(() => {
        res.status(200).send(test);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.delete = (req, res) => {
    const id = req.params.testId;
    Test.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send("It has been deleted");
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}

