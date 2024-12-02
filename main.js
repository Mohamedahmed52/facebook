function validateform() {

var username =document.getElementById("username").value;
var email = document.getElementById("emil").value;
var phone = document.getElementById("phone")
var error =document.getElementById("error");
var text ="";


if (username.length < 5) {

    text ="please enter valid username";
    error.innerHTML=text;
    return false;
} 

else if(email.indexOf("@") == -1 && email.length < 10 ) {

    text ="please enter valid username";
    error.innerHTML=text;
    return false;
}

else if( isNaN(phone) || phone.length !=11  ) {

    text ="please enter valid phone";
    error.innerHTML=text;
    return false;

}


else{

    alert("done ?");
    return true;
}


}



  