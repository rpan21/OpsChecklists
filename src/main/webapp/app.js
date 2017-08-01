(function() {
	 var form = $('.form'),
	  cache_width = form.width(),
	  a4 = [595.28, 11841.89]; // for a4 size paper width and height
	 
	 $('#create_pdf').on('click', function() {
		 $.each($("input[name='checkboxes']").not(':checked'), function(){ 
			 
           var id=  $(this).val();
           $("#"+id).hide();
           $(".hide").show();
           $('#create_pdf').hide();
           $("input[name='checkboxes']").hide();
		   $('#app').hide();
		   $('#team').hide();
		   title= $('#appname').val();
		   $('#title').text(title);
		   $('#title').css("color", "red");
		   
         });
		 
		
	 
	 

	 
	 
	 $.each($('input[name="teams"]:checked'), function(){ 
		 
         var id=  $(this).val();
         console.log(id);
         var idlink=id+"link";
         console.log(idlink);
         document.getElementById(idlink).click();
         $('#team').hide();
        // window.open(id+".pdf");
       });
	
});
	 
	 $('#create_pdf').on('click', function() {
		  $('body').scrollTop(0);
		  createPDF();
	 });
	 
	 //create pdf
	 function createPDF() {
		 var pdf = new jsPDF('p', 'pt', 'a3');
		 var options = {
		          pagesplit: false
		     };

		 pdf.addHTML($('body'), options, function()
		 {
		     pdf.save("ops-checklist.pdf");
		     
		 });
	   
	  }

	 // create canvas object
	 function getCanvas() {
	  form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
	  return html2canvas(form, {
	   imageTimeout: 2000,
	   removeContainer: true
	  });
	 }

	}());

/*function createBrowseTeamRegression(){
	var browseTeam="";
	browseTeam+= '<div id="browse" class="browse">';
	browseTeam+= '<h2><center>'+"Browse Testing Scenarios"+'</center></h2>';
    $.each(browse.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Automation Status" || automa=="Scenario Description"){
				if(valueauto=="Automated"){
					browseTeam += '<div class="wide">';
					browseTeam += automa;
					browseTeam += " == " + valueauto + "</br>";
					browseTeam+= '</div>';
				}
				else{
			browseTeam += JSON.stringify(key1).replace(/['"]+/g, '') ;
			browseTeam += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}}
		});
		browseTeam+= '<br><hr>';
    });
    browseTeam+= '</div>';
    console.log(browseTeam);
    $(browseTeam).appendTo("#formId")
}

function createFrameworkTeamRegression(){
	var framework="";
	framework+= '<div id="framework" class="framework">';
	framework+= '<h2><center>'+"FrameWork Testing Scenarios"+'</center></h2>';
    $.each(framework.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Automation Status" || automa=="Scenario Description"){
				if(valueauto=="Automated"){
					framework += '<div class="wide">';
					framework += automa;
					framework += " == " + valueauto + "</br>";
					framework+= '</div>';
				}
				else{
					framework += JSON.stringify(key1).replace(/['"]+/g, '') ;
					framework += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}}
		});
		framework+= '<br><hr>';
    });
    framework+= '</div>';
    console.log(framework);
    $(framework).appendTo("#formId")
}

function createMyaTeamRegression(){
	var mya="";
	mya+= '<div id="mya" class="mya">';
	mya+= '<h2><center>'+"MYA Testing Scenarios"+'</center></h2>';
    $.each(mya.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Automation Status" || automa=="Scenario Description"){
				if(valueauto=="Automated"){
					mya += '<div class="wide">';
					mya += automa;
					mya += " == " + valueauto + "</br>";
					mya+= '</div>';
				}
				else{
					mya += JSON.stringify(key1).replace(/['"]+/g, '') ;
					mya += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}}
		});
		mya+= '<br><hr>';
    });
    mya+= '</div>';
    console.log(mya);
    $(mya).appendTo("#formId")
}

function createComPlusTeamRegression(){
	var complus="";
	complus+= '<div id="complus" class="complus">';
	complus+= '<h2><center>'+"ComPlus Testing Scenarios"+'</center></h2>';
    $.each(complus.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Automation Status" || automa=="Scenario Description"){
				if(valueauto=="Automated"){
					complus += '<div class="wide">';
					complus += automa;
					complus += " == " + valueauto + "</br>";
					complus+= '</div>';
				}
				else{
					complus += JSON.stringify(key1).replace(/['"]+/g, '') ;
					complus += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}}
		});
		complus+= '<br><hr>';
    });
    complus+= '</div>';
    console.log(complus);
    $(complus).appendTo("#formId")
}

function createCNPTeamRegression(){
	var cnpTeam="";
	cnpTeam+= '<div id="checkoutandpayment" class="checkoutandpayment">';
	cnpTeam+= '<h2><center>'+"Checkoutandpayment Testing Scenarios"+'</center></h2>';
    $.each(checkoutandpayment.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Automation Status" || automa=="Scenario"){
				if(valueauto=="Automated"){
					cnpTeam += '<div class="wide">';
					cnpTeam += automa;
					cnpTeam += " == " + valueauto + "</br>";
					cnpTeam+= '</div>';
				}
				else{
					cnpTeam += JSON.stringify(key1).replace(/['"]+/g, '') ;
					cnpTeam += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}}
		});
		cnpTeam+= '<br><hr>';
    });
    cnpTeam+= '</div>';
    console.log(cnpTeam);
    $(cnpTeam).appendTo("#formId")
}

function createMobileTeamRegression(){
	var mobileTeam="";
	mobileTeam+= '<div id="mobile" class="mobile">';
	mobileTeam+= '<h2><center>'+"Browse Testing Scenarios"+'</center></h2>';
    $.each(mobile.checklist, function(key,value){
    	
		$.each(value, function(key1,value1){
			automa=JSON.stringify(key1).replace(/['"]+/g, '');
			valueauto=JSON.stringify(value1).replace(/['"]+/g, '');
			if(automa=="Scenario"){
				mobileTeam += JSON.stringify(key1).replace(/['"]+/g, '') ;
				mobileTeam += " == " + JSON.stringify(value1).replace(/['"]+/g, '') + "</br>";
			}
		});
		mobileTeam+= '<br><hr>';
    });
    mobileTeam+= '</div>';
    console.log(mobileTeam);
    $(mobileTeam).appendTo("#formId")
}
*/
function createNewCheckbox(id){
    return '<input type="checkbox" value="'+ id +'" name="checkboxes" />';
}

function appendCheckboxes () {
	var count = 1,
		increment = 10,
		htmlStr = "<div>";
	$.each(arr.checklist, function(key,value){
		htmlStr += "<h3>"+JSON.stringify(key).replace(/['"]+/g, '')+"</h3>";
		$.each(value, function(key1,value1){
		 var id = 1*increment+count;
		 htmlStr += "<div><label id="+id+"><h5>" + createNewCheckbox(id) + JSON.stringify(key1).replace(/['"]+/g, '')+"</h5>" ;
		 $.each(value1, function(key2, value2){
		 htmlStr += "<div class='hide' style='display:none;'><ul><li>"+ value2.replace(/['"]+/g, '') +"</li></div>";
		 });
		 htmlStr +="</label></div>";
		 count++;
		});
		htmlStr += "<hr />";
	});
	increment=increment+10;
	htmlStr += "</div>";
	$(htmlStr).appendTo("#formId");
	/*createBrowseTeamRegression();
	createMobileTeamRegression();
	createCNPTeamRegression();
	createFrameworkTeamRegression();
	createComPlusTeamRegression();*/
}

$(document).ready(appendCheckboxes);

