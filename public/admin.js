let posts = JSON.parse(localStorage.getItem("posts")) || [];

const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const excerptInput = document.getElementById("excerpt");
const contentInput = document.getElementById("content");
const postIdInput = document.getElementById("postId");
const postList = document.getElementById("postList");

function savePosts() {
	localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts(postArray = posts) {
	postList.innerHTML = "";
	if (postArray.length === 0) {
		const li = document.createElement("li");
		li.className = "text-gray-500 italic p-4";
		li.textContent = "No posts found.";
		postList.appendChild(li);
		return;
	}
	postArray.forEach((post, index) => {
		const li = document.createElement("li");
		li.className = "border p-4 rounded bg-gray-50";
		li.innerHTML = `
      <h3 class="font-bold text-lg">${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="mt-2 space-x-2">
        <button onclick="editPost(${index})" class="text-blue-600">Edit</button>
        <button onclick="deletePost(${index})" class="text-red-600">Delete</button>
      </div>
    `;
		postList.appendChild(li);
	});
}

function editPost(index) {
	const post = posts[index];
	titleInput.value = post.title;
	excerptInput.value = post.excerpt;
	contentInput.value = post.content;
	postIdInput.value = post.id;
}

function deletePost(index) {
	if (confirm("Are you sure you want to delete this post?")) {
		posts.splice(index, 1);
		savePosts();
		renderPosts();
	}
}

postForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = titleInput.value;
	const excerpt = excerptInput.value;
	const content = contentInput.value;
	const id = postIdInput.value;

	if (id === "") {
		posts.push({
			id: Date.now(),
			title,
			excerpt,
			content,
		});
	} else {
		const index = posts.findIndex((p) => p.id == id);
		if (index !== -1) {
			posts[index] = {
				id: Number(id),
				title,
				excerpt,
				content,
			};
		}
	}

	savePosts();
	renderPosts();
	postForm.reset();
	postIdInput.value = "";
});

renderPosts();

document.getElementById("searchInput").addEventListener("input", function (e) {
	const keyword = e.target.value.toLowerCase();
	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(keyword) ||
			post.excerpt.toLowerCase().includes(keyword)
	);

	renderPosts(filteredPosts);
});

function startNewPost() {
	postForm.reset();
	postIdInput.value = "";
	titleInput.focus();
}
document.getElementById("addButton").addEventListener("click", startNewPost);
