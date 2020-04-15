module.exports = function(app) {
    const tests = require('../controller/test.controller.js');
    app.post('/api/test', tests.create);
    app.get('/api/tests', tests.findAll);
    app.get('/api/test/:testId', tests.testId);
    app.get('/api/tests/filetitle/:filetitle', tests.findTitle);
    app.get('/api/tests/filetype/:filetype', tests.findType);
    app.get('/api/tests/location/:location', tests.findLoca);
    app.get('/api/tests/uploader/:uploader', tests.findLoader);
    app.get('/api/tests/remark/:remark', tests.findRemark);

    app.put('/api/test/:testId', tests.update);

    app.delete('/api/test/:testId', tests.delete);
}