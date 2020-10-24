let headingText = document.querySelector('.text');
let totalTime = 8000;
Animate();
function Animate() {
	headingText.innerText = 'INHALE';
	setTimeout(() => {
		headingText.innerText = 'HOLD';
		setTimeout(() => {
			headingText.innerText = 'EXHALE';
		}, totalTime / 3);
	}, totalTime / 3);
}

setInterval(Animate, totalTime);
