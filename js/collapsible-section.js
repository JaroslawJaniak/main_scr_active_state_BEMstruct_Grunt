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