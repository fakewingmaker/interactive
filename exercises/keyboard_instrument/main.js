
$(window).keydown(function(e){
var key = e.key;
  var keys = ["ugh!","why?","okie...","yas kween!!!","hi bestie~","tragggg.","sigh--","eat!!!","ewww","sickening","noooooo","byeeeeeeiiiiiiii","（ つ︣﹏╰）","(　ﾟдﾟ)","₊⚛⁺(ؔ꒨◡ؔ꒨)ᵌ","(((( ;°Д°))))","｡:ﾟ*+;(●´･д･`●);+*ﾟ:｡","(๑•̀ㅁ•́ฅ)","ヾ(◕д◕❀)ﾂ","❣ヾ( ؔ✪ ⌔ ؔ✪﹡)","*:･✧(ཽ๑ඕัළඕั๑)✧*:･","gurllll","sis","（；¬＿¬)","toreeeeee","༼༼;; ;°;ਊ°;༽","ʢ•╭╮•ʡ✩"];
  console.log(key);

  var colorR = Math.floor((Math.random() * 256));
  var colorG = Math.floor((Math.random() * 256));
  var colorB = Math.floor((Math.random() * 256));

  var key_random = keys[Math.floor(Math.random() * keys.length)];

// trying to assign random fonts
  var fonts = [
  "helvetica",
  "arial narrow",
  "times new roman",
  "comic sans",
  "craftworksans-regular",
  "glock-medium",
  "boogybrut",
  "SwearText-ThinCilati",
  "FZNBSK",

   // "fonts/BoogyBrutPosterTEST-White.otf",
   // "fonts/FZNBSK.TTF",
   // "fonts/SwearTextDemo-ThinCilati.otf",
   // "fonts/CraftworkSans-Regular.ttf",
   // "fonts/GlockGrotesque2-Medium.otf",
  ];

  var index = Math.floor(Math.random() * fonts.length);
  // var font_random = attr.("src",fonts[index]);

 // $(".message").html(key_random);

 // step 1 - create new element
 var new_message = $("<span></span>");

 // step 2 - give new element content
 new_message.html(key_random);

 // step 3 - assign CSS to new element
 new_message.css("color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
 new_message.css("font-family", fonts[index]);

 // step 4 - append new element to message
$(".message").append(new_message);
$(".message").css("background-color","rgb(" + colorR + "," + colorG + "," + colorB + ")")

 // $(".message").append(key_random);
 // $(".message").css("color","rgb(" + colorR + "," + colorG + "," + colorB + ")");

});
