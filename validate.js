function validateStem(){
	var stem = $('#stem').val();
	console.log(stem);
}

function validateOptions(){

	var options = $('.option').map(function(){
		console.log(this.value);
		return this.value;
	}).get();

	console.log(options);
}