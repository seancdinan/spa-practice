var grid = document.getElementById('colorGrid');
grid.style.top = (0.25 * window.innerHeight - grid.style.height) + 'px';
grid.style.left = (0.25 * window.innerWidth - grid.style.width) + 'px'; 


var result1 = document.getElementById('color1');
var result2 = document.getElementById('color2');
var result3 = document.getElementById('color3');

var page = 0;

var color1 = DATA[page]['data'][0]['color'];
var color2 = DATA[page]['data'][1]['color'];
var color3 = DATA[page]['data'][2]['color'];

result1.style.backgroundColor = 'hsl('+color1+', 80%, 50%';
result2.style.backgroundColor = 'hsl('+color2+', 80%, 50%';
result3.style.backgroundColor = 'hsl('+color3+', 80%, 50%';

var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);

function next() {
	if (page + 1 < DATA.length){
		page++;
		color1 = DATA[page]['data'][0]['color'];
		color2 = DATA[page]['data'][1]['color'];
		color3 = DATA[page]['data'][2]['color'];

		result1.style.backgroundColor = 'hsl('+color1+', 80%, 50%';
		result2.style.backgroundColor = 'hsl('+color2+', 80%, 50%';
		result3.style.backgroundColor = 'hsl('+color3+', 80%, 50%';
	}
}

function previous() {
	if (page - 1 >= 0){
		page--;
		color1 = DATA[page]['data'][0]['color'];
		color2 = DATA[page]['data'][1]['color'];
		color3 = DATA[page]['data'][2]['color'];

		result1.style.backgroundColor = 'hsl('+color1+', 80%, 50%';
		result2.style.backgroundColor = 'hsl('+color2+', 80%, 50%';
		result3.style.backgroundColor = 'hsl('+color3+', 80%, 50%';
	}
}


