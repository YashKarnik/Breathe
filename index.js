let container = document.querySelector('.container');
let headingText = document.querySelector('.text');
let Flag = false;
let totalTime = 8000;
setInterval(() => {
	headingText.innerHTML = Flag ? 'INHALE' : 'EXHALE';
	Flag = !Flag;
}, totalTime);
