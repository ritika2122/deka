//const api_url = "<heroku_app_url>"
const api_url = "https://deka-2203.herokuapp.com/ani"

function loadData(records = []) {
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;
		table_data += `<td>${records[i].name}</td>`;
		//table_data += `<td>${records[i].duration}</td>`;
		table_data += `<td>${records[i].price}</td>`;
		table_data += `<td>${records[i].topics}</td>`;
		table_data += `<td>${records[i].access}</td>`;
		table_data += `<td>${records[i].access_on}</td>`;
		table_data += `<td>`;
		//table_data += `<button class="btn btn-primary">ADD to Wishlist</button>`;
		//table_data += '&nbsp;&nbsp;';
		//table_data += `<button class="btn btn-danger>Subscribe</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	//console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
	fetch(api_url)
	.then((response) => response.json())
	.then((data) => { 
		console.table(data); 
		loadData(data);
	});
}



/*

function getDataById(id) {
	fetch(`${api_url}/${id}`)
	.then((response) => response.json())
	.then((data) => { 
	
		console.log(data);
		document.getElementById("id").value = data._id;
		document.getElementById("name").value = data.name;
		document.getElementById("age").value = data.age;
		document.getElementById("city").value = data.city;
	})
}


function postData() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	
	data = {name: name, age: age, city: city};
	
	fetch(api_url, {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "index.html";
	})
}	


function putData() {
	
	var _id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	
	data = {_id: _id, name: name, age: age, city: city};
	
	fetch(api_url, {
		method: "PUT",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.table(data);
		window.location.href = "index.html";
	})
}


function deleteData(id) {
	user_input = confirm("Are you sure you want to delete this record?");
	if(user_input) {
		fetch(api_url, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({"_id": id})
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data); 
			window.location.reload();
		})
	}
}
*/
