const db = require("./");
const GuestBook = require("./guestbook.model.js")(db.mongoose);

//Create comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Please enter the name!" });
        return;
    } else if (typeof(req.body.name) !== "string") {
        res.status(400).send({ message: "Please enter the name with string type!" });
        return;
    } else if (typeof(req.body.comment) !== "string") {
        res.status(400).send({ message: "Please enter the comment with string type!" });
        return;
    }

    const guestbook = new GuestBook({
        name: req.body.name,
        comment: req.body.comment
    });

    guestbook.save(guestbook)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving this guestbook"
            });
        });
};

//Show comment
exports.findAll = (req, res) => {
    GuestBook.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while finding list guestbooks"
            });
        });
};