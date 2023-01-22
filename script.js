let b = Math.floor(Math.random() * 10 + 1); 

	let guess = 1; 

	document.getElementById("submitguess").onclick = function(){ 

		// number guessed by user	 
		let a = document.getElementById("guessNum").value; 

		if(a == b) 
		{	 
			alert("CONGRATULATIONS!!! You have a right " 
				+ guess + " GUESS "); 
		} 
		else if(a > b) /* if guessed number is greater than actual number*/ 
		{	 
			guess++; 
			alert(" OOPS Sorry!! Try a smaller number."); 
		} 
		else 
		{ 
			guess++; 
			alert("OOPS SORRY!! Try a grater number.") 
		} 
	} 