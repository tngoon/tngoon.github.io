// copy text of suggestion button to textbox
function copyText(x) {
		var currentTxt = document.getElementById("comment_text").value;
		document.getElementById("comment_text").value = currentTxt + " " + x.value;
	}

// show and hide different suggestions based on checkboxes
function ShowHideDiv() {
	//divs for different characteristics
	var opendefault = document.getElementById("default-open");
	var spec = document.getElementById("need-specific");
	var action = document.getElementById("need-actionable");
	var justify = document.getElementById("need-justify");
	var complete = document.getElementById("complete");
	var actjust = document.getElementById("act-justify");

	//checkboxes
	var speccheck = document.getElementById("specific");
	var actcheck = document.getElementById("actionable");
	var justcheck = document.getElementById("justify");

	var submit = document.getElementById("submit-comment");

	if(speccheck.checked && !actcheck.checked && !justcheck.checked) {
		opendefault.style.display = "none";
		actjust.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	 } else if(speccheck.checked && !justcheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		action.style.display = "none";
		justify.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(speccheck.checked && !actcheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		justify.style.display = "none";
		action.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(!speccheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		spec.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else {
		complete.style.display = "block";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		justify.style.display = "none";
		action.style.display = "none";
		submit.style.backgroundColor = "#90EE90";
	}
	
}

// filter suggestions based on what user is typing
function filterSuggestions() {
	var input = document.getElementById("comment_text");
	var box = document.getElementById("dynasuggestions");
	var list = box.getElementsByTagName("input");
	var filter = input.value.toUpperCase();
	var timeout = null;

	for (i=0; i<list.length; i++) {
		a=list[i].value;
		if (a.toUpperCase().indexOf(filter) > 0) {
			list[i].style.display= "";
		} else {
			list[i].style.display= "none";
		}
	}

	// clearTimeout(timeout);
	// timeout = setTimeout(function () {
	// 	document.getElementById("need-specific").style.display="block";
	// 	document.getElementById("default-open").style.display="none";
	// 	if (document.getElementById("specific").checked) {
	// 		document.getElementById("need-specific").style.display="none";
	// 	}
	// }, 5000);
}

// load navbar in its place
$(function() {
	$("#navbar-container").load("../public/navbar.html")
});