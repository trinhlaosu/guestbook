module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        comment: Boolean
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Guestbook = mongoose.model("guestbook", schema);
    return Guestbook;
};