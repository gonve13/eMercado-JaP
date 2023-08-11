const permanent = window.localStorage;
const session = window.sessionStorage;

session.setItem("originLink", window.location.href)

function checkAuth(){

	const username = permanent.getItem("user");
	const password = permanent.getItem("password");
	const sessionUser = session.getItem("user");
	const sessionPass = session.getItem("password")
	
		
	if (password && username || sessionUser && sessionPass){
		session.removeItem("originLink")
	} else {
		window.location.replace("login.html")
	}
	
	
} 

function logOut(){
	permanent.removeItem("user")
	permanent.removeItem("password")
	session.removeItem("user")
	session.removeItem("password")
}

checkAuth();
