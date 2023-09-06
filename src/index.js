const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

console.log(__dirname);

// built in middleware
const staticPath = path.join(__dirname, "../public");

// to set the view engine
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

// templete engine route
app.get("/", (req, res) => {
	res.render("index"); // yaha pr ye index.hbs ko render karega
});

app.get("/", (req, res) => {
	res.status(205).send("<h1>hello form the express server</h1>");
});

app.listen(port, () => {
	console.log(`listening form the port ${port}`);
});

// const path = require("path");
// const express = require("express");
// const app = express();

// // relative absolute  ==> by wrapper function
// // console.log(__dirname);

// const staticPath = path.join(__dirname, "../public");

// // Built in middleware
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
// 	res.send("Hello from the Home page");
// });

// app.get("/about", (req, res) => {
// 	res.send("Hello from the About page");
// });

// app.listen(8000, () => {
// 	console.log("listening to port 8000");
// });
