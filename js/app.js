/*document.addEventListener('DOMContentLoaded',function() {

});
*/

const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function fixNav() {
	console.log(topOfNav);
	if(window.scrollY >= topOfNav) {
		document.body.classList.add('fixed-nav');
	}
	else	document.body.classList.remove('fixed-nav');
}

window.addEventListener('scroll', fixNav);
