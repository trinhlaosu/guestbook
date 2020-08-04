const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/guestbook");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connect DB success");
    })
    .catch(err => {
        console.log("Connect DB fail", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});
require("./app/guestbook/guestbook.routes")(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log('Build success');
});