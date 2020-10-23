
function init(){
	let start = new Date();
	let timer = setInterval(function(){
		let timePassed = new Date() - start;
		if (timePassed > 2000) {
			clearInterval(timer); //end after 2 sec
			return;
		}
		drawMonk(timePassed);
	}, 0);
	function drawMonk(timePassed) {
		monk.style.top = timePassed/50 + 'px';
	}
}
init();
