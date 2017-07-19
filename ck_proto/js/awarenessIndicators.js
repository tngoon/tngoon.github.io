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

// function ShowHideDiv() {
// 	var opendefault = document.getElementById("default-open");
// 	var needspec = document.getElementById("need-specific");
// 	var needsol = document.getElementById("need-solution");
// 	var needprob = document.getElementById("need-problem");
// 	var complete = document.getElementById("complete");
	
// 	var poscheck = document.getElementById("poscheck");
// 	var speccheck = document.getElementById("speccheck");
// 	var probcheck = document.getElementById("probcheck");
// 	var solcheck = document.getElementById("solcheck");

// 	var submit = document.getElementById("submit-comment");

// 	if(probcheck.checked && !solcheck.checked) {
// 		complete.style.display = "none";
// 		opendefault.style.display = "none";
// 		needsol.style.display = "block";
// 		submit.style.backgroundColor = "#F0E68C";
// 	} else if(probcheck.checked && solcheck.checked) {
// 		opendefault.style.display = "none";
// 		needprob.style.display = "none";
// 		needsol.style.display = "none";
// 		complete.style.display = "block";
// 		submit.style.backgroundColor = "#90EE90"
// 	} else if(solcheck.checked && !probcheck.checked) {
// 		opendefault.style.display = "none";
// 		needsol.style.display = "none";
// 		complete.style.display = "none"
// 		needprob.style.display = "block";
// 		submit.style.backgroundColor = "#F0E68C";
// 	} else {
// 		needspec.style.display = "none";
// 		needprob.style.display = "none";
// 		needsol.style.display = "none";
// 		complete.style.display = "none";
// 		opendefault.style.display = "block";
// 	}

// 	if(!speccheck.checked) {
// 		opendefault.style.display = "none";
// 		complete.style.display = "none";	
// 		needspec.style.display = "block";
// 		submit.style.backgroundColor = "#F0E68C";
// 	} else if(poscheck.checked && speccheck.checked) {
// 		complete.style.display = "block";
// 		// opendefault.style.display = "block";
// 		needspec.style.display = "none";
// 		submit.style.backgroundColor = "#90EE90"
// 	} else if(speccheck.checked){
// 		needspec.style.display = "none";
// 	} 

// }