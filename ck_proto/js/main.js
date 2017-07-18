//divs for different characteristics
var opendefault = document.getElementById("default-open");
var spec = document.getElementById("need-specific");
var action = document.getElementById("need-actionable");
var justify = document.getElementById("need-justify");
var complete = documnet.getElementById("complete")

//checkboxes
var speccheck = document.getElementById("speccheck");
var actcheck = document.getElementById("actcheck");
var justcheck = document.getElementById("justcheck");

var submit = document.getElementById("submit-comment");

//
function ShowHideDiv() {
	if(!speccheck.checked) {
		complete.style.display="none";
		opendefault.style.display="none";
		spec.style.display="block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(!actcheck.checked) {
		complete.style.display="none";
		opendefault.style.display="none";
		action.style.display="block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(!justify.checked) {
		complete.style.display="none";
		opendefault.style.display="none";
		justify.style.display="block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(spec.checked && action.checked && justify.checked) {
		complete.style.display="block";
		opendefault.style.display="none";
		spec.style.display="none";
		action.style.display="none";
		justify.style.display="none";
		submit.style.backgroundColor = "#90EE90"
	}
}

function copyText(x) {
		var currentTxt = document.getElementById("comment_text").value;
		document.getElementById("comment_text").value = currentTxt + " " + x.value;
	}