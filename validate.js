function validateStem(){
	var stem = $('#stem').val();
	console.log(stem);
	console.log(reservedPatterns[0])

}

function validateOptions(){

	var options = $('.option').map(function(){
		console.log(this.value);
		return this.value;
	}).get();

	console.log(options);
}

var reservedPatterns = [
        {
          "reservedPatternId": 1524,
          "reservedPatternText": "\\?\\s*$",
          "applyToOptions": false,
          "applyToStems": true,
          "description": "End With a Question Mark",
          "isError": false,
          "isPublic": false,
          "message": null,
          "mustMatchPattern": true
        },
        {
          "reservedPatternId": 1525,
          "reservedPatternText": "_{2}",
          "applyToOptions": false,
          "applyToStems": true,
          "description": "Contain Underscored Blanks",
          "isError": false,
          "isPublic": false,
          "message": null,
          "mustMatchPattern": false
        },
        {
          "reservedPatternId": 1526,
          "reservedPatternText": "(^|\\s|,)both .(, *.)*,? and .($|\\s+|,+)",
          "applyToOptions": true,
          "applyToStems": false,
          "description": "Contain 'Both A and B' Language",
          "isError": false,
          "isPublic": false,
          "message": null,
          "mustMatchPattern": false
        },
        {
          "reservedPatternId": 1527,
          "reservedPatternText": "(^|\\s|,)neither .(, *.)*,? (nor|or) .($|\\s+|,+)",
          "applyToOptions": true,
          "applyToStems": false,
          "description": "Contain 'Neither A nor B' Language",
          "isError": false,
          "isPublic": false,
          "message": null,
          "mustMatchPattern": false
        }
      ];

  var reservedWords = [
        {
          "reservedWordId": 2678,
          "reservedWordText": "never",
          "applyToOptions": true,
          "applyToStems": true,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2679,
          "reservedWordText": "true",
          "applyToOptions": true,
          "applyToStems": true,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2680,
          "reservedWordText": "except",
          "applyToOptions": true,
          "applyToStems": true,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2681,
          "reservedWordText": "false",
          "applyToOptions": true,
          "applyToStems": true,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2682,
          "reservedWordText": "all of the above",
          "applyToOptions": true,
          "applyToStems": false,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2683,
          "reservedWordText": "none of the above",
          "applyToOptions": true,
          "applyToStems": false,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        },
        {
          "reservedWordId": 2684,
          "reservedWordText": "all of the following",
          "applyToOptions": true,
          "applyToStems": false,
          "isError": false,
          "isPublic": false,
          "message": null,
          "reservedWordRuleType": 1
        }
      ];