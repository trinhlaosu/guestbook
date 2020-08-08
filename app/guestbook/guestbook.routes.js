module.exports = app => {
    const guestbooks = require("./guestbook.controller.js");

    var router = require("express").Router();

    router.post("/", guestbooks.create);

    router.get("/", guestbooks.findAll);

    app.use('/api/guestbooks', router);
};