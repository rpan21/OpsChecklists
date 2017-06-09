<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
</head>
<body>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<style>

@import url(http://fonts.googleapis.com/css?family=Roboto:400);
body {
  background-color:#fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}

.container {
    padding: 25px;
    position: fixed;
}

.form-login {
    background-color: #EDEDED;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    box-shadow:0 1px 0 #cfcfcf;
}

h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}

.wrapper {
    text-align: center;
}

</style>
<form action="hello.html" method="post">
<div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3" style='left: 300px;'>
            <div class="form-login">
            <h4>Welcome back.</h4>
            <input  type="text" id="userName" name="userName" class="form-control input-sm chat-input" placeholder="username" />
            </br>
            <input type="password" id="userPassword" name="userPassword" class="form-control input-sm chat-input" placeholder="password" />
            </br>
            <div class="wrapper">
            <span class="group-btn">     
                <input type="submit" value="LOGIN" class="btn btn-primary btn-md"/>
            </span>
            </div>
            </div>
        
        </div>
    </div>
</div>
</form>
</body>
</html>