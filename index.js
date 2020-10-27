const tooltips = ['Talent is given true skill is earned', 'Be flexible to change and sturdy in conviction', 'use many' +
' skills yet work as one', 'To master anything find interest in everything', 'individuals flourish if culture and' +
' wisdom are shared', 'train for perfection but aim for more', 'take pride in your work but do not seek praize', 'temporary sacrifice brings lasting results' ];

let positionX = 0;
let currentPage = 0;
let footerText = null;
let pages = null;
let footerMessage = null;

function init(){
	const pagination = document.getElementById('navigate').children;
	const right = document.getElementById('arrowRight').getElementsByTagName('p')[0];
	body = document.body.classList;
	pagination[currentPage].style.class = 'active';
	pages = document.getElementById('navigate').getElementsByTagName('li');
	footerMessage = document.getElementsByClassName('footerText')[0].children[0];
	footerText = document.querySelectorAll("div.footer > p");

	animateText();
	document.body.addEventListener('animationend', function(){
		console.log("animation end");
		document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
	});

	for (let p of footerText){
		p.addEventListener('animationend', function () {
			console.log('footer p animation end');
			if (currentPage === 0) {
				console.log("p cl", p.classList);
				// p.classList.remove('hide');
			} else if (currentPage === 1) {
				console.log("p cl 1", p.classList)
			}
		});
	}
	for (let i=0; i < pages.length; i++){
		pages[i].querySelector('div').addEventListener('click', function (){
			loadPage(i);
		})
	}
	
	function loadPage (pageNumber){
		document.querySelector('div.active').classList.remove('active');
		pages[pageNumber].getElementsByTagName('div')[0].classList.add("active");
		if (pageNumber === 8) {
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.add('hide');
			document.getElementById('leftText').getElementsByTagName('p')[1].classList.add('show');
		} else {
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.remove('show');
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.add('hide');
		}
		console.log('do smth', pageNumber);
		for (let i=0; i < 9; i++){
			document.body.classList.remove(`move${pageNumber}`)
		}
		document.body.classList.add(`move${pageNumber}`);
	}
	
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
		if (currentPage === 0) {
			// document.body.classList.add('move12');
			// document.body.classList.remove('remove12');
			console.log(document.querySelectorAll("div.footer > p"), "gg");
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.remove('show');
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.add('hide');
			console.log(footerText);
			for (let p of footerText) {
				p.classList.add('hide');
				p.classList.remove('show');
			}
		} else {
		}
		let leftTooltip = document.getElementById('leftTooltip');
		let rightTooltip = document.getElementById('rightTooltip');
		console.log("click right", currentPage);
		pages[currentPage].getElementsByTagName('div')[0].classList.remove("active");
		pages[currentPage + 1].getElementsByTagName('div')[0].classList.add("active");
		footerMessage.innerHTML = currentPage < 8?`Step ${currentPage + 1} of 8 on the path to digital enlightenment.`:'';
		// if (currentPage === 0) {
		// 	// positionX += 15;
		// 	document.body.classList.add('move15');
		// 	// setTimeout(() => {
		// 	// 	// document.body.classList.remove('move15');
		// 	// }, 1000);
		// // } else if (currentPage >= 1 && currentPage < 8) {
		// // 	positionX += 12;
		// // 	console.log("list", document.body.classList);
		// 	document.body.classList.add('move12');
		// 	// document.body.classList.add('move12');
		// } else if (currentPage === 8) {
		// 	// positionX += 15;
		// 	// console.log(40, 'dedd')
		// } else {
		// 	return;
		// }
		// let changePage = () => {
		// 	console.log(currentPage);
		// 	console.log(pages[currentPage + 1].getElementsByTagName('div')[0], "fffss");
		//
		// 	if (currentPage < 2 || currentPage > 6) {
		// 		// leftTooltip.animate({opacity: 0}, 1000);
		// 		rightTooltip.animate({opacity: 0}, 1000);
		// 		// pages[currentPage + 1].getElementsByTagName('div')[0].style.className = 'active';
		// 		leftTooltip.innerHTML = tooltips[currentPage];
		// 	} else if (currentPage >= 2 && currentPage < 5) {
		// 		// rightTooltip.animate({opacity: 0}, 1000);
		//
		// 		leftTooltip.animate({opacity: 0}, 1000);
		// 		leftTooltip.style.display = 'none';
		// 		rightTooltip.innerHTML = tooltips[currentPage];
		// 	}
		// };
		// let options = {"duration": 1000};
		// let leftPos = {"backgroundPosition": "0%"};
		// let rigthPos = {"backgroundPosition": "15%"};
		// let p = document.getElementsByClassName('footerText')[0];
		// document.body.animate(rigthPos, options, changePage());
		currentPage++;
		
	}
}



function clickLeft(){
	if (currentPage > 0) {
		console.log('click left', currentPage);
		if (currentPage === 1) {
			console.log(document.body.classList);
			// document.body.classList.add('remove12');
			// document.body.classList.remove('move12');
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.remove('hide');
			document.getElementById('leftText').getElementsByTagName('p')[0].classList.add('show');
			for (let p of footerText) {
				p.classList.add('show');
				p.classList.remove('hide');
			}
		} else {
		}
		pages[currentPage].getElementsByTagName('div')[0].classList.remove("active");
		pages[currentPage - 1].getElementsByTagName('div')[0].classList.add("active");
		footerMessage.innerHTML = currentPage > 1?`Step ${currentPage - 1} of 8 on the path to digital enlightenment.`:'';
		
		// } else if (currentPage >= 1 && currentPage < 9) {
		//
		// 	// positionX -= 12;
		// } else if (currentPage === 9) {
		// 	// positionX -= 15;
		// } else {
		// 	return;
		// }
		//
		// console.log('move to the left', currentPage);
		// document.body.style.backgroundPosition = positionX + '%';
		currentPage--;
		console.log("currentPage", currentPage)
	}
}


