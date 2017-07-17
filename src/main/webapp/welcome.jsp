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
#link{
display:none;
}

#appname{
width: 300px;
height: 30px;
text-align: center;
}

body{

background-color: "aqua";
}

#app{
text-shadow:black;
padding-left: 300px;

}
.wide {
 min-width: 100%; display: inline-block; background-color: #ccffcc; 
 }
 
 .browse,.mobile,.mya,.checkoutandpayment,.complus,.framework{
 min-width: 100%; display: inline-block; background-color: white;
 display: none;
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
<script>
var browse=${browse};
</script>
<script>
var checkoutandpayment = ${checkoutandpayment};
</script>
<script>
var framework = ${framework};
</script>
<script>
var mobile = ${mobile};
</script>
<script>
String mya = ${mya};
</script>
<script>
var complus = ${complus};


</script>

</head>
<SCRIPT type="text/javascript">
	window.history.forward();
	function noBack() { window.history.forward(); }
	
	/* function selectOnlyThis(id) {
	    for (var i = 1;i <= 6; i++)
	    {
	        document.getElementById("check" + i).checked = false;
	    }
	    document.getElementById(id).checked = true;
	} */
</SCRIPT>
</HEAD>
<BODY onload="noBack();" 
	onpageshow="if (event.persisted) noBack();" onunload="">
<div class="ui page grid">
      <div class="wide column">
        <h1 class="ui header aligned center">OPS-Checklist
        </h1>
        <div class="ui divider hidden">
        </div>
      </div>
    </div>

<div class="ui segment">
  
  <form class="ui form" id="formId">
  <div id="app"><font size="5">Application Name</font> <input type="text" id="appname" border="12" ></div>
  <h1 color="Blue" align="center" id="title"></h1>
  
  </form>
  <div id="team">
  <h2>Functional Impact : </h2>
  <label><input type="checkbox" value="browse" name="teams" id="check1" onclick="selectOnlyThis(this.id)"/>Browse</label><br>
  <label><input type="checkbox" value="checkoutandpayment" name="teams" id="check2" onclick="selectOnlyThis(this.id)"/>CheckoutAndPayment</label><br>
  <label><input type="checkbox" value="framework" name="teams" id="check3" onclick="selectOnlyThis(this.id)"/>Framework</label><br>
  <label><input type="checkbox" value="mobile" name="teams" id="check4" onclick="selectOnlyThis(this.id)"/>Mobile</label><br>
  <label><input type="checkbox" value="mya" name="teams" id="check5" onclick="selectOnlyThis(this.id)"/>MYA</label><br>
  <label><input type="checkbox" value="complus" name="teams" id="check6" onclick="selectOnlyThis(this.id)"/>ComPlus</label><br><hr>
  </div>
<div class="ui button aligned center teal" id="create_pdf">Create PDF
  </div>
  <div id="link">
			<a id="browselink" href="browse.pdf" download>browse</a>
			 <a	id="checkoutandpaymentlink" href="checkoutandpayment.pdf" download>checkoutandpayment</a>
			<a id="compluslink" href="complus.pdf" download>complus</a>
			 <a	id="frameworklink" href="framework.pdf" download>framework</a>
			  <a id="myalink" href="mya.pdf" download>mya</a>
			   <a id="mobilelink" href="mobile.pdf" download>mobile</a>
		</div>
<a href="logout.html"><div class="ui button aligned center teal" id="log_out">LOG OUT</div></a>
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