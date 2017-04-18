var html = document.documentElement;

var container = document.getElementById("container");

var letters = {
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
};

var bgHue = 0;

for (key in letters) {
	bgHue += Math.floor( 360/ (Object.keys(letters).length) )
	letters[key].backgroundColor = "hsl(" + bgHue + ", 100%, 50%)";
};

document.addEventListener('keydown',function(event){
	
	if(event.keyCode >= 65 && event.keyCode <= 90){

		var div = document.createElement('div');
		div.classList.add('letter'); //adds "letter" to div class

		if (event.shiftKey == true) {
			div.classList.add("capital");
		};

		div.style.backgroundColor = letters[event.code].backgroundColor;
		container.appendChild(div);

		console.log("color: " + letters[event.code]);

		//console.log("key: " + event.key);
		//console.log("code: " + event.code);
		//console.log("code: " + event.keyCode);
		//html.style.backgroundColor = letters[event.code].backgroundColor; //COLOR HAS TO BE CAPITALIZED
		//container.innerHTML += event.key;

	} else if (event.keyCode == 32) {
		
		var div = document.createElement('div');
		
		div.classList.add('space');
		container.appendChild(div);

	} else if (event.keyCode == 8) {

		container.removeChild( container.lastChild );
	}

});

