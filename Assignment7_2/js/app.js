function findSum(){
	var sum = 0;

	for(var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}

	return sum;
}

console.log("Sum: "+findSum(100,20,30));
console.log("Sum: "+findSum(100,20,300,500));
console.log("Sum: "+findSum(100,200,300,400,700));