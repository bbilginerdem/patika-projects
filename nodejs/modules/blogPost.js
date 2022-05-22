const posts = [
	{
		id: 1,
		title: "Paradine Case, The",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Fire Protection",
		country: "Colombia",
	},
	{
		id: 2,
		title: "Puppet Master vs. Demonic Toys (Puppet Master 9)",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "HVAC",
		country: "Brazil",
	},
	{
		id: 3,
		title: "Surf Nazis Must Die",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Site Furnishings",
		country: "Sweden",
	},
	{
		id: 4,
		title: "Anonymous",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Retaining Wall and Brick Pavers",
		country: "China",
	},
	{
		id: 5,
		title: "Odd Couple (Bo ming chan dao duo ming qiang) (Eternal Conflict)",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Drywall & Acoustical (FED)",
		country: "Argentina",
	},
	{
		id: 6,
		title: "Paris Was a Woman",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Curb & Gutter",
		country: "Argentina",
	},
	{
		id: 7,
		title: "While the City Sleeps",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Epoxy Flooring",
		country: "Poland",
	},
	{
		id: 8,
		title: "Disclosure",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Site Furnishings",
		country: "Poland",
	},
	{
		id: 9,
		title: "Liar's Dice",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Electrical and Fire Alarm",
		country: "Indonesia",
	},
	{
		id: 10,
		title: "Trials of Darryl Hunt, The",
		body: "error: undefined method `parameters_for' for nil:NilClass",
		category: "Construction Clean and Final Clean",
		country: "Turkmenistan",
	},
];

const newPost = {
	id: posts.length + 1,
	title: "",
	body: "",
	category: "",
	country: "",
};

let badPost;

const addPost = (post) => {
	return new Promise((resolve, reject) => {
		console.log("Post added to the blog!");

		if (post) {
			posts.push(post);
			resolve("Post added successfully!");
		} else {
			reject("Post couldn't be added!");
		}
	});
};

const showPosts = (posts) => {
	return new Promise((resolve, reject) => {
		console.log("Loading posts...");

		if (posts) {
			posts.map((post) => console.log(post));
			resolve("Showed successfully !");
		} else reject("Cannot be found!");
	});
};

const process = async () => {
	try {
		const processShowPosts = await showPosts(posts);
		console.log(processShowPosts);

		const processAddPost = await addPost(newPost);
		console.log(processAddPost);
	} catch (error) {
		console.error(error);
	}
};

process();
