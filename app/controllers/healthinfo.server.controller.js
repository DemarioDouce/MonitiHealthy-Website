const HealthInfo = require("mongoose").model("HealthInfo");
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
    const healthInfo = new HealthInfo();
    healthInfo.pulseRate = req.body.pulseRate;
    healthInfo.bloodPressure = req.body.bloodPressure;
    healthInfo.weight = req.body.weight;
    healthInfo.temperature = req.body.temperature;
    healthInfo.respiratoryRate = req.body.respiratoryRate;
    healthInfo.respiratoryRate = req.body.respiratoryRate;

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
        healthInfo.patient = patient
        console.log('req.patient._id',req.id);

        healthInfo.save((err) => {
            if (err) {
                console.log('error', getErrorMessage(err))

                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(healthInfo);
            }
        });
    
    });
};


  
