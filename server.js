const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const posts = [
	{ title: "My First Blog", content: "Hello DevOps!" },
	{ title: "Deploying with Docker", content: "Containerization is cool!" },
];

app.get("/api/posts", (req, res) => {
	res.json(posts);
});

app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}`)
);
