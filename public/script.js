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
        <div class="bg-white p-4 rounded-lg">
            <h3 class="text-xl font-semibold">${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}">อ่านต่อ</a>
      `;
		container.appendChild(div);
	});
}

// เรียกฟังก์ชันตอนโหลดหน้า
window.onload = displayPosts;
