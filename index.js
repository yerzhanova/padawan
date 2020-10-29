let lastPage = 0;
function init(){
    const tooltips = ['Talent is given true skill is earned', 'Be flexible to change and sturdy in conviction', 'use many' +
    ' skills yet work as one', 'To master anything find interest in everything', 'individuals flourish if culture and' +
    ' wisdom are shared', 'train for perfection but aim for more', 'take pride in your work but do not seek praize', 'temporary sacrifice brings lasting results' ];
    const pagination = document.getElementById('navigate').children;
    let currentPage = 0;
	// const right = document.getElementById('arrowRight').getElementsByTagName('p')[0];

	const pages = document.getElementById('navigate').getElementsByTagName('li');
	const footerMessage = document.querySelector('.footerText > p');
	const footerText = document.querySelectorAll("div.footer > p");
	const arrowLeft = document.querySelector('.arrowLeft');
	const arrowRight = document.querySelector('.arrowRight');
    const leftTooltip = document.getElementById('leftTooltip');
    const rightTooltip = document.getElementById('rightTooltip');
    const leftMessage = document.querySelector('.leftMessage h1');
    const rightMessage = document.querySelector('.rightMessage h1');
    const pagesPosition = [0, 8, 23, 37, 51, 65, 80, 100, 100, 115];
	animateText();
    document.body.addEventListener('animationend', function(){
        document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
        // document.body.style.backgroundPosition = "0%";
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
        console.log("pagenumbers", lastPage, pageNumber);
        //text of footer animation
        footerMessage.innerHTML = pageNumber < 9&& pageNumber > 0?`Step ${pageNumber} of 8 on the path to digital enlightenment.`:'';
        // leftTooltip.innerHTML = ((pageNumber > 0 && pageNumber < 3) || (pageNumber > 5 && pageNumber < 9))?tooltips[currentPage]:'';
        animateEvents(footerMessage, 'show');
        document.body.style.backgroundPosition = pagesPosition[pageNumber] + "%";
		if (pageNumber === 0) {
			leftTooltip.style.opacity = 1;
		} else if (currentPage === 0) {
			leftTooltip.style.opacity = 0;
		}
		if (pageNumber === 9) {
			rightTooltip.style.opacity = 1;
            document.getElementById('lastPage').style.display = 'inline-block';
			// animateEvents(document.getElementById('lastPage'), 'show');
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
        //if element has not className
        element.classList.remove(className);
        window.requestAnimationFrame( function () {
        	console.log("2222");
            element.classList.add(className);
            console.log('3333');
        });
    }
}





