function validate(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var name1 = document.getElementById("name1");
    
    error_message.style.padding = "10px";
    
    var text;
    var letters = /^[a-z]*$/i;

    if (!name.match(letters)) {
      text="Name cannot contain digits. Name is a text only Field";
      error_message.innerHTML = text;
      alert(text);
      return false;
  }

    if(name.length < 2){
        text="Enter more than 1 character for name";
        error_message.innerHTML = text;
        alert(text);
        return false;

    }

    if(number.length < 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      alert(text);
      return false;
    }
    if(isNaN(number)){
        text = "Phone Number should be digits only";
        error_message.innerHTML = text;
        alert(text);
        return false;
      }

    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      alert(text);
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 10 Characters In Enquiry field";
      error_message.innerHTML = text;
      alert(text);
      return false;
    }


    alert("Form Submitted Successfully!");
    return true;
    
}
