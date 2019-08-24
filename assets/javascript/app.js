$(document).ready(function() {
  //declare variables
  let round = 0;
  let number = 10;
  let intervalId;
  const total_rounds = 8;
  let wins = 0;
  let losses = 0;
  let image_id = [];
  const key = "nxy71hu767W2YM7H7grusEx0f6oO54gW";

  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/search?q=globe&api_key=" +
      key +
      "&limit=2",
    method: "GET"
  }).then(function(response) {
    output = response;
    start_image = output.data[0].images.original.url;
    $("#startImage").replaceWith(
      '<img id = "startImage" src="' +
        start_image +
        '" class=ml-5 row img-thumbnail">'
    );
  });

  const question1 = {
    Q: "Which scientist discovered the radioactive element radium?",
    A: "Isaac Newton",
    B: "Albert Einstein",
    C: "Benjamin Franklin",
    D: "Marie Curie",
    correct: "Marie Curie",
    image: "radium",
    imageUrl: ""
  };
  const question2 = {
    Q: "Who invented the BALLPOINT PEN?",
    A: "Biro Brothers",
    B: "Waterman Brothers",
    C: "Bicc Brothers",
    D: "Write Brothers",
    correct: "Biro Brothers",
    image: "ballpoint + pen",
    imageUrl: ""
  };

  const question3 = {
    Q:
      "What is the name of the CalTech seismologist who invented the scale used to measure the magnitude of earthquakes?",
    A: "Charles Richter",
    B: "Hiram Walker",
    C: "Giuseppe Mercalli",
    D: "Joshua Rumble",
    correct: "Charles Richter",
    image: "earthquake",
    imageUrl: ""
  };

  const question4 = {
    Q: "What invention caused many deaths while testing it?",
    A: "Dynamite",
    B: "Ladders",
    C: "Parachute",
    D: "Race cars",
    correct: "Parachute",
    image: "parachute",
    imageUrl: ""
  };

  const question5 = {
    Q:
      "Who was the first American female to patent her invention, a method of weaving straw with silk?",
    A: "Marjorie Joyner",
    B: "Margaret Knight",
    C: "Amanda Jones",
    D: "Mary Kies",
    correct: "Mary Kies",
    image: "silky",
    imageUrl: ""
  };

  const question6 = {
    Q: "When was Monopoly created?",
    A: "1940s",
    B: "1930s",
    C: "1920s",
    D: "1950s",
    correct: "1930s",
    image: "monopoly",
    imageUrl: ""
  };

  const question7 = {
    Q:
      "What invention is credited to the Russian born American inventor Vladimir Kosma Zworykin?",
    A: "Telegraph",
    B: "Radio",
    C: "Television",
    D: "Dishwasher",
    correct: "Television",
    image: "tv",
    imageUrl: ""
  };

  const question8 = {
    Q: "Where was the yo-yo invented?",
    A: "France",
    B: "United States",
    C: "Philippines",
    D: "England",
    correct: "Philippines",
    image: "yo-yo",
    imageUrl: ""
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

  function run() {
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
      setTimeout(next_round, 1000);
    } else {
      number--;
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  //game starts

  function next_round() {
    round++;
    $("#q_number").text("Question " + (round + 1));
    number = 10;

    $("#timer").show();
    $("#image").hide();

    if (round === total_rounds) {
      $("#reset_game").show();
      $("#q_number").hide();
      $("#output").hide();
      $("#timer").hide();
      $("#image").hide();
      $("#end_game").show();
      $("#end_game").text("End of game! Thanks for playing!");
      $("#score").show();
      $("#score").text(
        "Your final score is: " +
          wins +
          " correct answers and " +
          losses +
          " incorrect answers"
      );
      $("#reset_game").on("click", function resetGame() {
        wins = 0;
        losses = 0;
        round = 0;
        $("#timer").show();
        $("#end_game").hide();
        $("#score").hide();
        $("#reset_game").hide();
        $("#startImage").hide();
        stop();
        run();
        $("#q_number").text("Question " + (round + 1));
        $("#q_number").show();
        $("#start").hide(); //hide start button
        //create attribute that contains possible answers
        $("#answer1").attr("answer", questions[round].A);
        $("#answer2").attr("answer", questions[round].B);
        $("#answer3").attr("answer", questions[round].C);
        $("#answer4").attr("answer", questions[round].D);

        //display questions and possible answers to html
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

        $(".answers").hover(
          function() {
            $(this).css("background-color", "violet");
          },
          function() {
            $(this).css("background-color", "black");
          }
        );

        //setTimeout(gameStarts, 5000);
      });
    } else {
      $("#output").hide();

      run();

      $("#answer1").attr("answer", questions[round].A);
      $("#answer2").attr("answer", questions[round].B);
      $("#answer3").attr("answer", questions[round].C);
      $("#answer4").attr("answer", questions[round].D);

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
  }

  $("#start").on("click", function gameStarts() {
    $("#reset_game").hide();
    $("#start").show();
    $("#q_number").html("Question 1");
    $("#startImage").hide();
    run();
    $("#start").hide(); //hide start button
    //create attribute that contains possible answers
    $("#answer1").attr("answer", questions[round].A);
    $("#answer2").attr("answer", questions[round].B);
    $("#answer3").attr("answer", questions[round].C);
    $("#answer4").attr("answer", questions[round].D);

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
        $(this).css("background-color", "black");
      }
    );
  });

  $(".answers").on("click", function select_option() {
    $("#image").hide();
    $("#timer").show();
    $("#output").show();
    stop();
    //setTimeout(next_round, 3000);
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    var correct_answer = $(this).attr("answer");

    let queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      questions[round].image +
      "&api_key=" +
      key +
      "&limit=2";
    //console.log(terms[round]);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      output = response;
      img_url = output.data[0].images.original.url;
      questions[round].imageUrl = img_url;

      if (correct_answer === questions[round].correct) {
        // console.log(img_url);
        $("#image").show();
        $("#output").text("You are correct!");
        // console.log(img_url);
        // console.log(round);
        $("#image").replaceWith(
          '<img id = "image" src="' +
            questions[round].imageUrl +
            '" class="col-md-4 text-center img-thumbnail">'
        );
        wins++;
      } else if (correct_answer !== questions[round].correct) {
        $("#image").show();
        $("#output").text(
          "Incorrect! The correct answer is " + questions[round].correct + "!"
        );
        $("#image").replaceWith(
          '<img id = "image" src="' +
            questions[round].imageUrl +
            '" class="col-md-4 text-center img-thumbnail">'
        );
        losses++;
      }
      $("#timer").hide();
      setTimeout(next_round, 1000);
    });
  });
});
