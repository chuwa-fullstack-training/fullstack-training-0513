const express = require("express");
const router = express.Router();

router.get("/parsetime", (req, res) => {
  const { iso } = req.query;
  const date = new Date(iso);
  
  if (isNaN(date)) {
    res.status(400);
    throw new Error("Invalid ISO format");
  } else {
    res.status(200).json({
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    });
  }
});

router.get("/unixtime", (req, res) => {
  const { iso } = req.query;
  const date = new Date(iso);

  if (isNaN(date)) {
    res.status(400);
    throw new Error("Invalid ISO format");
  } else {
    res.status(200).json({
      unixtime: date.getTime(),
    });
  }
});

module.exports = router;