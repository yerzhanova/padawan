let positionX = 0;
let currentPage = 0;
function init(){
	let start = new Date();
	let currentPage = 0;
	animateText();
	let timer = setInterval(function(){
		let timePassed = new Date() - start;
		if (timePassed > 3000) {
			clearInterval(timer); //end after 2 sec
			monk.style.display = 'none';
			message.innerHTML = '';
			showWrapper();
			return;
		}
		drawMonk(timePassed);
	}, 20);
	

	function drawMonk(timePassed) {
		monk.style.top = timePassed/50 + 'px';
	}
	
	function showWrapper(){
		// if (currentPage === 0) {
		// 	console.log(document.getElementsByClassName('li'));
		// }
		console.log('wrapper is visible now');
		wrapper.style.display = 'block';
		document.body.style.backgroundPosition = '0% 0%';
		document.body.style.backgroundImage = "url('./assets/images/background.jpg')";
		document.body.style.backgroundRepeat = 'no-repeat';
		// footer.style.display = 'block';
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
	console.log(currentPage);
	if (currentPage === 0) {
		positionX += 15;
	} else if (currentPage >= 1 && currentPage < 8) {
		positionX += 12;
	} else if (currentPage === 8) {
		positionX += 20;
		console.log(40, 'dedd')
	}
	currentPage++;
	console.log('move to the right', currentPage);
	document.body.style.backgroundPosition = positionX+'%';
}
function clickLeft(){
	if (currentPage === 7){
		positionX -= 25;
	} else if (currentPage === 1){
		positionX -= 15;
	} else if (currentPage >= 1 && currentPage < 8) {
		positionX -= 12;
	} else if (currentPage === 8) {
		positionX -= 20;
	}
	currentPage--;
	console.log('move to the left', currentPage);
	document.body.style.backgroundPosition = positionX+'%';
	console.log('clicked left');
}


