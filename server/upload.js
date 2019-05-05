const IncomingForm = require("formidable").IncomingForm;
const fs = require("fs");

module.exports = function upload(req, res) {
    var form = new IncomingForm();

    form.on("file", (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        var oldPath = file.path;
        //TODO @Soroush change this string
        var newPath = "/Users/parsahejabi/University/TA/SBU_Quiz_App/server/uploaded_files/" + file.name;
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
        });
    });
    form.on("end", () => {
        res.json();
    });
    form.parse(req);
};