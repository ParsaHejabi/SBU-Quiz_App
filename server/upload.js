const formidable = require("formidable");
const fs = require("fs");

const uploadedFilesDir = `${__dirname}/uploaded_files/`;

if (!fs.existsSync(uploadedFilesDir)) {
  fs.mkdirSync(uploadedFilesDir);
}

module.exports = (req, res) => {
  const form = formidable({ uploadDir: uploadedFilesDir });

  form.on("file", (filename, file) => {
    fs.rename(file.path, uploadedFilesDir + "/" + file.name, (err) => {
      if (err) console.log(err);
    });
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
