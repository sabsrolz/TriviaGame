$(document).ready(function() {
  //declare variables
  let completed = false;
  let round = 0;
  let number = 25;
  let intervalId;
  const total_rounds = 2;

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
    D1: "Incorrect",
    correct: "Correct",
    image: "placeholder1.jpg"
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
    D1: "Incorrect",
    correct: "Correct",
    image: "placeholder1.jpg"
  };

  const questions = [question1, question2];

  // function feedback() {
  //   next_round();
  // }

  //game starts

  function next_round() {
    round++;
    if (round === total_rounds) {
      $("#end_game").text("End of game! Thanks for playing!");
      $("#timer").hide();
      $("#image").hide();
    }

    $("#output").hide();
    $("#image").hide();
    $("#image_round").hide();
    number = 25;
    run();
    // round++;

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

    //select_option();
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
      $("#image").show();
      $("#image_round").show();
      $("#output").show();
      stop();
      setTimeout(next_round, 3000);
      $("#question").hide();
      $("#answer1").hide();
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer4").hide();
      var correct_answer = $(this).attr("correct");
      if (correct_answer === questions[round].correct) {
        $("#output").text("You are correct!");
        $("#image").replaceWith(
          '<img id = "image_round" src="assets/images/' +
            questions[round].image +
            '" class="col-md-3 text-center img-thumbnail">'
        );
      } else {
        $("#output").text(
          "Incorrect! The correct answer is " + questions[round].correct + "!"
        );
        $("#image").replaceWith(
          '<img "image_round" src="assets/images/' +
            questions[round].image +
            '" class="col-md-3 img-thumbnail">'
        );
      }
    });
  });
});
