var basicParallaxOffset = document.getElementById('page-heading').clientHeight + document.getElementById('first-para').clientHeight;
document.getElementsByClassName('basic-parallax-panel')[0].style.height = window.innerHeight - basicParallaxOffset + 'px';
document.getElementsByClassName('moving-background')[0].style.height = window.innerHeight - basicParallaxOffset + 'px';

//Bind Scroll event
window.addEventListener("scroll", parallaxScroll, false);

//handling parallax effect
function parallaxScroll() {
	var opacityOfParallaxObject = 1 - window.pageYOffset / window.innerHeight;
	var darkCircleOffset = 40;

	//Primary Parallax code
	document.getElementsByClassName('moving-background')[0].style.top = -(window.pageYOffset / 5 - basicParallaxOffset ) + 'px';
	document.getElementsByClassName('parallax-content')[0].style.opacity = opacityOfParallaxObject;

	//Secondary Parallax code
	if(window.pageYOffset > document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset) {
		document.getElementsByClassName('dark-circle')[0].style.bottom = ((window.pageYOffset - (document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset)) / 2) + "px";
		document.getElementsByClassName('dark-circle')[0].style.opacity = -opacityOfParallaxObject / 1.5;
	}
	if(window.pageYOffset < document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset) {
		document.getElementsByClassName('dark-circle')[0].style.bottom = -(document.getElementsByClassName('dark-circle')[0].clientHeight) + "px";
	}
}
