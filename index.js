const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
//const fireStore = require("./config/firestore_config");
//const admin = require('./config/config');
//const UserModel = require("./user_model.js");
const app = express();
//app.use(express.json());
//app.use(cors());

// Routes
const authRoutes = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log("Up & Running *4000"));

/*
app.post('/signup', async (req, res) => {

    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerifield: false,
        disabled: false
    }).then(function (userRecord) {
        // A UserRecord representation of the newly created user is returned
        console.log("Successfully created new user:", userRecord.uid);
    }).catch(function (error) {
        console.log("Error creating new user:", {
            "error": error.errorInfo,
            "statusCode": error.statusCode
        },
            res.status(500).json(error.errorInfo));
    });
    res.json(userResponse);
});

app.post('/signin', async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    const response = await admin.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(function (result) {
            console.log("Successfully created new user:", result.uid);
        }).catch(function (error) {
            console.log("Error signin:", {
                "error": error.errorInfo,
                "statusCode": error.statusCode
            },
                res.status(500).json(error.errorInfo));
        }); res.json(response);
});

app.get("/", async (req, res) => {
    const snapshot = await fireStore.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

app.post("/create", async (req, res) => {
    const data = req.body;
    const userModel = new UserModel(data.name, data.age, data.collage);

    console.log(userModel.toJSON());
    const result = await fireStore.add(userModel.toJSON());


    res.status(200).send({ msg: "User Added" });

});

app.post("/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await fireStore.doc(id).update(data);
    res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
    const id = req.body.id;
    await fireStore.doc(id).delete();
    res.send({ msg: "Deleted" });
});*/