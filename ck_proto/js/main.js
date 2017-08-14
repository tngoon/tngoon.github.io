// copy text of suggestion button to textbox
function copyText(x) {
		var currentTxt = document.getElementById("comment-text").value;
		document.getElementById("comment-text").value = currentTxt + " " + x.innerHTML;
		//if suggestion clicked, move to top of list
		$("li").click(function() {
  			$(this).parent().prepend($(this));
  
		});
	}

// show and hide different suggestions based on checkboxes
function ShowHideDiv() {
	//divs for different characteristics
	var opendefault = document.getElementById("open-default");
	var spec = document.getElementById("need-specific");
	var action = document.getElementById("need-actionable");
	var justify = document.getElementById("need-justify");
	var complete = document.getElementById("complete");
	var actjust = document.getElementById("act-justify");

	//checkboxes
	var speccheck = document.getElementById("speccheck");
	var actcheck = document.getElementById("actcheck");
	var justcheck = document.getElementById("justcheck");

	var submit = document.getElementById("submit-comment");

	if(speccheck.checked && !actcheck.checked && !justcheck.checked) {
		opendefault.style.display = "none";
		actjust.style.display = "block";
		submit.classList.remove('btn-danger');
		submit.classList.add('btn-warning');
	 } else if(speccheck.checked && !justcheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		action.style.display = "none";
		justify.style.display = "block";
		submit.classList.remove('btn-danger');
		submit.classList.add('btn-warning');
	} else if(speccheck.checked && !actcheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		justify.style.display = "none";
		action.style.display = "block";
		submit.classList.remove('btn-danger');
		submit.classList.add('btn-warning');
	} else if(!speccheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		spec.style.display = "block";
		submit.classList.remove('btn-danger');
		submit.classList.add('btn-warning');
	} else {
		complete.style.display = "block";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		justify.style.display = "none";
		action.style.display = "none";
		submit.classList.remove('btn-danger');
		submit.classList.remove('btn-warning');
		submit.classList.add('btn-success');
	}
	
}

//store comments as JSON
function storeComments() {
	var input = $('#comment-text').val().split(/\n/);
	var allComments = [];

	for (var i=0; i < input.length; i++) {
			if (/\S/.test(input[i])) {
				allComments.push($.trim(input[i]));
			}
		}
	allComments = JSON.stringify(allComments);
	console.log(allComments);
	$('#submitted-comments').append('Comment:' + input + '<hr>');

	$("#comment-text").val('');
	$("#open-default").show();
	$("#complete").hide();
	$("#need-specific").hide();
	$("#need-actionable").hide();
	$("#need-justify").hide();
	$("#act-justify").hide();
	$("#submit-comment").className = '';
	$("#submit-comment").addClass('btn btn-danger');
}

//filter suggestions based on what user is typing
function filterSuggestions() {
	var input = document.getElementById("comment-text");
	var box = document.getElementById("dynasuggestions");
	var list = box.getElementsByTagName("li");
	var filter = input.value.toUpperCase();
	// var timeout = null;

	for (i=0; i<list.length; i++) {
		a=list[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) >= 0) {
			// list[i].style.display= "";
			list[i].parentNode.insertBefore(list[i], list[i].previousSibling);
		} 
		// else {
		// 	list[i].style.display= "";
		// 	// list[i].parentNode.insertAfter(list[i], list[i].nextSibling);
		// }
	}
}


//show submitted comments
function showComments() {
	// $("#submitted-comments").show();
	// $("#open-default").hide();
	// $("#need-specific").hide();
	// $("#need-actionable").hide();
	// $("#need-justify").hide();
	// $("#act-justify").hide();

	$("#submitted-comments").toggleClass("hidden unhidden");
}

//form validation to ensure consent form is clicked
function validateForm(x) {
	if(x.checked) {
		document.getElementById("consent-button").classList.remove("disabled");
	} else {
		return false;
	}
}

//set cookie so modal will only show once on first load
$(window).on('load', function() {
	if(!Cookies.get('modalShown')) {
		$('#consent-modal').modal('show');
		$('#consent-modal').load("../public/consent.html");
		Cookies.set('modalShown', true, 2);
	} else {
		console.log("modal has been shown");
	}
})

// load html files in correct divs
$(function() {
	$("#navbar-container").load("../public/navbar.html");
	$("#indicators").load("../public/indicators.html")
	$('#dynasuggestions').load("../public/dynasuggestions.html")
	$('#help-modal').load("../public/help.html")
});


