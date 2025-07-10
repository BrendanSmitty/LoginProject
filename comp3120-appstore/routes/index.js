const express = require('express');
const router = express.Router();
const App = require('../models/apps');
const { getUser } = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', (req, res, next) => {
  const user = getUser(req);
  res.render('index', { title: 'Express', user: user });
});

router.get('/login', (req, res) => {
  res.render('login', {title: 'Login Page'});
})

module.exports = router;
