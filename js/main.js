let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let srcImage = document.getElementById('src-image');

let imgUrl = ["img/01.jpg", "img/02.jpg", "img/03.jpg"];
let i = 0;

let displayImg = (i) => {
	srcImage.src = imgUrl[i];
};

// Default Image
displayImg(i);

rightArrow.addEventListener('click', function(){
	if(i === 2){
		i = 0;
	}else{
		i++;
	}
	displayImg(i);
});

leftArrow.addEventListener('click', function(){
	if(i === 0){
		i = 2;
	}else{
		i--;
	}
	displayImg(i);
});

