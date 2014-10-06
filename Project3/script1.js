//Mark Evans
//Project 3
function load(){
}

function validateForm( event ){
	var good = 0;
	var badForm = 0;
	var errorProblems = [];
	document.getElementById("errordiv").innerHTML = "";
	var requiredFields = document.getElementsByClassName("required");
	for (var i = 0; i < requiredFields.length; i++){
		if(requiredFields[i].value.length == 0){
			badForm++;
			errorProblems.push(getProperName(requiredFields[i].name));
		}
	}
	
	if (errorProblems.length == 0){
		if(document.getElementsByName("username")[0].value.length < 5){//username
			document.getElementById("errordiv").innerHTML = "The Username field must have at least 5 characters";
		}else if(document.getElementsByName("pass1")[0].value.lenght < 1){//password field
			document.getElementById("errordiv").innerHTML = "The first password field must have at least one character";
		}else if(document.getElementsByName("pass1")[0].value != document.getElementsByName("pass2")[0].value){//matching password fields
			document.getElementById("errordiv").innerHTML = "The 2 password fields must match";
		}else if(document.getElementsByName("email")[0].value.indexOf("@") === -1){//email
			document.getElementById("errordiv").innerHTML = "The Email field must contain the @ symbol";
		}else if(/^\d{5}$/.test(document.getElementsByName("zip")[0].value) == false){//zip code
			document.getElementById("errordiv").innerHTML = "The Zip Code field must have at exactly 5 digits";
		}else if(/^\d{3}\-\d{3}\s\d{4}$/.test(document.getElementsByName("phonenumber")[0].value) == false){//phone number
			document.getElementById("errordiv").innerHTML = "The Phone Number field must have in the format xxx-xxx xxxx where all the xs are digits";
		}else{
			good = 1;
		}

	}else{
		var errorMessage = "";
		if(errorProblems.length == 1){
			errorMessage = "The "+errorProblems[0]+" field is required.";
		}else{
			errorMessage = "The ";
			for(var i = 0; i < errorProblems.length; i++){
				if(i == errorProblems.length-1){
					errorMessage+="and "+errorProblems[i]+" fields are required";
				}else{
					errorMessage+=errorProblems[i]+", ";
				}
			}
		}
		document.getElementById("errordiv").innerHTML = errorMessage;
	}
	
	if (good == 0){
		return false;
	}
}


function getProperName(name){
	switch(name) {
		case "username":
			return "Username";
			break;
		case "pass1":
			return "Password1";
			break;
		case "pass2":
			return "Password2";
			break;
		case "email":
			return "Email";
			break;
		case "zip":
			return "Zip Code";
			break;
		case "phonenumber":
			return "Phone Number";
			break;
		default:
			return "ERROR";
	}
}
window.onload = load;//Run code once body exists