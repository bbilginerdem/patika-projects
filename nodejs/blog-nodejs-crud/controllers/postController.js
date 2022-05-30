const Post = require("../models/Post");

exports.deletePost = async (req, res) => {
	await Post.findByIdAndRemove(req.params.id);
	res.redirect("/");
};

exports.updatePost = async (req, res) => {
	const post = await Post.findOne({ _id: req.params.id });
	post.name = req.body.name;
	post.message = req.body.message;
	post.save();

	res.redirect(`/posts/${req.params.id}`);
};

exports.createPost = async (req, res) => {
	await Post.create(req.body);
	res.redirect("/");
};
