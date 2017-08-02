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

	clearTimeout(timeout);
	timeout = setTimeout(function () {
		document.getElementById("need-specific").style.display="block";
		document.getElementById("default-open").style.display="none";
		if (document.getElementById("specific").checked) {
			document.getElementById("need-specific").style.display="none";
		}
	}, 5000);


}


// var specific = document.getElementById("need-specific");
	// var actionable = document.getElementById("need-actionable");
	// var justified = document.getElementById("need-justify");
	// var actjustify = document.getElementById("act-justify");
	// var speccheck = document.getElementById("specific");
	// var actcheck = document.getElementById("actionable");
	// var justcheck = document.getElementById("justify");