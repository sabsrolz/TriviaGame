$(document).ready(function() {
  //declare variables
  let completed = false;
  let round = 0;
  let number = 10;
  let intervalId;
  const total_rounds = 2;
  let wins = 0;
  let losses = 0;

  function run() {
    //number = 10;
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    $("#timer").html("<h2>" + number + "</h2>");
    console.log(number);

    if (number === 0) {
      stop();

      console.log(number);

      losses++;

      $("#output").show();
      console.log(number);
      $("#output").text("You ran out of time!");

      $("#timer").hide();
      console.log(number);
      $("#question").hide();
      $("#answer1").hide();
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer4").hide();
      number = 10;
      setTimeout(next_round, 3000);
    } else {
      number--;
    }
  }

  function stop() {
    clearInterval(intervalId);
    number = 10;
  }
  const question1 = {
    Q: "Who invented the BALLPOINT PEN?",
    A: "Biro Brothers",
    B: "Waterman Brothers",
    C: "Bicc Brothers",
    D: "Write Brothers",
    A1: "Correct",
    B1: "Incorrect",
    C1: "Incorrect",
    D1: "Incorrect",
    correct: "Biro Brothers",
    image: "placeholder1.jpg"
  };

  const question2 = {
    Q: "Which scientist discovered the radioactive element radium?",
    A: "Isaac Newton",
    B: "Albert Einstein",
    C: "Benjamin Franklin",
    D: "Marie Curie",
    A1: "Incorrect",
    B1: "Incorrect",
    C1: "Incorrect",
    D1: "Correct",
    correct: "Marie Curie",
    image: "placeholder1.jpg"
  };

  const question3 = {
    Q:
      "What is the name of the CalTech seismologist who invented the scale used to measure the magnitude of earthquakes?",
    A: "Charles Richter",
    B: "Hiram Walker",
    C: "Giuseppe Mercalli",
    D: "Joshua Rumble",
    A1: "Correct",
    B1: "Incorrect",
    C1: "Incorrect",
    D1: "Incorrect",
    correct: "Charles Richter",
    image: "placeholder1.jpg"
  };

  const question4 = {
    Q: "What invention caused many deaths while testing it?",
    A: "Dynamite",
    B: "Ladders",
    C: "Parachute",
    D: "Race cars",
    A1: "Incorrect",
    B1: "Incorrect",
    C1: "Correct",
    D1: "Incorrect",
    correct: "Parachute",
    image: "placeholder1.jpg"
  };

  const question5 = {
    Q:
      "Who was the first American female to patent her invention, a method of weaving straw with silk?",
    A: "Marjorie Joyner",
    B: "Margaret Knight",
    C: "Amanda Jones",
    D: "Mary Kies",
    A1: "Incorrect",
    B1: "Incorrect",
    C1: "Incorrect",
    D1: "Correct",
    correct: "Mary Kies",
    image: "placeholder1.jpg"
  };

  const question6 = {
    Q: "When was Monopoly created?",
    A: "1940s",
    B: "1930s",
    C: "1920s",
    D: "1950s",
    A1: "Incorrect",
    B1: "Correct",
    C1: "Incorrect",
    D1: "Incorrect",
    correct: "1930s",
    image: "placeholder1.jpg"
  };

  const question7 = {
    Q:
      "What invention is credited to the Russian born American inventor Vladimir Kosma Zworykin?",
    A: "Telegraph",
    B: "Radio",
    C: "Television",
    D: "Dishwasher",
    A1: "Incorrect",
    B1: "Incorrect",
    C1: "Correct",
    D1: "Incorrect",
    correct: "Television",
    image: "placeholder1.jpg"
  };

  const question8 = {
    Q: "Where was the yo-yo invented?",
    A: "France",
    B: "United States",
    C: "Philippines",
    D: "England",
    A1: "Incorrect",
    B1: "Incorrect",
    C1: "Correct",
    D1: "Incorrect",
    correct: "Philippines",
    image: "placeholder1.jpg"
  };

  const questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8
  ];

  // function feedback() {
  //   next_round();
  // }

  //game starts

  function next_round() {
    round++;
    number = 10;
    $("#timer").show();

    $("#image_round").hide();

    if (round === total_rounds) {
      $("#timer").hide();
      $("#image_round").hide();
      $("#end_game").text("End of game! Thanks for playing!");
      $("#score").text(
        "Your final score is: " +
          wins +
          " correct answers and " +
          losses +
          " incorrect answers"
      );
    }

    $("#output").hide();

    //number = 10;
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

    $(".answers").hover(
      function() {
        $(this).css("background-color", "violet");
      },
      function() {
        $(this).css("background-color", "green");
      }
    );

    $(".answers").on("click", function select_option() {
      $("#image_round").hide();
      $("#timer").show();
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
        $("#image_round").show();
        $("#output").text("You are correct!");
        $("#image").replaceWith(
          '<img id = "image_round" src="assets/images/' +
            questions[round].image +
            '" class="col-md-3 text-center img-thumbnail">'
        );
        wins++;
      } else if (correct_answer !== questions[round].correct) {
        $("#image_round").show();
        $("#output").text(
          "Incorrect! The correct answer is " + questions[round].correct + "!"
        );
        $("#image").replaceWith(
          '<img "image_round" src="assets/images/' +
            questions[round].image +
            '" class="col-md-3 img-thumbnail">'
        );
        losses++;
      }
    });
  });
});
