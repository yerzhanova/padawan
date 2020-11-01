function init(){
	let lastPage = 0;
    const tooltips = ['Talent is given true skill is earned', 'Be flexible to change and sturdy in conviction', 'use many' +
    ' skills yet work as one', 'To master anything find interest in everything', 'individuals flourish if culture and' +
    ' wisdom are shared', 'train for perfection but aim for more', 'take pride in your work but do not seek praize', 'temporary sacrifice brings lasting results' ];
    let currentPage = 0;
	// const right = document.getElementById('arrowRight').getElementsByTagName('p')[0];

	const pages = document.getElementById('navigate').getElementsByTagName('li');
	const footerText = document.querySelector('.footerText > p');
	const footerFirstPage = document.querySelectorAll("div.footer > p");
	const arrowLeft = document.querySelector('.arrowLeft');
	const arrowRight = document.querySelector('.arrowRight');
    const leftTooltip = document.getElementById('leftTooltip');
    const rightTooltip = document.getElementById('rightTooltip');
    const leftMessage = document.querySelector('.leftMessage h1');
    const rightMessage = document.querySelector('.rightMessage h1');
    const pagesPosition = [0, 12, 23, 36, 50, 65, 80, 100, 100, 115];
	animateText();
    document.body.addEventListener('animationend', function(){
        document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
    });
    // pagination
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
	//
	function loadPage (pageNumber){
	    //pagination animation
        document.querySelector('div.active').classList.remove('active');
        pages[pageNumber].getElementsByTagName('div')[0].classList.add("active");
        //text of footer animation
        footerText.innerHTML = pageNumber < 9 && pageNumber > 0 ? `Step ${pageNumber} of 8 on the path to digital enlightenment.`:'';
        animateEvents(footerText, 'show');
        document.body.style.backgroundPosition = pagesPosition[pageNumber] + "%";
        
		if (pageNumber === 0) {
			leftTooltip.style.opacity = 1;
			leftMessage.innerHTML = "";
			animateEvents(leftMessage, 'hide');
            footerFirstPage.forEach((p) => {
                animateEvents(p, 'show')
            });
		} else if (currentPage === 0) {
            leftTooltip.style.opacity = 0;
            footerFirstPage.forEach((p) => {
                animateEvents(p, 'hide')
            });
        }
		
		if (pageNumber === 9) {
			rightTooltip.style.opacity = 1;
			leftMessage.innerHTML = "";
			setTimeout(()=> document.getElementById('lastPage').style.display = 'block', 900);
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
    function animateText() {
        let messageInner = document.getElementById('message');
        let message1 = 'Patience!';
        let message2 = ', young padawan...';
        setTimeout(() => {messageInner.innerHTML = message1}, 100);
        setTimeout(() => {messageInner.innerHTML = messageInner.innerHTML.slice(0, -1) + (message2)}, 1500);
    }
    function animateEvents(element, className) {
        element.classList.remove(className);
        window.requestAnimationFrame( function () {
            element.classList.add(className);
        });
    }
}





