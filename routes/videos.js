const express = require("express");
const fs = require("fs");
const router = express.Router();

/* GET home page. */
router.get("/videos", async (req, res) => {
  const videos = await fs.readFileSync("./data/videos.json");
  // console.log(videos);
  res.status(200).send(JSON.parse(videos));
});

module.exports = router;
