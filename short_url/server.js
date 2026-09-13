const express = require("express");
const urlRoutes = require("./routes/url");
const { connectMongoDb } = require("./connections");
const URL = require("./models/url");
const app = express();
const port = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/short_url");
app.use(express.json());
app.use("/url", urlRoutes);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitHistory: { timestamp: Date.now() } } },
  );
  res.redirect(entry.redirectURL);
});

app.listen(port, () => {
  console.log(`Server Started at PORT: ${port}`);
});
