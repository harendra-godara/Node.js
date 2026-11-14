const express = require("express");
const { connectMongoDb } = require("./connections");
const URL = require("./models/url");
const path = require("path");

const urlRoutes = require("./routes/url");
const route = require("./routes/staticRouther");
const userRoute = require("./routes/user");

const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectMongoDb("mongodb://127.0.0.1:27017/user");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoutes);
app.use("/user", userRoute);
app.use("/", route);

app.get("/test", async (req, res) => {
  const allUrl = await URL.find({});

  return res.render("home", {
    urls: allUrl,
    id: shortId,
  });
});
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(entry.redirectURL);
});

app.listen(port, () => {
  console.log(`Server Started at PORT: ${port}`);
});
