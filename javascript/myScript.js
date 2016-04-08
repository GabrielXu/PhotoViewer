


var picList= new Array(6);
var locationList = new Array(6);
var captionList = new Array(6);

var fButtonListener;
var bButtonListener;


var whichPic = 0;


picList[0] = "images/1.jpg";
picList[1] = "images/2.jpg";
picList[2] = "images/3.jpg";
picList[3] = "images/4.jpg";
picList[4] = "images/5.jpg";
picList[5] = "images/6.jpg";

locationList[0] = "Athletic Quad";
locationList[1] = "Athletic Quad";
locationList[2] = "Athletic Quad";
locationList[3] = "PFAC";
locationList[4] = "PFAC";
locationList[5] = "West Pond";

captionList[0] = "Main Building (1)";
captionList[1] = "Main Building (2)";
captionList[2] = "Athletic Building";
captionList[3] = "PFAC Lit Up (1)";
captionList[4] = "PFAC Lit Up (2)";
captionList[5] = "West Pond in the Low Light";




window.onload = function(){


document.getElementById("photos").src = picList[whichPic];
document.getElementById("pictureLocation").innerHTML = locationList[whichPic];
document.getElementById("caption").innerHTML = captionList[whichPic];

fButtonListener = document.getElementById("forwardButton");
bButtonListener = document.getElementById("backButton");

fButtonListener.addEventListener('click',function(event){
	//alert("don't poke me")
	++whichPic;
	if (whichPic >= picList.length){
		whichPic = 0;
	}
	document.getElementById("photos").src = picList[whichPic];
document.getElementById("pictureLocation").innerHTML = locationList[whichPic];
document.getElementById("caption").innerHTML = captionList[whichPic];
});
bButtonListener.addEventListener('click',function(event){
	//alert("don't poke me either")
	--whichPic;
	if (whichPic < 0){
		whichPic = picList.length-1;
	}
	document.getElementById("photos").src = picList[whichPic];
	document.getElementById("pictureLocation").innerHTML = locationList[whichPic];
	document.getElementById("caption").innerHTML = captionList[whichPic];
});


}