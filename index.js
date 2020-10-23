let containerRadiusBefore = (containerRadiusAfter = 0);
let isIncreasing;
let container = document.querySelector('.container');
let bubble = document.querySelector('.container::before');
function UpdateRadiusHook() {
	containerRadiusBefore = container.offsetWidth;
	setTimeout(() => {
		containerRadiusAfter = container.offsetWidth;
	}, 10);
	if (containerRadiusBefore < containerRadiusAfter) isIncreasing = true;
	else isIncreasing = false;
	console.log({ isIncreasing });
	requestAnimationFrame(UpdateRadiusHook);
}
// requestAnimationFrame(UpdateRadiusHook);
