const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
	const posts = await Post.find({});
	res.render("index", {
		posts,
	});
};

exports.getPost = async (req, res) => {
	const post = await Post.findById(req.params.id);
	res.render("post", {
		post,
	});
};

exports.updatePost = async (req, res) => {
	const post = await Post.findOne({ _id: req.params.id });
	res.render("edit_post", {
		post,
	});
};

exports.getAddPostPage = (req, res) => {
	res.render("add_post");
};

exports.getAboutPage = (req, res) => {
	res.render("about");
};
