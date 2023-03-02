const firebase = require("../config/config");
const ErrorHandling = require('../utils/error_handling');
exports.signup = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required",
        });
    }
    await firebase.auth().createUserWithEmailAndPassword(
        req.body.email,
        req.body.password,
        false,
        false

    ).then(function (userRecord) {
        res.status(200).json({ message: "Kayıt başarılı" });

        if (userRecord && userRecord.user.emailVerified === false) {
            userRecord.user.sendEmailVerification().then(function () {
                console.log("email verification sent to user");
            });
        }
    }).catch(function (error) {
        new ErrorHandling().getResponse(error, res);
    });
};

exports.signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required",
        });
    }
    await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(function (data) {
            console.log("Successfully signin:" + data);
            res.status(200).json({
                message: "Giriş başarılı",
                data: data
            });
        }).catch(function (error) {
            new ErrorHandling().getResponse(error, res);
        });
};

exports.forgetPassword = (req, res) => {
    if (!req.body.email) {
        return res.status(422).json({ email: "email is required" });
    }
    firebase.auth().sendPasswordResetEmail(req.body.email)
        .then(function (data) {
            res.status(200).json({
                message: "Şifre sıfırlama linki mail adresinize gönderildi",
                data: data
            });
        }).catch(function (error) {
            new ErrorHandling().getResponse(error, res);
        });

};

