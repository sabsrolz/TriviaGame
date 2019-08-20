$(document).ready(function() {
  //declare variables
  let completed = false;
  let round = 0;
  let number = 25;
  let intervalId;

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;

    $("#timer").html("<h2>" + number + "</h2>");

    if (number === 0) {
      stop();
      next_round();
      number = 25;
      run();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }
  const question1 = {
    Q: "This is question 1",
    A: "Answer 1",
    B: "Answer 2",
    C: "Answer 3",
    D: "Answer 4",
    A1: "Correct",
    B1: "Incorrect",
    C1: "Incorrect",
    D1: "Incorrect"
  };

  const question2 = {
    Q: "This is question 2",
    A: "Answer A",
    B: "Answer B",
    C: "Answer C",
    D: "Answer D",
    A1: "Incorrect",
    B1: "Correct",
    C1: "Incorrect",
    D1: "Correct"
  };

  const questions = [question1, question2];

  //game starts
  function next_round() {
    round++;

    $("#answer1").attr("answer", questions[round].A);
    $("#answer2").attr("answer", questions[round].B);
    $("#answer3").attr("answer", questions[round].C);
    $("#answer4").attr("answer", questions[round].D);

    $("#answer1").attr("correct", questions[round].A1);
    $("#answer2").attr("correct", questions[round].B1);
    $("#answer3").attr("correct", questions[round].C1);
    $("#answer4").attr("correct", questions[round].D1);

    $("#question").text(questions[round].Q);
    $("#answer1").text(questions[round].A);
    $("#answer2").text(questions[round].B);
    $("#answer3").text(questions[round].C);
    $("#answer4").text(questions[round].D);

    $("#question").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
  }

  $("#start").on("click", function gameStarts() {
    run();
    $("#start").hide(); //hide start button
    //create attribute that contains possible answers
    $("#answer1").attr("answer", questions[round].A);
    $("#answer2").attr("answer", questions[round].B);
    $("#answer3").attr("answer", questions[round].C);
    $("#answer4").attr("answer", questions[round].D);
    //create attribute that contains if answer is correct
    $("#answer1").attr("correct", questions[round].A1);
    $("#answer2").attr("correct", questions[round].B1);
    $("#answer3").attr("correct", questions[round].C1);
    $("#answer4").attr("correct", questions[round].D1);
    //display questions and possible answers to html
    $("#question").text(questions[round].Q);
    $("#answer1").text(questions[round].A);
    $("#answer2").text(questions[round].B);
    $("#answer3").text(questions[round].C);
    $("#answer4").text(questions[round].D);

    $(".answers").on("click", function select_option() {
      $("#question").hide();
      $("#answer1").hide();
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer4").hide();
      var correct = $(this).attr("correct");
      $("#output").text(correct);
      completed = true;
    });
  });
});
