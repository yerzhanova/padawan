function init(){
    const tooltips = ['Talent is given true skill is earned', 'Be flexible to change and sturdy in conviction', 'use many' +
    ' skills yet work as one', 'To master anything find interest in everything', 'individuals flourish if culture and' +
    ' wisdom are shared', 'train for perfection but aim for more', 'take pride in your work but do not seek praize', 'temporary sacrifice brings lasting results' ];
	const wrapper = document.getElementById('wrapper');
	const pages = document.getElementById('navigate').getElementsByTagName('li');
	const footerText = document.querySelector(".footerText > p");
	const footerFirstPage = document.querySelectorAll("div.footer > p");
	const arrowLeft = document.querySelector(".arrowLeft");
	const arrowRight = document.querySelector(".arrowRight");
    const leftTooltip = document.getElementById("leftTooltip");
    const rightTooltip = document.getElementById("rightTooltip");
    const leftMessage = document.querySelector(".leftMessage h1");
    const rightMessage = document.querySelector(".rightMessage h1");
    const pagesPosition = [0, 12, 23, 36, 50, 65, 80, 100, 100, 115];
	let currentPage = 0;
	let lastPage = 0;
	
	wrapper.addEventListener('animationend', function(){
        document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
	});
	document.getElementById('arrowRight').addEventListener('click', (e) => {
		if (currentPage < 9)
			loadPage(currentPage + 1);
	});
	document.getElementById('arrowLeft').addEventListener('click', (e) => {
    	if (currentPage > 0)
        	loadPage(currentPage - 1);
	});
	for (let i=0; i < pages.length; i++){
		pages[i].querySelector('div').addEventListener('click', (e) => {
			loadPage(i);
		})
	}
	setTimeout(() => loadPage(lastPage), 3000);
	
	function loadPage (pageNumber){
        document.querySelector('div.active').classList.remove('active');
        pages[pageNumber].getElementsByTagName('div')[0].classList.add("active");
        footerText.innerHTML = pageNumber < 9 && pageNumber > 0 ? `Step ${pageNumber} of 8 on the path to digital enlightenment.`:'';
        animateEvents(footerText, 'show');
        document.body.style.backgroundPosition = pagesPosition[pageNumber] + "%";
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
        
		if (pageNumber === 0) {
			arrowLeft.style.display = 'none';
			leftTooltip.style.opacity = 1;
			leftMessage.innerHTML = "";
            footerFirstPage.forEach((p) => {
	            p.classList.add('show');
	            p.classList.remove('hide');
            });
			animateEvents(leftMessage, 'hide');
		} else if (currentPage === 0) {
            leftTooltip.style.opacity = 0;
            footerFirstPage.forEach((p) => {
	            p.classList.add('hide');
	            p.classList.remove('show');
            });
        }
		
		if (pageNumber === 9) {
			arrowRight.style.display = 'none';
			rightTooltip.style.opacity = 1;
			leftMessage.innerHTML = "";
			setTimeout(()=> document.getElementById('lastPage').style.display = 'block', 700);
		} else if (currentPage === 9) {
			rightTooltip.style.opacity = 0;
            document.getElementById('lastPage').style.display = 'none';
		}

		if ((pageNumber > 0 && pageNumber < 3)|| (pageNumber > 5 && pageNumber < 9)) {
            rightMessage.innerHTML = "";
            leftMessage.innerHTML = tooltips[pageNumber - 1];
            animateEvents(leftMessage, 'show');
        } else if (pageNumber > 2 && pageNumber < 6) {
            leftMessage.innerHTML = "";
            rightMessage.innerHTML = tooltips[pageNumber - 1];
            animateEvents(rightMessage, 'show');
        }
        
        lastPage = pageNumber;
        currentPage = pageNumber;
	}
	
    function animateEvents(element, className) {
        element.classList.remove(className);
        window.requestAnimationFrame( function () {
            element.classList.add(className);
        });
    }
}





