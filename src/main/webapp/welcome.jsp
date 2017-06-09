<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.12.0/semantic.min.css" />
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

body{

background-color: "aqua";
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
} 
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>
<script>
var arr=${message};
</script>

</head>
<body>
<div class="ui page grid">
      <div class="wide column">
        <h1 class="ui header aligned center">OPS-Checklist
        </h1>
        <div class="ui divider hidden">
        </div>
      </div>
    </div>

<div class="ui segment">
  <div class="ui button aligned center teal" id="create_pdf">Create PDF
  </div>
  <div class="ui divider">
  </div>
  <form class="ui form" id="formId">
  </form>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">
    </script>
    <script type="text/javascript" src="//cdn.rawgit.com/MrRio/jsPDF/master/dist/jspdf.min.js">
    </script>
    <script type="text/javascript" src="//cdn.rawgit.com/niklasvh/html2canvas/0.5.0-alpha2/dist/html2canvas.min.js">
    </script>
    <script type="text/javascript" src="app.js">
    </script>

</body>
</html>