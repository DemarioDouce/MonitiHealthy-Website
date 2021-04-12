const patients = require('../../app/controllers/patients.server.controller');
const alert = require('../../app/controllers/alerts.server.controller');
//
module.exports = function (app) {
        app.route('/api/send-alert')
               .post(patients.requiresLogin, alert.create);
        app.get('/api/alerts',patients.requiresLogin, alert.alertsbyPatient);
}