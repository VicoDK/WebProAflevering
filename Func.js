function checkform() 
{
    console.log("Hello World");
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    CheckEmail(email);
    CheckPassword(password);
    return true;
}

function CheckEmail(email)
{
    var RegExEmail = /\S+@\S+\.([a-z]|[A-Z]){1,5}/g;
    if (RegExEmail.test(name))
    {
        console.log(name + " Name is valid");
    }
    else
    {
        console.error(name + " Name is not valid");
        return false;
    }
}

function CheckPassword(password)
{
    var RegExPassword = /[A-Z]+[a-z]+[0-9]/;
    if (RegExPassword.test(password) && password.length >= 8)
    {
        console.log(password + " password is valid");
    }
    else
    {
        console.error(password + " password is not valid");
        return false;
    }
}