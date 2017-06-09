(function() {
	 var form = $('.form'),
	  cache_width = form.width(),
	  a4 = [595.28, 841.89]; // for a4 size paper width and height
	 
	 $('#create_pdf').on('click', function() {
		 $.each($("input[name='checkboxes']").not(':checked'), function(){ 
			 
           var id=  $(this).val();
           console.log(id);
           $("#"+id).hide();
           $(".hide").show();
           $('#create_pdf').hide();
           $("input[name='checkboxes']").hide();
         });
	 });
	 

	 $('#create_pdf').on('click', function() {
	  $('body').scrollTop(0);
	  createPDF();
	 });
	 //create pdf
	 function createPDF() {
	  getCanvas().then(function(canvas) {
	   var
	    img = canvas.toDataURL("image/png"),
	    doc = new jsPDF({
	     unit: 'px',
	     format: 'a4'
	    });
	   doc.addImage(img, 'JPEG', 20, 20);
	   doc.save('ops-checklist.pdf');
	   form.width(cache_width);
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
}

$(document).ready(appendCheckboxes);