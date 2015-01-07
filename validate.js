var isValid = true;
var messages = [];

function checkBusinessRules(){
  var stem = $('#stem').val();
  var options = $('.option').map(function(){
    return this.value;
  }).get();
  validate(stem, true);
  validate(options, false);
  //determine if validation passed (isValid?)
  //if !isValid, add messages to UI
  processValidation();
  
  //reset global variables
  resetGlobalVars();
}

function problemFound(message){
  isValid = false;
  messages.push(message);
}

function processValidation(){
  var list = $('#messages');
  list.empty();
  if(!isValid){
    for(i=0; i < messages.length; i++){
      var message = messages[i];
      $(list).append('<li>'+message+'</li>');
    }
  }
}

function resetGlobalVars(){
  isValid = true;
  messages = [];
}

function validate(input, isStem){
  var i = 0;
  var j = 0;
  var p, w;//used to hold current regex or reserved word, respectively, witiin each for-next loop
  var container; //holds current object for each for-next loop
  var testResult; //holds result of current comparison within each for-next loop
  var mustMatchPattern; // holds current value of container.mustMatchPattern
  

  if(isStem){
    var stemPatterns = reservedPatterns.filter(function(pattern){
      return pattern.applyToStems;
    });
    var stemWords = reservedWords.filter(function(word){
      return word.applyToStems;
    });
    for(i=0; i < stemPatterns.length; i++){
      //evaluate each pattern against the stem
      container = stemPatterns[i];
      p = container.reservedPatternText;
      mustMatchPattern = container.mustMatchPattern;
      testResult = new RegExp(p).test(input);
      if(mustMatchPattern){
        if(!testResult){
          problemFound('Stem Text Must ' + container.description);
        }
      }
      else{
        if(testResult){
          problemFound('Stem Text Must Not ' + container.description);
        }
      } 
    }
    var startRegEx = '\\b';
    var endRegEx = '\\b';
    for(i=0; i < stemWords.length; i++){
      //evaluate each word against the stem
      container = stemWords[i];
      w = container.reservedWordText;
      var wholeRegEx = startRegEx + w + endRegEx;
      testResult = new RegExp(wholeRegEx).test(input.toLowerCase());
      if(testResult){
          problemFound('Stem Text Must Not Contain The Word ' + w);
      }
    }
  }
  else{
    var optionPatterns = reservedPatterns.filter(function(pattern){
      return pattern.applyToOptions;
    });
    var optionWords = reservedWords.filter(function(word){
      return word.applyToOptions;
    });
    for(j=0; j < input.length; j++){
      for(i=0; i < optionPatterns.length; i++){
        //evaluate each pattern against the option
        container = optionPatterns[i];
        p = container.reservedPatternText;
        mustMatchPattern = container.mustMatchPattern;
        testResult = new RegExp(p).test(input[j]);
        if(mustMatchPattern){
          if(!testResult){
            problemFound('Response Text Must ' + container.description);
          }
        }
        else{
          if(testResult){
            problemFound('Response Text Must Not ' + container.description);
          }
        }
      }
      for(i=0; i < optionWords.length; i++){
        //evaluate each word against the option
        var startRegEx = '\\b';
        var endRegEx = '\\b';
        for(i=0; i < optionWords.length; i++){
          //evaluate each word against the stem
          container = optionWords[i];
          w = container.reservedWordText;
          var wholeRegEx = startRegEx + w + endRegEx;
          testResult = new RegExp(wholeRegEx).test(input[j].toLowerCase());
          if(testResult){
              problemFound('Response Text Must Not Contain The Word ' + w);
          }
        }
      }
    } 
  }
}

var reservedPatterns = [
        {
          "reservedPatternId": 1524,
          "reservedPatternText": "\\?\\s*$",
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