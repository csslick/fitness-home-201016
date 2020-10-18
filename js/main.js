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
  }
];
var visual_num = 0;

function play_visual() {
  $("#visual h1").removeClass("play");
  $("#visual h1").html(visual[visual_num].title);
  $("#visual .actor").attr('src', visual[visual_num].actor);
  // Visual animation play
  $("#visual h1").addClass("play");
  $("#visual .visual-bg").addClass("play");
  $("#visual .visual-text").addClass("play");
  $("#visual .actor").addClass("play");
}

window.onload = function () {
  play_visual();

  // setInterval(function(){
  //   $("#visual h1").removeClass("play");
  
  //   if(visual_num >= visual.length-1) { visual_num = 0;} else { visual_num++; }
  //   play_visual();
  // }, 3000);
  $('body').click(function(){
    if(visual_num >= visual.length-1) { visual_num = 0;} else { visual_num++; }
    play_visual(); 
  })

};  // end onload
