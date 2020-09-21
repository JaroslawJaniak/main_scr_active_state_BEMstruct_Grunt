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

			document.querySelector(".window__InnerHeight").innerHTML = window.innerHeight;
			document.querySelector(".window__InnerWidth").innerHTML = window.innerWidth;
	});
});