function formvalidation()
{
    var uname=document.frm.uname;
    var pwd=document.frm.pwd;


if(uname_validation(uname)){
    if(pwd_validation(pwd,7,12))
    {

    }
  }
  return false;
}

function uname_validation(uname)
{
    var letters=/^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }

    else{
        alert("enter valid username");
        uname.focus();
        return false;
    }
}

function pwd_validation(pwd,mlen,milen)
{
    var pwd_len = pwd.value.length;

    if(pwd_len==0 || pwd_len>=milen || pwd_len<=mlen)
    {
        alert("password should not be empty.plz feel the length between "+mlen+" to"+milen);
        pwd.focus();
        return false;
    }
    else {
        
        return true;
    }
}