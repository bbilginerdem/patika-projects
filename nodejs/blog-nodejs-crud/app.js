const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Post = require("./models/Post");
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

const app = express();

// Connect to DB
mongoose.connect("mongodb://localhost/blog-post-db");

// Template Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

// Routes
app.get("/", pageController.getAllPosts);
app.get("/posts/:id", pageController.getPost);
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPostPage);
app.get("/posts/edit/:id", pageController.updatePost);

// Crud Operations
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

const port = 3001;
app.listen(port, () => {});
