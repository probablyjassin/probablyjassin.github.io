/*// Helper function to set cookies
function setCookie(name, value) {
	if (getCookie("cookiesAgreeGe") !== 'true') {console.log("Saving cookies has been aborted, cookies haven't been agreed to")}
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
*/
// Background and Button to change it things here
function freezebg() {
	document.body.style.background = "url(./images/cooked.png)";
	document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundBlendMode = "darken";
	document.getElementById("bgbtn").innerHTML = "Unfreeze Background";
	setCookie("background", 'static')
	bgimage = "static"
}
function unfreezebg() {
	document.body.style.background = "url(./images/cooking.webp)";
    document.body.style.background.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundBlendMode = "darken";
	document.getElementById("bgbtn").innerHTML = "Freeze Background";
	setCookie("background", 'gif')
	bgimage = "gif"
}
function swapbg() {
	if (getCookie("background") === 'static' || bgimage === "static") {
			unfreezebg()
		}
		else  {
			freezebg()
		}
}
/*
// Get the video
var video = document.getElementById("cookingmp4");

// Get the button
var btn = document.getElementById("bgbtn");

// Pause and play the video, and change the button text
function pausebg() {
	if (video.paused) {
	video.play();
	setCookie("background", 'static')
	bgimage = "static"
	document.getElementById("bgbtn").innerHTML = "Unfreeze Background";
	} else {
	video.pause();
	setCookie("background", 'gif')
	bgimage = "gif"
	document.getElementById("bgbtn").innerHTML = "Freeze Background";
	}
}
*/

const bgbutton = document.getElementById("bgbtn")
bgbutton.addEventListener("click", function() { swapbg() })

if (getCookie("background") === 'static') {
    freezebg()
	//pausebg()
}
else {
    unfreezebg()
	if (getCookie("cookiesAgreeGe") === 'true') {setCookie("background", 'gif')}
	var bgimage = "gif"
}