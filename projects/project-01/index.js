const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//Routes

app.get("/users/", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

app.get("/api/users/", (req, res) => {
  return res.json(users);
});


//===============================================================

//                             Replace 

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }

//   return res.json(user);
// });

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Edit the user with id
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // TODO: Delete the user with id
//   return res.json({ status: "pending" });
// });

//==================================================================

//                             To This 

app
  .route("api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(user);
  })
  .put(() => {})
  .patch((req, res) => {
    // TODO: Create New user
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TODO: Delete the user with id
    return res.json({ status: "pending" });
  });
//================================================================

app.post("/api/users", (req, res) => {
  // TODO: Create New user
  return res.json({ status: "pending" });
});



app.listen(PORT, () => console.log(`Sever Started at PORT ${PORT}`));
