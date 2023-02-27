const express = require("express");
const cors = require("cors");
const User = require("./config");
const UserModel = require("./user_model.js");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

app.post("/create", async (req, res) => {
    const data = req.body;
    const userModel = new UserModel({ name: data['name'], age: data['age'], collage: data['collage'] });
    //const userModel = new UserModel(data.name, data.age, data.collage);
    await User.add(userModel);

    //console.log(userModel.name);

    res.send({ msg: "User Added" });

});

app.post("/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({ msg: "Deleted" });
});
app.listen(4000, () => console.log("Up & RUnning *4000"));