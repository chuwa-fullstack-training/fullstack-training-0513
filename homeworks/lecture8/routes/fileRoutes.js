const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:dir/:ext", (req, res) => {
  const { dir, ext } = req.params;
  const baseDir = path.join(__dirname + "/..", dir);

  fs.readdir(baseDir, (err, files) => {
    if (err) {
      res.status(400);
      throw new Error("No such file or directory.");
    } else {
      const filteredFiles = files.filter((file) => path.extname(file) === ext);
      res.json(filteredFiles);
    }
  });
});

module.exports = router;
