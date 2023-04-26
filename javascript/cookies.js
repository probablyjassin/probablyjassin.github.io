// Helper function to set cookies
function setCookie(name, value) {
	document.cookie = name + "=" + value + ";path=/";
}

  // Helper function to get cookies
  function getCookie(name) {
	const cookieString = decodeURIComponent(document.cookie);
	const cookies = cookieString.split(';');
	for (let i = 0; i < cookies.length; i++) {
	  let cookie = cookies[i].trim();
	  if (cookie.indexOf(name + "=") === 0) {
		return cookie.substring(name.length + 1, cookie.length);
	  }
	}
	return "";
  }

//cookie popup things happening here
agreebutton.addEventListener("click", function() {
    cookiesAgreeGe();
});

function cookiesAgreeGe() {
	setCookie("cookiesAgreeGe", 'true')
}
function hidePopup() {
	document.getElementById("cookie-popup").style.display = "none";
}
// hide popup if already agreed
if (getCookie("cookiesAgreeGe") === 'true') {
	hidePopup()
}

// not showing popup during development
// hidePopup()