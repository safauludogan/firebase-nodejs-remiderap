const firebase = require("../config/config");

exports.signup = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required",
        });
    }
    //await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
    const userResponse = await firebase.auth().createUserWithEmailAndPassword(
        req.body.email,
        req.body.password,
        false,
        false

    ).then(function (userRecord) {
        // A UserRecord representation of the newly created user is returned
        console.log("Successfully created new user:", userRecord.uid);
        res.status(200).json({ message: "Kayıt başarılı" });
    }).catch(function (error) {
        console.log("Error creating new user:", {
            "error": error.errorInfo,
            "statusCode": error.statusCode
        },
            res.status(500).json(error.errorInfo));
    });
    res.json(userResponse);

};