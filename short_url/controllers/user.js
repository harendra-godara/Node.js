const {v4: uuidv4} = require('uuid');
const {setUser, getUser} = require('../service/auth')
const User = require("../models/user");
async function handleUserSigup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const {email , password} = req.body;
  const user = await User.findOne({email , password}) 
   console.log("User",user);
  if(!user) return res.render('login', {
    error: 'Invalid Username or Password',
  })

const sessionId = uuidv4();

console.log("Session ID:", sessionId);

setUser(sessionId, user);

res.cookie("uid", sessionId);

  return res.redirect("/");
}

module.exports = { handleUserSigup, handleUserLogin};
