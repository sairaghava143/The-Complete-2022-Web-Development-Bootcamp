const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

app.set("view engine", "ejs");
app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundArticles);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    });
  });

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (err) {
          console.log(err);
        } else {
          res.send(foundArticle);
        }
      }
    );
  })
  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("Success");
        }
      }
    );
  })
  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("Success");
        }
      }
    );
  });
app.listen(3000, function () {
  console.log("listening on port 3000");
});
