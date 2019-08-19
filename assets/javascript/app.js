$(document).ready(function() {
  let second = 25;
  let intervalId;

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    $("#timer").html("<h2>" + second + "</h2>");
    second--;
  }

  let question1 = {
    A1: 1,
    A2: 2,
    A3: 3,
    A4: 4
  };

  const questions = [question1];

  $("#start").on("click", function gameStarts() {
    setTimeout(roundStarts, 25000);

    run();
  });

  function roundStarts() {
    $("#answer1").attr("answer", question1.A1);
    $("#answer2").attr("answer", question1.A2);
    $("#answer3").attr("answer", question1.A3);
    $("#answer4").attr("answer", question1.A4);

    // $("#question").text("");
    // $("#answer1").text("1");
    // $("#answer2").text("2");
    // $("#answer3").text("3");
    // $("#answer4").text("4");

    $(".answers").on("click", function() {
      var answer_option = $(this).attr("answer");
      alert("click!");
    });
  }
});
