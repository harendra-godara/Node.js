const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const mongoose = require("mongoose");

// Connection

mongoose
  .connect("mongodb://127.0.0.1:27017/dataBase-1")
  .then(() => console.log("MongoDb Connected!"))
  .catch((err) => console.log(err));

// schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true },
);

// Model

const User = mongoose.model("user", userSchema);

// Middleware

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
      ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email} - ${user.gender} </li>`).join("")}
    </ul>
  `;
  res.send(html);
});

/*
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
*/

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log("result", result);

  return res.status(201).json({ msg: "Success" });
});

/**

app.patch("/api/users/:id", (req, res) => {
  //TODO : Edit the user with id
  return res.json({ status: "Panding" });
});

app.delete("/api/users/:id", (req, res) => {
  // TODO : Delete the user with id
  return res.json({ status: "Panding" });
});

*/

// Marge the same rout ==>

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Godara" });
    return res.json({ status: "Success " });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

app.listen(8000, (err, data) => {
  console.log("Server Started! at port 8000");
});
