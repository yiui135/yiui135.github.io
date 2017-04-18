var html = document.documentElement;



//||| TWO: Checkerboard ||

function checkerboard(width,height){

	console.log("# # # #");
	console.log("# # # #");
	console.log("# # # #");
};

//||| TWO: Checkerboard *REDO*||

function checkerboard1(width,height){
	var checkerboard = "";

	for (j = 0; j < height; j++){
		if (j % 2) {
			if ( i % 2 ) {
				checkerboard = checkerboard + "#";
			} else {
				checkerboard = checkerboard + " ";
			}
		} else {
			for (j = 0; j < height; j++){
				if (j % 2) {
				if ( i % 2 ) {
					checkerboard = checkerboard + "#";
				} else {
					checkerboard = checkerboard + " ";
				}
		}
};


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