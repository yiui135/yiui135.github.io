var html = document.documentElement;



//||| TWO: Checkerboard ||

function checkerboard(width,height){
	
	var width = 4
	var height = 3

	console.log("# # # #");
	console.log("# # # #");
	console.log("# # # #");
};

//console.log

//||| THREE: Triangle ||

function triangle(height){
	
	var height = 4

	console.log("#");
	console.log("##");
	console.log("###");
	console.log("####");
};

//||| FOUR: Buttons ||

var checkerboard5 = document.getElementById("checkerboard");

checkerboard5.addEventListener("click",function(event){

	console.log("# # # # # #");
	console.log("# # # # # #");
	console.log("# # # # # #");
	console.log("# # # # # #");
	console.log("# # # # # #");
});

var pyramid5 = document.getElementById("pyramid");

pyramid5.addEventListener("click",function(event){

	console.log("#");
	console.log("##");
	console.log("###");
	console.log("####");
	console.log("#####");
});