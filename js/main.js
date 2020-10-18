var visual = [
  { 
    title: "challenge<br> your limits", 
    bg: "./images/h1-slider-img-1.png",
    bg_txt: "./images/h1-slider-img-2.png",
    actor: "./images/h1-slider1-img-1.png"
  },
  { 
    title: "get strong<br> today", 
    bg: "./images/h1-slider-img-1.png",
    bg_txt: "./images/h1-slider-img-2.png",
    actor: "./images/h1-slider2-img-1.png"
  },
  { 
    title: "work your<br> body", 
    bg: "./images/h1-slider-img-1.png",
    bg_txt: "./images/h1-slider-img-2.png",
    actor: "./images/h1-slider3-img-1.png"
  }
];
var visual_num = 0;

function play_visual() {
  $("#visual h1").html(visual[visual_num].title);
  $("#visual .actor").attr('src', visual[visual_num].actor);
  // Visual animation play
  $("#visual h1").addClass("play");
  $("#visual .visual-bg").addClass("play");
  $("#visual .visual-text").addClass("play");
  $("#visual .actor").addClass("play");
}

function init_visual() {
  $("#visual h1").removeClass("play");
  $("#visual .visual-bg").removeClass("play");
  $("#visual .visual-text").removeClass("play");
  $("#visual .actor").removeClass("play");
}

window.onload = function () {
  play_visual();

  setInterval(function(){
    init_visual();
    console.log($("#visual h1").css('animation-play-state'));
    if(visual_num >= visual.length-1) { visual_num = 0;} else { visual_num++; }
    play_visual();
  }, 5000);

};  // end onload
