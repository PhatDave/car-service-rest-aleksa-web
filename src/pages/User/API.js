const BASE_URL = 'http://localhost:8080'

export default {
	getAllUsers() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", BASE_URL + "/user");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200) {
					let users = JSON.parse(this.responseText);
					console.log(users);
					resolve(users);
				} else {
					reject(this.responseText);
				}
			}
		});
	},
	getUser(id) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", BASE_URL + "/user/" + id);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200) {
					let user = JSON.parse(this.responseText);
					console.log(user);
					resolve(user);
				} else {
					reject(this.responseText);
				}
			}
		});
	},
}
