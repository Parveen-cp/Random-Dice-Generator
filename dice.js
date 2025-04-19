function rolldice(){
	let numofdice=document.getElementById("numofdice");
	const result=document.getElementById("result");
	const image=document.getElementById("image");
	let images=[];
	let value=Math.floor(Math.random()*(6-1+1)+1);
	numofdice.value=value;
	if(value===1){
		images.push(`<img src="1.png" alt="404 technical error" height="100px" width="100px" align="center">`)
	}else if(value===2){
		images.push(`<img src="2.png" alt="404 technical error" height="100px" width="100px" align="center">`)
	}else if(value===3){
		images.push(`<img src="3.png" alt="404 technical error" height="100px" width="100px" align="center">`)
	}else if(value===4){
		images.push(`<img src="4.png" alt="404 technical error" height="100px" width="100px" align="center">`)
	}else if(value===5){
		images.push(`<img src="5.png" alt="404 technical error" height="100px" width="100px" align="center">`)
	}else if(value===6){
		images.push(`<img src="6.png" alt="404 technical error" height="100px" width="100px">`)
	}
	image.innerHTML=images.join(' ');
}