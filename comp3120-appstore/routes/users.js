const express = require('express');
const router = express.Router();
const User = require("../models/users");
const { createSession } = require("../models/users");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }

    createSession(req, user.username); 
    res.cookie("SESSION", req.session.sessionid, { httpOnly: true }); 

    res.redirect("/"); 

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/logout', (request, response) => {
  const user = getUser(request);
  if (user) {
    logout(user.username)
  }
  response.redirect('/');
})

module.exports = router;
