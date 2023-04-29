var AINTNOCookie = ''
var bgimage = ''
// Helper function to set cookies
function setCookie(name, value) {
	if (AINTNOCookie === 'true') {console.log("Saving cookies has been aborted, cookies haven't been agreed to")}
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

// Background and Button to change it things here
function freezebg() {
	document.body.style.background = "url(./images/cooked.png)";
	document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundBlendMode = "darken";
	document.getElementById("bgbtn").innerHTML = "Unfreeze Background";
	setCookie("background", 'static')
}
function unfreezebg() {
	document.body.style.background = "url(https://frog.lowkey.gay/u/Fj1u1O.gif)";
    document.body.style.background.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundBlendMode = "darken";
	document.getElementById("bgbtn").innerHTML = "Freeze Background";
	setCookie("background", 'gif')
}
function swapbg() {
	if (getCookie("background") === 'static') {
			unfreezebg()
		}
		else  {
			freezebg()
		}
}


const bgbutton = document.getElementById("bgbtn")
bgbutton.addEventListener("click", function() { swapbg() })

if (getCookie("background") === 'static') {
    freezebg()
}
else {
    unfreezebg()
	setCookie("background", 'gif')
}