let positionX = 0;
let currentPage = 0;
let tooltips = ['Talent is given true skill is earned', 'Be flexible to change and sturdy in conviction', 'use many' +
' skills yet work as one', 'To master anything find interest in everything', 'individuals flourish if culture and' +
' wisdom are shared', 'train for perfection but aim for more', 'take pride in your work but do not seek praize', 'temporary sacrifice brings lasting results' ];

let pages = null;
let footerMessage = null;
function init(){
	let pagination = document.getElementById('navigate').children;
	pagination[currentPage].style.class = 'active';
	console.log("p", pagination);
	pages = document.getElementById('navigate').getElementsByTagName('li');
	footerMessage = document.getElementsByClassName('footerText')[0].children[0];
	console.log("footer", footer)
	// let start = new Date();
	// let currentPage = 0;
	animateText();
	// let monk = document.querySelector('#monk');
	// console.log("animate");
	// monk.animate([{"height": "0px"}, {"height": "149px"}], {"duration": 500});
	// let timer = setInterval(function(){
	// 	let timePassed = new Date() - start;
	// 	if (timePassed > 3000) {
	// 		clearInterval(timer); //end after 2 sec
			// monk.style.display = 'none';
			// message.innerHTML = '';
			// showWrapper();
			// return;
		// }
		// jumpMonk(timePassed);
	// }, 20);
	
	// function jumpMonk(timePassed) {
	// 	if (timePassed < 447) {
	// 		monk.style.height = timePassed / 3 + 'px';
	// 		if (timePassed > 298) {
	// 			message.style.fontSize = timePassed / 24 + 'px'
	// 		}
	// 	} else if (timePassed > 2000) {
	// 		// monk.style.height = 149 - timePassed/150 + 'px';
	// 	}
	// 	monk.style.top = timePassed/50 + 'px';
	// }
	
	// function showWrapper(){
	// 	// if (currentPage === 0) {
	// 	// 	console.log(document.getElementsByClassName('li'));
	// 	// }
	// 	console.log('wrapper is visible now');
	// 	wrapper.style.display = 'block';
	// 	document.body.style.backgroundPosition = '0% 0%';
	// 	document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
	// 	document.body.style.backgroundRepeat = 'no-repeat';
	// 	// footer.style.display = 'block';
	// }
	
}
function animateText() {
	let messageInner = document.getElementById('message');
	let message1 = 'Patience!';
	let message2 = ', young padawan...';
	setTimeout(() => {messageInner.innerHTML = message1}, 100);
	setTimeout(() => {messageInner.innerHTML = messageInner.innerHTML.slice(0, -1) + (message2)}, 1500);
}
function clickRight() {
	if (currentPage < 9) {
		let leftTooltip = document.getElementById('leftTooltip');
		let rightTooltip = document.getElementById('rightTooltip');
		
		if (currentPage === 0) {
			positionX += 15;
		} else if (currentPage >= 1 && currentPage < 8) {
			positionX += 12;
		} else if (currentPage === 8) {
			positionX += 15;
			console.log(40, 'dedd')
		} else {
			return;
		}
		
		let changePage = () => {
			console.log(currentPage);
			console.log(pages[currentPage + 1].getElementsByTagName('div')[0], "fffss");
			pages[currentPage].getElementsByTagName('div')[0].classList.remove("active");
			pages[currentPage + 1].getElementsByTagName('div')[0].classList.add("active");
			footerMessage.innerHTML = currentPage < 8?`Step ${currentPage + 1} of 8 on the path to digital enlightenment.`:'';
			if (currentPage < 2 || currentPage > 6) {
				// leftTooltip.animate({opacity: 0}, 1000);
				rightTooltip.animate({opacity: 0}, 1000);
				// pages[currentPage + 1].getElementsByTagName('div')[0].style.className = 'active';
				leftTooltip.innerHTML = tooltips[currentPage];
			} else if (currentPage >= 2 && currentPage < 5) {
				// rightTooltip.animate({opacity: 0}, 1000);
				
				leftTooltip.animate({opacity: 0}, 1000);
				leftTooltip.style.display = 'none';
				rightTooltip.innerHTML = tooltips[currentPage];
			}
		};
		let options = {"duration": 1000};
		let leftPos = {"backgroundPosition": "0%"};
		let rigthPos = {"backgroundPosition": "15%"};
		let p = document.getElementsByClassName('footerText')[0];
		document.body.animate(rigthPos, options, changePage());
		currentPage++;
	}
}
function clickLeft(){
	if (currentPage > 0) {
		console.log('click left', currentPage);
		pages[currentPage].getElementsByTagName('div')[0].classList.remove("active");
		pages[currentPage - 1].getElementsByTagName('div')[0].classList.add("active");
		footerMessage.innerHTML = currentPage > 1?`Step ${currentPage - 1} of 8 on the path to digital enlightenment.`:'';
		if (currentPage === 1) {
			positionX -= 15;
		} else if (currentPage >= 1 && currentPage < 9) {
			positionX -= 12;
		} else if (currentPage === 9) {
			positionX -= 15;
		} else {
			return;
		}
		
		console.log('move to the left', currentPage);
		document.body.style.backgroundPosition = positionX + '%';
		currentPage--;
	}
}


