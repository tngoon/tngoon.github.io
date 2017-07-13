function ShowHideDiv() {
	var opendefault = document.getElementById("default-open");
	var needspec = document.getElementById("need-specific");
	var needsol = document.getElementById("need-solution");
	var needprob = document.getElementById("need-problem");
	var complete = document.getElementById("complete");
	
	var poscheck = document.getElementById("poscheck");
	var speccheck = document.getElementById("speccheck");
	var probcheck = document.getElementById("probcheck");
	var solcheck = document.getElementById("solcheck");

	var submit = document.getElementById("submit-comment");

	if(probcheck.checked && !solcheck.checked) {
		complete.style.display = "none";
		opendefault.style.display = "none";
		needsol.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(probcheck.checked && solcheck.checked) {
		opendefault.style.display = "none";
		needprob.style.display = "none";
		needsol.style.display = "none";
		complete.style.display = "block";
		submit.style.backgroundColor = "#90EE90"
	} else if(solcheck.checked && !probcheck.checked) {
		opendefault.style.display = "none";
		needsol.style.display = "none";
		complete.style.display = "none"
		needprob.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else {
		needspec.style.display = "none";
		needprob.style.display = "none";
		needsol.style.display = "none";
		complete.style.display = "none";
		opendefault.style.display = "block";
	}

	if(!speccheck.checked) {
		opendefault.style.display = "none";
		complete.style.display = "none";	
		needspec.style.display = "block";
		submit.style.backgroundColor = "#F0E68C";
	} else if(poscheck.checked && speccheck.checked) {
		complete.style.display = "block";
		opendefault.style.display = "block";
		needspec.style.display = "none";
		submit.style.backgroundColor = "#90EE90"
	} else if(speccheck.checked){
		needspec.style.display = "none";
	} 

}