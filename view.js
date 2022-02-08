function formvalidation()
{
    var fid=document.frm.sid.value;

    if(fid==""|| fid.length<3)
    {
        alert("plz fill id length between 3 or more");
        return false;
    }
 
    var fname=document.frm.sname.value;

    if(fname=="" || fname.length<3)
    {
        alert("plz fill name and length between 3 or more");
        return false;
    }

    var  femail=document.frm.email.value;
   

    if(femail=="" ||femail.length<5)
    {
        alert("plz fill valid  email ");
        return false;
    }

    var fpwd=document.frm.pwd.value;
    
    if(fpwd==""||fpwd.length<4)
    {
        alert("plz fill password length between 4 or more");
        return false;
    }
    var mradio=document.frm.mradio;
    var fradio=document.frm.fradio;
    var oradio=document.frm.oradio;
    var x=0;
    if(mradio.checked)
    {
        x++;    
    }
    if(fradio.checked)
    {
        x++;
    }
    if(oradio.checked)
    {
        x++;
    }
    if(x==3)
    {
        alert("all are selected plz any one can select");
        fradio.checked=false;
        mradio.checked=false;
        oradio.checked=false;
        return false;
    }
    var ftel=document.frm.tel.value;

    if(ftel.length<10)
    {
        alert("enter valid phone number");
        return false;
    }

    var fadd=document.frm.tadd.value;

    if(fadd=="" || fadd.length<15)
    {
        alert("plz fill adress and enter length 15  or more");
        return false;
    }

    var fage=document.frm.age.value;
    if(isNaN(fage))
    {
        alert("enter only number value of age");
        return false;
    }
    var date=document.frm.dt.value;
    if(date=="")
    {
        alert("plz select the date");
        return false;
    }
     var fadhar=document.frm.adhar.value;
     if(isNaN(fadhar))
     {
         alert("adhar is enter  only number character");
     }
     else if(fadhar.length<12)
         {
             alert("enter valid number");
             return false;
         }
          var fpan=document.frm.pan.value;

          if(fpan.length<10)
          {
              alert("enter valid pan number");
              return false;
          }
          var fvotid=document.frm.votid.value;
          if(fvotid.length<10)
          {
            alert("enter valid vooter id number");
            return false;
          }
          var fcountry=document.frm.country.value;

          if(fcountry=="")
          {
            alert ( "Please select country!");
            return false;
          }

          var fstate=document.frm.state.value;

          if(fstate=="")
          {
            alert ( "Please select state!");
            return false;
          }
          var fcity=document.frm.city.value;

          if(fcity=="")
          {
            alert ( "Please select city!");
            return false;
          }
           var fatname=document.frm.fname.value;

           if(fatname=="" ||fatname.length<7)
           {
               alert (" plz fill father name length between 7 or more");
               return false;
           }

           var fmname=document.frm.mname.value;

           if(fmname=="" ||fmname.length<6)
           {
               alert (" plz fill mother name length between 7 or more");
               return false;
           }

           var fzipcode=document.frm.zipcode.value;
           {
               if(isNaN(fzipcode))
               {
                   ("enter valid zip code");
                    return true;
               }
           }
    var fpradio=document.frm.pradio;
    var foradio=document.frm.oradio;
    var fhiradio=document.frm.hiradio;
    var x=0;
    if(fpradio.checked)
    {
        x++;    
    }
    if(foradio.checked)
    {
        x++;
    }
    if(fhiradio.checked)
    {
        x++;
    }
    if(x==3)
    {
        alert("all are selected plz any one can select");
        fpradio.checked=false;
        foradio.checked=false;
        fhiradio.checked=false;
        return false;
    }

     var fhradio=document.frm.hradio;
    var fsradio=document.frm.sradio;
    var fbradio=document.frm.bradio;
    var fkradio=document.frm.kradio;
    var x=0;
    if(fhradio.checked)
    {
        x++;    
    }
    if(fsradio.checked)
    {
        x++;
    }
    if(fbradio.checked)
    {
        x++;
    }
    if(fkradio.checked)
    {
        x++;
    }
    if(x==4)
    {
        alert("all are selected plz any one can select");
        fhradio.checked=false;
        fsradio.checked=false;
        fbradio.checked=false;
        fkradio.checked=false;
        return false;
    }
    else
    {
        alert("form successfully submited");
        window.location.reload();
        return true;
        
    }
}