// Setting this variable to true prevents cookies from being stored and the statistic chart being drawn
function declineCookies() {
	AINTNOCookie = 'true'
}
function hidePopup() {
	document.getElementById("cookie-popup").style.display = "none";
}
// Helper function to set cookies
function setCookie(name, value) {
	if (AINTNOCookie = 'true') {console.log("Saving Cookies Was Aborted, Cookies Haven't Been Agreed To")}
	else {
	document.cookie = name + "=" + value + ";path=/";
}}

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

// Buttons for agree/disagree with cookie agreement
function cookiesAgreeGe() {
	setCookie("cookiesAgreeGe", 'true')
}
// Add event listener to decline Button for cookie popup
const declineButton = document.getElementById("declineButton");

declineButton.addEventListener("click", function() {
	declineCookies()
});
// hide popup if already agreed
if (getCookie("cookiesAgreeGe") === 'true') {
	hidePopup()
}

// not showing popup during development
// hidePopup()