const permanent = window.localStorage;
const session = window.sessionStorage;

session.setItem("originLink", window.location.href)

function checkAuth(){

	const username = permanent.getItem("user");
	const password = permanent.getItem("password");
		
	if (password || username){
		session.removeItem("originLink")
	} else {
		window.location.replace("/login.html")
	}
	
	
} 

function logOut(){
	permanent.removeItem("user")
	permanent.removeItem("password")
	session.removeItem("user")
	session.removeItem("password")
}

checkAuth();
