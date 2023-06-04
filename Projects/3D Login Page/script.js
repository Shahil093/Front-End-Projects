var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'hi-IN';

var Textbox = $("#textarea");
var instructions = $("#instructions");
var signUpBtn = document.querySelector(".signup-btn");
var signInBtn = document.querySelector(".signin-btn");
var formsWrapper = document.querySelector(".forms-wrapper");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  Content += transcript;
  Textbox.val(Content);
};

$("#start").on("click", function (e) {
  if ($(this).text() == "Click here to Stop Recording") {
    $(this).html("Click here to Start Recording");
    $("#instructions").html("");
    recognition.stop();
  } else {
    $(this).html("Click here to Stop Recording");
    $("#instructions").html("Try Speaking, Voice Recognition is On, Contents will be displayed below");
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
  }
});

Textbox.on("input", function () {
  Content = $(this).val();
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});
