const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");

const photoController = require("./controllers/photoController");
const pageController = require("./controllers/pageController");

const app = express();

// connect DB
mongoose
	.connect(
		"mongodb+srv://pcat-project:FZ1WUOXIC9Vy4dxL@pcatcluster.opkudp3.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
	});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
	methodOverride("_method", {
		methods: ["POST", "GET"],
	})
);

// ROUTES
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.post("/photos", photoController.createPhoto);
app.put("/photos/:id", photoController.updatePhoto);
app.delete("/photos/:id", photoController.deletePhoto);

app.get("/about", pageController.getAboutPage);
app.get("/add-photo", pageController.getAddPhotoPage);
app.get("/photos/edit/:id", pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {});
