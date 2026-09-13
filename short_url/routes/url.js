const express = require("express");
const {
  handleGenerateNewURL,
  handleGetanalytics,
} = require("../controllers/url");

const router = express.Router();
router.post("/", handleGenerateNewURL);
router.get("/analytics/:shortId", handleGetanalytics);

module.exports = router;
