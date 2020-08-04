const db = require("./");
const GuestBook = db.guestbook;

//Create comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Please enter name!" });
        return;
    }

    const GuestBookModel = new GuestBook({
        name: req.body.name,
        comment: req.body.comment
    });

    GuestBook.save(GuestBookModel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
};

//Show comment
exports.findAll = (req, res) => {

};