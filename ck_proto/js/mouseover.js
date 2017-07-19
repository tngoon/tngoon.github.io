function MouseOver() {
	var speccheck = document.getElementById("speccheck");
	var actcheck = document.getElementById("actcheck");
	var justcheck = document.getElementById("justcheck");

	var specific = document.getElementById("specific");
	var actionable = document.getElementById("actionable");
	var justify = document.getElementById("justified");

	if(speccheck.onmouseover=true) {
		specific.style.diplay="block";
		console.log("this works");
	}
}



// speccheck.onmouseover = function() {
// 	specific.style.display="block";
// }

// speccheck.onmouseout = function() {
// 	specific.style.display = "none";
// }

// actcheck.onmouseover = function() {
// 	actionable.style.display="block";
// }

// actcheck.onmouseout = function() {
// 	actionable.style.display = "none";
// }

// justcheck.onmouseover = function() {
// 	justify.style.display="block";
// }

// justcheck.onmouseout = function() {
// 	justify.style.display = "none";
// }