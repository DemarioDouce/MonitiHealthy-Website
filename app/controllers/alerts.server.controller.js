const Alert = require("mongoose").model("Alert");
const Patient = require("mongoose").model("Patient");
const { ObjectId } = require("mongodb");

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//

exports.create = function (req, res) {
    const alert = new Alert();
    alert.message = req.body.message;
    alert.date = Date.now();
    //var patient = req.patientUsername
    console.log(req.body)
    //
    //
    console.log(req.patientUserName)
    Patient.findOne({userName: req.patientUserName}, (err, patient) => {

        if (err) { return getErrorMessage(err); }
        //
        req.id = patient._id;
        //console.log('patient._id',req.id);
        console.log(patient)

	
    }).then( function () 
    {
        alert.patient = req.id
        alert.save((err) => {
            if (err) {
                console.log('error', getErrorMessage(err))

                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(Alert);
            }
        });
    
    });
};
exports.alertByID = function (req, res, next, id) {
    Alert.findById(id).populate('creator', 'firstName lastName fullName').exec((err, alert) => {if (err) return next(err);
    if (!alert) return next(new Error('Failed to load alert '
            + id));
        req.alert = alert;
        console.log('in alertById:', req.alert)
        next();
    });
};
//
exports.read = function (req, res) {
    res.status(200).json(req.alert);
};
//
exports.alertsbyPatient = async (req, res) => {

    //let courseCode = req.body.auth.courseCode
    //console.log(courseCode);
    let alerts = await Alert.find({patient:ObjectId(req.id)});
    console.log(alerts);
    res.status(200).json(alerts)
    //try{
    //    var studArray = []
    //    //student.forEach(element => {
    //    //    studArray.push(element)
    //    //});
    //    for(let i = 0; i < student.length; i++){
    //        studArray.push(student[i].student)
    //    }
    //    res.status(200).json(studArray)
    //    
    //}
    //catch(e){
    //    
    //}
};

