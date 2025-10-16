function checkform() 
{
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    CheckEmail(email);
    CheckPassword(password);
    console.log("Form Submitted");
}

function CheckEmail(email)
{
    var RegExEmail = /\S+@\S+\.([a-z]|[A-Z]){1,5}/g;
    if (RegExEmail.test(email))
    {
        console.log(email + " Email is valid");
    }
    else
    {
        console.error(email + " Email is not valid");
        return false;
    }
}

function CheckPassword(password)
{
    var RegExPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    if (RegExPassword.test(password) && password.length > 7)
    {
        console.log(password + " password is valid");
    }
    else
    {
        console.error(password + " password is not valid");
        return false;
    }
}