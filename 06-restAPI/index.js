const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

// Middleware

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
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

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body ", body);
  return res.json({ status: "Panding" });
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
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //TODO : Edit the user with id
    return res.json({ status: "Panding" });
  })
  .delete((req, res) => {
    // TODO : Delete the user with id
    return res.json({ status: "Panding" });
  });

app.listen(8000, (err, data) => {
  console.log("Server Started!");
});
