var introBlock = document.getElementById('introBlock');
introBlock.style.width = 400 + 'px';

var button1 = document.getElementById('option1');
var button2 = document.getElementById('option2');

button1.addEventListener('click', function(){ pressedOne() })
button2.addEventListener('click', function(){console.log('button2')})

function pressedOne() {
	while (introBlock.firstChild){introBlock.removeChild(introBlock.firstChild)}
	introBlock.style.width = 20 + 'px';
	introBlock.style.height = 20 + 'px';
	introBlock.style.left = 40 + 'px';
	introBlock.style.top = 40 + 'px';
	introBlock.style.left = 100 + 'px';
	setTimeout(function(){
		introBlock.style.width = 900 + 'px';
		introBlock.style.height = 1000 + 'px';
		var form = document.createElement('div');
		form.style.display = 'flex';
		form.style.justifyContent = 'center';
		form.style.alignItems = 'center';
		form.style.height = 200 + 'px';
		form.style.width = 400 + 'px';
		form.style.position = 'absolute';
		form.style.backgroundColor = 'blue';
		form.style.top = '10px';
		form.innerHTML = 'Hey Look!';
		setTimeout(function(){
			introBlock.appendChild(form);
		}, 1000);
	}, 1000)
}