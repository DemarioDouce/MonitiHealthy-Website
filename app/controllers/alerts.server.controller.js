const Alert = require("mongoose").mongoose.model("Alert");
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
    alert.date = req.body.date;
    var patient = req.patientUsername
    console.log(req.body)
    //
    //
    Patient.findOne({username: patientUsername}, (err, patient) => {

        if (err) { return getErrorMessage(err); }
        //
        req.id = patient._id;
        console.log('patient._id',req.id);

	
    }).then( function () 
    {
        course.patient = req.id
        console.log('req.patient._id',req.id);

        course.save((err) => {
            if (err) {
                console.log('error', getErrorMessage(err))

                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(course);
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

