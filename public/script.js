let posts = JSON.parse(localStorage.getItem("posts")) || [
	{
		id: 1,
		title: "บทความแรก",
		excerpt: "นี่คือบทความตัวอย่างบทความแรก...",
		content: "เนื้อหาบทความเต็มของบทความแรก...",
	},
	{
		id: 2,
		title: "บทความที่สอง",
		excerpt: "นี่คือบทความตัวอย่างบทความที่สอง...",
		content: "เนื้อหาบทความเต็มของบทความที่สอง...",
	},
];

// ฟังก์ชันแสดงบทความในหน้า index.html
function displayPosts() {
	const container = document.getElementById("posts");
	container.innerHTML = "";
	posts.forEach((post) => {
		const div = document.createElement("div");
		div.className = "post";
		div.innerHTML = `
		<div class="bg-white p-6 rounded-3xl shadow hover:shadow-md transition duration-300">
			<h3 class="text-2xl font-bold text-gray-800 mb-2">${post.title}</h3>
			<p class="text-gray-600 mb-4 line-clamp-3">${post.excerpt}</p>
			<a href="post.html?id=${post.id}" class="inline-block text-blue-600 hover:underline font-medium">
			อ่านต่อ →
			</a>
		</div>
		`;

		container.appendChild(div);
	});
}

// เรียกฟังก์ชันตอนโหลดหน้า
window.onload = displayPosts;
