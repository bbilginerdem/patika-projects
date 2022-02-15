import axios from "axios";

function getData(id) {
	const getUsers = () => {
		return new Promise(async (resolve, reject) => {
			const { data } = await axios(
				"https://jsonplaceholder.typicode.com/users/" + id
			);

			resolve(data);
		});
	};

	const getPost = () => {
		return new Promise(async (resolve, reject) => {
			const { data } = await axios(
				"https://jsonplaceholder.typicode.com/posts?userId=" + id
			);

			resolve(data);
		});
	};

	Promise.all([getUsers(id), getPost(id)])
		.then(console.log)
		.catch(console.log);
}

export { getData };
