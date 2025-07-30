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
	<div class="max-w-5xl mx-auto m-4 p-4 bg-white rounded shadow">
		<h1 class="text-xl font-semibold text-center mb-4">${post.title}</h1>
			<p class="break-words whitespace-pre-line max-h-[500px] overflow-auto">${post.content}</p>
		<div class="text-center mt-6">
			<a href="index.html" class="text-blue-500 hover:underline">Back to home</a>
		</div>
	</div>
	`;
	document.body.appendChild(div);
}

window.onload = displayPost;
