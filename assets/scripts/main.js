var ignoreHeight = document.getElementById('page-heading').clientHeight + document.getElementById('first-para').clientHeight;
document.getElementsByClassName('dark-circle')[0].style.bottom = -(document.getElementsByClassName('dark-circle')[0].clientHeight) + "px";
var circleBottom = document.getElementsByClassName('dark-circle')[0].style.bottom.match(/\d/g).join("");
var darkCircleOffset = 40;

function parallaxScroll() {
	document.getElementsByClassName('moving-background')[0].style.top = -(window.pageYOffset / 5 - ignoreHeight ) + 'px';
	var opacityDiv = 1 - window.pageYOffset / window.innerHeight;
	document.getElementsByClassName('parallax-content')[0].style.opacity = opacityDiv;
	console.log(window.pageYOffset);
	console.log(document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset);
	if(window.pageYOffset > document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset) {
		document.getElementsByClassName('dark-circle')[0].style.bottom = ((window.pageYOffset - (document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset)) / 2) + "px";
		document.getElementsByClassName('dark-circle')[0].style.opacity = -opacityDiv / 1.5;
	}
	if(window.pageYOffset < document.getElementsByTagName('body')[0].clientHeight - window.innerHeight - document.getElementsByClassName('form')[0].clientHeight - document.getElementsByClassName('content-end')[0].clientHeight + darkCircleOffset) {
		document.getElementsByClassName('dark-circle')[0].style.bottom = -circleBottom + "px";
	}
}

window.addEventListener("scroll", parallaxScroll, false);
document.getElementsByClassName('main-panel')[0].style.height = window.innerHeight - ignoreHeight + 'px';
document.getElementsByClassName('moving-background')[0].style.height = document.getElementsByClassName('main-panel')[0].clientHeight + "px";
