const Tips = require("mongoose").model("patientTips");
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
    const tips = new Tips();
    tips.message = req.body.message;
    //tips.date = Date.now();
    var patientUserName = req.patientUserName
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
        tips.patient = req.id
        tips.save((err) => {
            if (err) {
                console.log('error', getErrorMessage(err))

                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(Tips);
            }
        });
    
    });
};

exports.list = function (req, res) {
    Patient.find().sort('-patientName').populate('patient', 'firstName lastName fullName').exec((err, patients) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(patients);
    }
});
};
// exports.tipsByID = function (req, res, next, id) {
//     Tips.findById(id).populate('creator', 'firstName lastName fullName').exec((err, tips) => {if (err) return next(err);
//     if (!tips) return next(new Error('Failed to load tips '
//             + id));
//         req.tips = tips;
//         console.log('in tipById:', req.tips)
//         next();
//     });
// };
//

exports.read = function (req, res) {
    res.status(200).json(req.tips);
};
//
exports.tipsCourses = function (req, res) {
    const tips = req.tips;
    console.log('here'+req.id)
    var tipsID = req.id
    Patient.find({tips:ObjectId(tipsID)}, (err, patients) => {
        if (err) {
            // Call the next middleware with an error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            //console.log(comments);
            // Use the 'response' object to send a JSON response
            res.status(200).json(patients);
        }
	});
};

