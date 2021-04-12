const patients = require('../../app/controllers/patients.server.controller');
const healthInfo = require('../../app/controllers/healthinfo.server.controller');
//
module.exports = function (app) {
        app.route('/api/add-healthInfo')
               .post(patients.requiresLogin, healthInfo.create);
}