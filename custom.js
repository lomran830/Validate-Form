function validate(){
  var name     = document.getElementById("input_user").value,
      email    = document.getElementById("input_email").value,
      password = document.getElementById("pass").value,
      phone = document.getElementById("input_phone").value,
      message = document.getElementById("error_message"),
      text;
      if(name.trim() == "" && email.trim() == "" && password.trim() == "" && phone.trim() == ""){
        text = "Enter Validation Form";
        message.innerHTML = text;
        return false
      }
      if(name.trim() == "" || name.length < 5){
        text = "Enter Validate User";
        message.innerHTML = text;
        return false
      }
      if(email.indexOf("@") == -1 || email.length < 10 || email.indexOf(".") == -1){
          text = "Enter Validate Email";
          message.innerHTML = text;
          return false
      }
      if(isNaN(phone) || phone.length != 11){
          text = "Enter Validate Phone Number";
          message.innerHTML = text;
          return false
      }
      if(password.length < 3){
          text = "Enter Validate Password";
          message.innerHTML = text;
          return false
      }

        return true;
}
