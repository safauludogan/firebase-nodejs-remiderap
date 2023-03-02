const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
//const fireStore = require("./config/firestore_config");
//const admin = require('./config/config');
const app = express();
//app.use(express.json());
//app.use(cors());

// Routes
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", noteRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log("Up & Running *4000"));
/*

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