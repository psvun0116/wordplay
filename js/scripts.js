$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sentenceInput = $("input#sentence").val()
    $(".sentence").text(sentenceInput);
    var answers = [];
    answers.push(sentenceInput);

    console.log(answers);

    event.preventDefault();
  });
});
