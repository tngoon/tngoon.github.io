function ShowHideDiv() {
	//divs for different characteristics
	var opendefault = document.getElementById("default-open");
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
	} else if (speccheck.checked && justcheck.checked && actjust.check {
		complete.style.display = "block";
		opendefault.style.display = "none";
		actjust.style.display = "none";
		spec.style.display = "none";
		justify.style.display = "none";
		action.style.display = "none";
		submit.style.backgroundColor = "#90EE90";
	} else {
		opendefault.style.display = "block";
		action.style.display = "none";
		complete.style.display = "none";
		justify.style.display = "none";
		spec.style.display = "none";
		actjust.style.display = "none";
	}
	
}

function copyText(x) {
		var currentTxt = document.getElementById("comment_text").value;
		document.getElementById("comment_text").value = currentTxt + " " + x.value;
	}