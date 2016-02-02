var parallaxBackgroundOffset = 40;
var basicParallaxOffset = document.getElementById('page-heading').clientHeight + document.getElementById('first-para').clientHeight;
document.getElementsByClassName('basic-parallax-panel')[0].style.height = window.innerHeight - basicParallaxOffset - parallaxBackgroundOffset + 'px';
document.getElementsByClassName('moving-background')[0].style.height = window.innerHeight - basicParallaxOffset + 'px';
document.getElementsByClassName('big-circle')[0].style.bottom = -document.getElementsByTagName('body')[0].clientHeight + "px";

//Binding Scroll event to produce parallax
window.addEventListener("scroll", parallaxScroll, false);

//Code for handling parallax effect
function parallaxScroll() {
	var opacityOfParallaxObject = 1 - (window.pageYOffset / window.innerHeight * 1.5);

	//Code for Primary Parallax effect
	document.getElementsByClassName('moving-background')[0].style.top = -(window.pageYOffset / 5 - basicParallaxOffset - parallaxBackgroundOffset ) + 'px';
	document.getElementsByClassName('parallax-content')[0].style.opacity = opacityOfParallaxObject;
	
	//Code for Secondary Parallax effect
	var scrollPositionBreakpoint = document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + parallaxBackgroundOffset;
	if(window.pageYOffset > scrollPositionBreakpoint) {
		document.getElementsByClassName('small-circle')[0].style.bottom = ((window.pageYOffset - scrollPositionBreakpoint) / 2) + "px";
		document.getElementsByClassName('small-circle')[0].style.opacity = -opacityOfParallaxObject / 1.5;
	}
	if(window.pageYOffset < scrollPositionBreakpoint) {
		document.getElementsByClassName('small-circle')[0].style.bottom = -(document.getElementsByClassName('small-circle')[0].clientHeight) + "px";
	}

	//Code for Reverse Parallax effect
	document.getElementsByClassName('big-circle')[0].style.bottom = (-document.getElementsByTagName('body')[0].clientHeight + window.pageYOffset * 2.3) + "px";
	if(window.pageYOffset > document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('content-end')[0].clientHeight) {
		document.getElementsByClassName('big-circle')[0].style.opacity = -opacityOfParallaxObject;
	}
}
