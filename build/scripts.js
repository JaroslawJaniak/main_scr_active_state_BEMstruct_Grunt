/* Grunt concat file - 2020-05-21 */
/*js\collapsible-section.js*/

(function() {
	const headings = document.querySelectorAll('h4');

	Array.prototype.forEach.call(headings, h => {
		  let btn = h.querySelector('button');
		  let target = h.nextElementSibling;

		  target.classList.add('target-unexpanded');

		  btn.onclick = () => {
			let expanded = btn.getAttribute('aria-expanded') === 'true';
			btn.setAttribute('aria-expanded', !expanded);

			if(expanded == true) {
				target.classList.add('target-unexpanded');
				target.classList.remove('target-expanded');
				target.hidden = expanded; 
			}
			else {
				target.classList.add('target-expanded');
				target.classList.remove('target-unexpanded');
				target.hidden = expanded; 
			}
		  }
	});
})()

/*js\main__content-header.js*/

window.onscroll = function() {scrollFunction()};
 
function scrollFunction (){
	  if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
		document.getElementById("header").classList.add('main__content-header__on-scroll');
	  } else {
		document.getElementById("header").classList.remove('main__content-header__on-scroll');
	  }
}

/*js\menu__active--track.js*/

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector(".main").scrollIntoView();
	document.querySelector(".window__InnerHeight").innerHTML = window.innerHeight;
	document.querySelector(".window__InnerWidth").innerHTML = window.innerWidth;

  const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
			
          	const id = entry.target.getAttribute('id');
			const nameClass = entry.target.getAttribute('class');
			let nameClassTarget = document.getElementsByClassName(nameClass);
			

		        if (entry.intersectionRatio > 0.0) {
								if (window.innerWidth > 920) {
									nameClassTarget[0].style.transition = "all 2000ms ease";
									nameClassTarget[0].style.paddingTop = "7.5rem"
									nameClassTarget[0].style.opacity = "1";
												
								}

				        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
						document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('unactive');
		        }

						else {
								if (window.innerWidth > 920) {
									nameClassTarget[0].style.opacity = "0";
								}

					document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('unactive');
		          	document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
		        }
        });
    });

  	document.querySelectorAll('section[class]').forEach((section) => {
	console.log("section[id]: " +  section);
		section.style.color = "	#333";
        observer.observe(section);
  });

	if (window.innerWidth <= 920) {
			document.querySelectorAll(`nav li a`).forEach((navlink) => {
				navlink.addEventListener('click', opencloseNav);
			});
	}

	window.onscroll = function(ev) {
			if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

			}
	};

	window.addEventListener("resize", function(){
			if (window.innerWidth <= 920) {
				document.querySelectorAll(`nav li a`).forEach((navlink) => {
					navlink.addEventListener('click', opencloseNav);
				});
			}
			else {
				document.querySelectorAll(`nav li a`).forEach((navlink) => {
					navlink.removeEventListener('click', opencloseNav);
				});
			}

			document.querySelector(".window__InnerHeight").innerHTML = window.innerHeight;
			document.querySelector(".window__InnerWidth").innerHTML = window.innerWidth;
	});
});

/*js\section--nav__overlay.js*/

window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("openbtn").style.color = "#111";
});

(function() {
		let openBtn = document.getElementById("openbtn");
		let closeBtn = document.getElementById("closebtn");

		openBtn.onclick = () => {
		  let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
		  openBtn.setAttribute('aria-expanded', !expanded);

		  if(expanded == false) {
			  openNav();
		  }
		  else {
			  closeNav();
		  }
		}

		closeBtn.onclick = () => {
		  let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
		  openBtn.setAttribute('aria-expanded', !expanded);

		  if(expanded == false) {
			  openNav();
		  }
		  else {
			  closeNav();
		  }
		}
})()

opencloseNav = () => {
	let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
	document.getElementById("openbtn").setAttribute('aria-expanded', !expanded);
	if(expanded == false) {
			openNav();
	}
	else {
			closeNav();
	}
}

openNav = () => {
	document.getElementById("section--nav__overlay").style.height = "100%";
	document.getElementById("section--nav__overlay").style.opacity = "1";
	document.getElementById("section--nav__overlay").style.visibility = "visible";
	document.getElementById("section--nav__overlay").style.display = "block";
	document.getElementById("closebtn").style.display = "block";

	document.getElementById("openbtn").style.color = "#111";
}

closeNav = () => {
	document.getElementById("section--nav__overlay").style.height = "0%";
	document.getElementById("section--nav__overlay").style.opacity = "0";
	document.getElementById("section--nav__overlay").style.visibility = "hidden";
	document.getElementById("closebtn").style.display = "none";
	document.getElementById("openbtn").style.color = "#efefef";
	
	if (window.innerWidth <= 920) {
		document.getElementById("section--nav__overlay").style.display = "none";
	}
}
