function getPostById(id) {
	return posts.find((post) => post.id === id);
}
function displayPost() {
	const params = new URLSearchParams(window.location.search);
	const id = Number(params.get("id"));
	const post = getPostById(id);
	if (!post) {
		document.body.innerHTML = "<h2>This blog is unavalible</h2>";
		return;
	}
	const div = document.createElement("div");
	div.className = "detailed-post";
	div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.content}</p>
        <a href="index.html">Back to home</a>
    `;
	document.body.appendChild(div);
}

window.onload = displayPost;
