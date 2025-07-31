document.getElementById("loginForm").addEventListener("submit", function (e) {
	e.preventDefault();
	const username = document.getElementById("username").value.trim();
	const password = document.getElementById("password").value;

	const validUsername = "admin";
	const validPassword = "1234";

	if (username === validUsername && password === validPassword) {
		localStorage.setItem("isLoggedIn", "true");
		window.location.href = "admin.html";
	} else {
		alert("Invalid username or password");
	}
});
