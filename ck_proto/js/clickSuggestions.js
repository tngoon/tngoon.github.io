function copyText(x) {
		var currentTxt = document.getElementById("comment_text").value;
		document.getElementById("comment_text").value = currentTxt + " " + x.value;
	}