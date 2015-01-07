var isValid = true;
var messages = [];

function checkBusinessRules(){
  var stem = $('#stem').val();
  var options = $('.option').map(function(){
    console.log(this.value);
    return this.value;
  }).get();
  validate(stem, true);
  validate(options, false);
  //determine if validation passed (isValid?)

  //if !isValid, add messages to UI

  //reset global variables
}

function validate(input, isStem){
  var i = 0;
  var j = 0;
  if(isStem){
    var stemPatterns = reservedPatterns.filter(function(pattern){
      return pattern.applyToStems;
    });
    var stemWords = reservedWords.filter(function(word){
      return word.applyToStems;
    });
    for(i=0; i < stemPatterns.length; i++){
      //evaluate each pattern against the stem
      console.log(input + ' against ' + stemPatterns[i].reservedPatternText);
      //if problem with pattern, add the issue to the message array
    }
    for(i=0; i < stemWords.length; i++){
      //evaluate each word against the stem
      console.log(input + ' against ' + stemWords[i].reservedWordText);
      //if problem with word, add the issue to the message array
    }
  }
  else{
    var optionPatterns = reservedPatterns.filter(function(pattern){
      return pattern.applyToOptions;
    });
    var optionWords = reservedWords.filter(function(word){
      return word.applyToOptions;
    });
    for(i=0; i < input.length; i++){
      for(j=0; j < optionPatterns.length; j++){
        //evaluate each pattern against the option
        console.log(input[i] + ' against ' + optionPatterns[j].reservedPatternText);
        //if problem with pattern, add the issue to the message array
      }
      for(j=0; j < optionWords.length; j++){
        //evaluate each word against the option
        console.log(input[i] + ' against ' + optionWords[j].reservedWordText);
        //if problem with word, add the issue to the message array
      }
    } 
  }
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