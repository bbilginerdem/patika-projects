// setTimeout(() => {
// 	console.log("merhaba");
// }, 2000);

// setInterval(() => {
// 	console.log('xd repeat')
// }, 1000)

// const sayHi = (cb) => {
// 	cb();
// };

// sayHi(() => {
// 	console.log("hello");
// });

// import fetch from "node-fetch";

// fetch("http://fakeapi.jsonparseronline.com/users")
// 	.then((data) => data.json())
// 	.then((users) => {
// 		console.log("users yukenlendi ", users)
// 		fetch("http://fakeapi.jsonparseronline.com/posts")
// 			.then((data) => data.json())
// 			.then(posts => console.log(posts));
// 	});

const getComments = (number) => {
	return new Promise((resolve, reject) => {
		if (number === 1) {
			resolve("sda");
		}

		reject("PROBLEM");
	});
};

getComments(2)
	.then((data) => console.log(data))
	.catch((e) => console.log(e));
