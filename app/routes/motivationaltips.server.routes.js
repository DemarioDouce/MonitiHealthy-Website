const patients = require('../../app/controllers/patients.server.controller');
const tips = require('../../app/controllers/motivationaltips.server.controller');
//
module.exports = function (app) {
        app.route('/api/send-tips')
               .post(patients.requiresLogin, tips.create);
}