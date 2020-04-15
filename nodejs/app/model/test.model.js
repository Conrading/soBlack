module.exports = (sequelize, Sequelize) => {
    const Testdb = sequelize.define('test', {
        filetitle: {
            type: Sequelize.STRING
        },
        filetype: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        uploader: {
            type: Sequelize.STRING
        },
        remark: {
            type: Sequelize.STRING
        }
    });

    return Testdb;
}