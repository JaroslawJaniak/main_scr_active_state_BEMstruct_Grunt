/* Grunt concat file - 2020-05-21 */
(function() {
	  const headings = document.querySelectorAll('h4');

	  Array.prototype.forEach.call(headings, h => {
			let btn = h.querySelector('button');
			let target = h.nextElementSibling;
			let subtarget = target.firstElementChild;

			target.classList.add('target-unexpanded');

			btn.onclick = () => {
			  let expanded = btn.getAttribute('aria-expanded') === 'true';
			  btn.setAttribute('aria-expanded', !expanded);

			  if(expanded == true) {
				  console.log(" if -> target: " + target);
				  target.classList.add('target-unexpanded');
				  target.classList.remove('target-expanded');
			  }
			  else {
				  console.log(" else -> target: " + target);
				  target.classList.add('target-expanded');
				  target.classList.remove('target-unexpanded');
			  }
			}
	  });
})()

 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction (){
	  if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
		document.getElementById("header").classList.add('main__content-header__on-scroll');
	  } else {
		document.getElementById("header").classList.remove('main__content-header__on-scroll');
	  }
}
window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("main").scrollIntoView();
	document.getElementById("window__InnerHeight").innerHTML = window.innerHeight;
	document.getElementById("window__InnerWidth").innerHTML = window.innerWidth;

  const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          	const id = entry.target.getAttribute('id');

		        if (entry.intersectionRatio > 0.0) {
								if (window.innerWidth > 920) {
									document.getElementById(id).style.transition = "all 2000ms ease";
									document.getElementById(id).style.paddingTop = "6.5rem"
									document.getElementById(id).style.opacity = "1";
								}

				        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
								document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('unactive');
		        }

						else {
								if (window.innerWidth > 920) {
									document.getElementById(id).style.opacity = "0";
								}

								document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('unactive');
		          	document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
		        }
        });
    });

	// Track all sections that have an `id` applied
	// 'adds an element to the set of target elements being watched by the IntersectionObserver'
  document.querySelectorAll('section[id]').forEach((section) => {
		section.style.color = "	#333";
        observer.observe(section);
  });

	//jesli dokument otwarto w oknie mnijszym równym 920
	if (window.innerWidth <= 920) {
			document.querySelectorAll(`nav li a`).forEach((navlink) => {
				navlink.addEventListener('click', opencloseNav);
			});
	}

	window.onscroll = function(ev) {
			if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

			}
	};

	//przy zmianie rozmiarow okna dokumentu nadaj funkcjonalnosci ponizej
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

			document.getElementById("window__InnerHeight").innerHTML = window.innerHeight;
			document.getElementById("window__InnerWidth").innerHTML = window.innerWidth;
	});
});

window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("openbtn").classList.add('menu__button__openbtn__active');
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

//ta funkcja uzyta jest w pliku 'menu__active--track.js' i podpieta jest pod linki nawigacji przy rozdzielczosci mniejszej niz 920px
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
	//document.getElementById("openbtn").classList.add('menu__button__openbtn__active'); //do wywalenia raczej
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
