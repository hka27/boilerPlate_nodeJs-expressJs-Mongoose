const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//create new posts
router.post("/", async (req, res) => {
  //we are having the information of request of the body here.
  //console.log(req.body);

  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specefic posts
router.get("/:postId", async (req, res) => {
  try {
    const speceficPost = await Post.findById(req.params.postId);
    res.json(speceficPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a specefic post
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch("/:postId", async (req, res) => {
  try {
    const modifyPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(modifyPost);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
