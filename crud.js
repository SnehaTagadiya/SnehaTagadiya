var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');
var ejs=require('ejs');
var path=require('path');

var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'$nehajay279',
    database:'project'
});

app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/assignment-2.html');
}); 

app.get('/testreg',function(req,res){
    res.sendFile(__dirname+'/register.html');
});
app.post('/registerdata',function(req,res){
    var sname=req.body.sname;
    var email=req.body.email;
    var pwd=req.body.pwd;
    var radio=req.body.radio;
    var ch=req.body.ch;
    var mobile=req.body.tel;
    var add=req.body.tadd;
    var age=req.body.age;
    var date=req.body.dt;
    var adhar=req.body.adhar;
    var pan=req.body.pan;
    var voter=req.body.votid;
    var ch1=req.body.ch1;
    var country=req.body.country;
    var state=req.body.state;
    var city=req.body.city;
    var fname=req.body.fname;
    var mname=req.body.mname;
    var radio1=req.body.radio1;
    var zipcode=req.body.zipcode;
    var radio2=req.body.radio2;

  conn.connect(function(err){
      var sql="insert into student_reg(sname,email_id,password,gender,qualification,mobile_no,address,age,date_of_Birth,adhar_no,pan_no,vooter_id,blood_group,country,state,city,father_name,mother_name,religion,zip_code,caste) values('"+sname+"','"+email+"','"+pwd+"','"+radio+"','"+ch+"','"+mobile+"','"+add+"','"+age+"','"+date+"','"+adhar+"','"+pan+"','"+voter+"','"+ch1+"','"+country+"','"+state+"','"+city+"','"+fname+"','"+mname+"','"+radio1+"','"+zipcode+"','"+radio2+"')";
      conn.query(sql,function(err,result){
          if(err) throw err;
          console.log('record inserted');
          res.redirect('/');
           });
     });  
});
app.get('/testupdate',function(req,res){
    res.sendFile(__dirname+'/update.html');
});
app.post('/updatedata',function(req,res){
    var sid=req.body.sid;
    var sname=req.body.sname;
    var email=req.body.email;
    var pwd=req.body.pwd;
    var radio=req.body.radio;
    var ch=req.body.ch;
    var mobile=req.body.tel;
    var add=req.body.tadd;
    var age=req.body.age;
    var date=req.body.dt;
    var adhar=req.body.adhar;
    var pan=req.body.pan;
    var voter=req.body.votid;
    var ch1=req.body.ch1;
    var country=req.body.country;
    var state=req.body.state;
    var city=req.body.city;
    var fname=req.body.fname;
    var mname=req.body.mname;
    var radio1=req.body.radio1;
    var zipcode=req.body.zipcode;
    var radio2=req.body.radio2;

  conn.connect(function(err){
      var sql="update student_reg set sname='"+sname+"',email_id='"+email+"',password='"+pwd+"',gender='"+radio+"',qualification='"+ch+"',mobile_no='"+mobile+"',address='"+add+"',age='"+age+"',date_of_Birth='"+date+"',adhar_no='"+adhar+"',pan_no='"+pan+"',vooter_id='"+voter+"',blood_group='"+ch1+"',country='"+country+"',state='"+state+"',city='"+city+"',father_name='"+fname+"',mother_name='"+mname+"',religion='"+radio1+"',zip_code='"+zipcode+"',caste='"+radio2+"' where sid='"+sid+"'";

                                                                                                                                                                                                                                                                                                      
      conn.query(sql,function(err,result){
          if(err) throw err;
          console.log('record updated');
          res.redirect('/');
           });
     });  
});
app.get('/testdelete',function(req,res){
    res.sendFile(__dirname+'/delete.html');
});
app.post('/deletedata',function(req,res){
    var sid=req.body.sid;
    
    conn.connect(function(err){
        var sql="delete from student_reg where sid='"+sid+"'";
        conn.query(sql,function(err,result){
            if(err) throw err;
            console.log('Record Deleted');
        });
    });
});
app.get('/testlogin',function(req,res){
    res.sendFile(__dirname+'/login.html')
})
app.post('/login',function(req,res){
    var uname=req.body.uname;
    var pwd=req.body.pwd;

    if(uname && pwd){
        conn.query("select * from student_reg where sname=? and password=?",[uname,pwd],function(error,result,field){
            if(result.length>0){
                res.redirect('/');
            }
            else{
                res.send('Incorrect username and password.');
            }
            res.end();
        });    
            
    }
});

app.get('/selectdata',function(req,res){
    var sql="select * from student_reg";
    conn.query(sql,function(error,rows){
        if(error) throw error;
        res.render('select',{
            studs:rows
        })
    })
})
app.get('/testcontact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});

app.get('/testabout',function(req,res){
    res.sendFile(__dirname+'/aboutus.html');
});

app.listen(3000);
console.log('server started with port 3000');
