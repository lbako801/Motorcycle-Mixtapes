const router = require("express").Router();
const { User, Post, Comment } = require("../models");
// const withAuth = require('../utils/auth');

router.get(
  "/",
  async (req, res) => {


    res.render("home", {

    });
  }
);

router.get("/register", (req, res) => {

  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});


module.exports = router;
