const express = require("express");
const URL = require("../models/url");

const router = express();

router.get("/", async (req, res) => {
  const allurls = await URL.find();
  res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});
router.get("/login", async (req, res) => {
  res.render("login");
});
module.exports = router;
