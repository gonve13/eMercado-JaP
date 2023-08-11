local = window.localStorage;
session = window.sessionStorage;

previousPage = session.getItem("originLink");

function writeLoginInfo(type){
	const username = document.getElementById("uname").value
	const pass = document.getElementById("pwd").value
	
	type.setItem("user", username);
	type.setItem("password", pass);
}


document.getElementById("loginbtn").addEventListener("click", 
() => {
const rememberMe = document.getElementById("rememberMe").checked
rememberMe ? writeLoginInfo(local) : writeLoginInfo(session)

window.location.href = previousPage;
}
);



document.querySelectorAll("input").forEach(elem => elem.addEventListener("input", 
() => {
	const validUser = document.getElementById("uname").validity.valid
	const validPass = document.getElementById("pwd").validity.valid
	if (validUser && validPass){
		document.getElementById("loginbtn").removeAttribute("disabled")
	} else {
		document.getElementById("loginbtn").setAttribute("disabled", "");
	}
	
	document.querySelector("form").classList.replace("needs-validation", "was-validated") 
}
));


document.getElementById("showpass").addEventListener("input",
() => {
	const pass = document.getElementById("pwd");
	(pass.type === "password") ? pass.type = "text" : pass.type ="password"
}
);