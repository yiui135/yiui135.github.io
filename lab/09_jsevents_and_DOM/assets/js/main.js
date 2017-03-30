var html = document.documentElement;

//|||||Debt Button|||||
//______________________________________________

var mydebt = 0;

var mybutton = document.getElementById("mybutton")

mybutton.addEventListener("click", function(event){
	mydebt += 100;
	//mydebt = mydebt + 100

console.log("mydebt=$" + mydebt);

event.stopPropagation();
});



//|||||Background Button|||||
//______________________________________________

var bgbutton = document.getElementById("bgbutton");

bgbutton.addEventListener("click", function(event){
	if (html.style.backgroundColor != "lightblue") {

		html.style.backgroundColor = "lightblue";
		console.log("Background is blue");

	}else{
		html.style.backgroundColor = "white";
		console.log("Background is white");

	}

	event.stopPropagation();
})


//|||||Simpsons Button|||||
//______________________________________________

var simpbutton = document.getElementById("simpbutton");
var simpwrapper = document.getElementById("simpwrapper");

var simpsons = [];

simpsons[0] = "media/kermitfire.jpg";
simpsons[1] = "media/kermitpaints.jpg";
simpsons[2] = "media/kermitrain.jpg";
simpsons[3] = "media/kermitspazz.gif";

simpbutton.addEventListener("click", function(event){
	var img = document.createElement("img");
	img.src = simpsons[Math.floor(Math.random()*simpsons.length)];
	simpwrapper.appendChild(img);

	event.stopPropagation();
})


//|||||Page Click|||||
//______________________________________________

html.addEventListener("click",function(event){
	console.log(event.clientX + "," + event.clientY);

	var sticker = document.createElement("div");
	sticker.classList.add("sticker");
	html.appendChild(sticker);
	sticker.style.left = event.clientX -250 + "px";
	sticker.style.top = event.clientY - 250 + "px";
})



